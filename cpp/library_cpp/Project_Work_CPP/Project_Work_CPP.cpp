#include <iostream>
#include <stdio.h>
#include <string.h>


int read_file();// Чтение книг из файла

void save_file(int count);// Перезапись всех книг в файл

bool book_exists(const char* title, int count);// Проверка существования книги

char to_lower(char ch);// Преобразование символа в нижний регистр

bool delete_book(const char* title, int& count);// Удаление книги

int search_books(const char* substring, int count, int* found_indexes);// Поиск книг по подстроке

void edit_book(int index, int count);// Редактирование книги


struct Book {
    char title[30];
    char author[30];
    unsigned short year_of_publication;
    char genre[30];
    bool available;
};

const int max_books = 100;
Book books[max_books]; // Массив книг в памяти

// Функция для чтения всех книг из файла в массив
int read_file() {
    FILE* file;
    if (fopen_s(&file, "library.bin", "rb") != 0) {
        std::cout << "Error opening file!\n";
        return 0;
    }

    int count = 0;
    while (fread(&books[count], sizeof(Book), 1, file) == 1) {
        count++;
    }

    fclose(file);
    return count;
}

// Функция для сохранения одной книги в файл
void write_to_file(const Book& newBook) {
    FILE* file;
    if (fopen_s(&file, "library.bin", "ab") != 0) {
        std::cout << "Error opening file!\n";
        return;
    }

    fwrite(&newBook, sizeof(Book), 1, file);
    fclose(file);
}

// Функция для перезаписи всех книг в файл
void save_file(int count) {
    FILE* file;
    if (fopen_s(&file, "library.bin", "wb") != 0) {
        std::cout << "Error opening file!\n";
        return;
    }

    for (int i = 0; i < count; ++i) {
        fwrite(&books[i], sizeof(Book), 1, file);
    }

    fclose(file);
}


// Функция для приведения символа к нижнему регистру
char to_lower(char ch) {
    if (ch >= 'A' && ch <= 'Z') {
        return ch + ('a' - 'A');
    }
    return ch;
}

// Функция для проверки существования книги
bool book_exists(const char* title, int count) {
    char lower_title[30];

    // Преобразуем введённое название в нижний регистр
    for (int i = 0; title[i] != '\0' && i < sizeof(lower_title) - 1; i++) {
        lower_title[i] = to_lower(title[i]);
    }
    lower_title[strlen(title)] = '\0';

    // Проверяем каждую книгу
    for (int i = 0; i < count; i++) {
        char lower_book_title[30];

        // Преобразуем название книги из массива в нижний регистр
        for (int j = 0; books[i].title[j] != '\0' && j < sizeof(lower_book_title) - 1; j++) {
            lower_book_title[j] = to_lower(books[i].title[j]);
        }
        lower_book_title[strlen(books[i].title)] = '\0';

        // Сравниваем названия книг
        if (strcmp(lower_title, lower_book_title) == 0) {
            return true;
        }
    }

    return false;
}


// Функция для добавления книги
void add_book(const Book& newBook, int& count) {
    if (book_exists(newBook.title, count)) {
        std::cout << "A book with the title \"" << newBook.title << "\" already exists.\n";
        return;
    }

    books[count] = newBook;
    count++;
    write_to_file(newBook);
}

// Функция для удаления книги
bool delete_book(const char* title, int& count) {
    int found_index = -1;
    for (int i = 0; i < count; ++i) {
        if (strcmp(books[i].title, title) == 0) {
            found_index = i;
            break;
        }
    }

    if (found_index == -1) {
        return false;
    }

    for (int i = found_index; i < count - 1; ++i) {
        books[i] = books[i + 1];
    }
    count--;
    save_file(count);
    return true;
}

// Функция для поиска книг по подстроке и возвращения индексов найденных книг
int search_books(const char* substring, int count, int* found_indexes) {
    int found_count = 0;
    for (int i = 0; i < count; ++i) {
        const char* title = books[i].title;
        bool match = true;

        for (const char* sub_ptr = substring; *sub_ptr != '\0'; ++sub_ptr) {
            bool found_char = false;
            for (const char* title_ptr = title; *title_ptr != '\0'; ++title_ptr) {
                if (to_lower(*sub_ptr) == to_lower(*title_ptr)) {
                    found_char = true;
                    break;
                }
            }
            if (!found_char) {
                match = false;
                break;
            }
        }

        if (match) {
            found_indexes[found_count++] = i;
        }
    }
    return found_count;
}

// Функция для изменения атрибута книги
void edit_book(int index, int count) {
    int attribute_choice;
    std::cout << "Edit which attribute?\n";
    std::cout << "1. Title\n";
    std::cout << "2. Author\n";
    std::cout << "3. Year of publication\n";
    std::cout << "4. Genre\n";
    std::cout << "5. Availability\n";
    std::cout << "Enter your choice: ";
    std::cin >> attribute_choice;
    std::cin.ignore(); // Игнорируем остаток строки

    switch (attribute_choice) {
    case 1: { // Изменение названия книги
        char new_title[30];
        std::cout << "Enter new title: ";
        std::cin.getline(new_title, sizeof(new_title));

        // Проверка, есть ли уже книга с таким названием
        if (book_exists(new_title, count)) {
            std::cout << "A book with the title \"" << new_title << "\" already exists. Please enter a different title.\n";
            break;
        }

        strcpy_s(books[index].title, new_title); // Обновление названия книги
        std::cout << "Title updated successfully.\n";
        break;
    }
    case 2: // Изменение автора книги
        std::cout << "Enter new author: ";
        std::cin.getline(books[index].author, sizeof(books[index].author));
        std::cout << "Author updated successfully.\n";
        break;
    case 3: // Изменение года публикации
        std::cout << "Enter new year of publication: ";
        std::cin >> books[index].year_of_publication;
        std::cin.ignore();
        std::cout << "Year of publication updated successfully.\n";
        break;
    case 4: // Изменение жанра книги
        std::cout << "Enter new genre: ";
        std::cin.getline(books[index].genre, sizeof(books[index].genre));
        std::cout << "Genre updated successfully.\n";
        break;
    case 5: // Изменение доступности книги
        std::cout << "Is the book available (1 - yes, 0 - no): ";
        std::cin >> books[index].available;
        std::cin.ignore();
        std::cout << "Availability updated successfully.\n";
        break;
    default:
        std::cout << "Invalid choice. No changes made.\n";
        break;
    }
}



int main() {
    int choice;
    int count = read_file();

    do {
        std::cout << "Menu:\n";
        std::cout << "1. Add a book\n";
        std::cout << "2. Search for a book\n";
        std::cout << "3. Delete a book\n";
        std::cout << "4. Display all books\n";
        std::cout << "5. Edit a book\n";
        std::cout << "6. Exit\n";
        std::cout << "Enter your choice: ";
        std::cin >> choice;
        std::cin.ignore();

        switch (choice) {
        case 1: {
            Book newBook;

            std::cout << "Enter book title: ";
            std::cin.getline(newBook.title, sizeof(newBook.title));

            std::cout << "Enter book author: ";
            std::cin.getline(newBook.author, sizeof(newBook.author));

            std::cout << "Enter year of publication: ";
            std::cin >> newBook.year_of_publication;
            std::cin.ignore();

            std::cout << "Enter book genre: ";
            std::cin.getline(newBook.genre, sizeof(newBook.genre));

            std::cout << "Is the book available (1 - yes, 0 - no): ";
            std::cin >> newBook.available;

            add_book(newBook, count);
            break;
        }
        case 2: {
            char substring[30];
            std::cout << "Enter part of the title to search for: ";
            std::cin.getline(substring, sizeof(substring));

            int found_indexes[max_books]; // Массив для хранения индексов найденных книг
            int found_count = search_books(substring, count, found_indexes);

            if (found_count == 0) {
                std::cout << "No books found.\n";
            }
            else {
                std::cout << "Found books:\n";
                for (int i = 0; i < found_count; ++i) {
                    int index = found_indexes[i];
                    std::cout << "-------------------------------\n";
                    std::cout << "Title: " << books[index].title << "\n";
                    std::cout << "Author: " << books[index].author << "\n";
                    std::cout << "Year of publication: " << books[index].year_of_publication << "\n";
                    std::cout << "Genre: " << books[index].genre << "\n";
                    std::cout << "Available: " << (books[index].available ? "Yes" : "No") << "\n";
                    std::cout << "-------------------------------\n";
                }
            }
            break;
        }
        case 3: {
            char title[30];
            std::cout << "Enter the title of the book to delete: ";
            std::cin.getline(title, sizeof(title));

            if (delete_book(title, count)) {
                std::cout << "Book successfully deleted.\n";
            }
            else {
                std::cout << "Book not found.\n";
            }
            break;
        }
        case 4:
            if (count == 0) {
                std::cout << "No books available.\n";
            }
            else {
                for (int i = 0; i < count; ++i) {
                    std::cout << "-------------------------------\n";
                    std::cout << "Title: " << books[i].title << "\n";
                    std::cout << "Author: " << books[i].author << "\n";
                    std::cout << "Year of publication: " << books[i].year_of_publication << "\n";
                    std::cout << "Genre: " << books[i].genre << "\n";
                    std::cout << "Available: " << (books[i].available ? "Yes" : "No") << "\n";
                    std::cout << "-------------------------------\n";
                }
            }
            break;
        case 5: {
            char title[30];
            std::cout << "Enter the title of the book to edit: ";
            std::cin.getline(title, sizeof(title));

            int found_index = -1;
            for (int i = 0; i < count; ++i) {
                if (strcmp(books[i].title, title) == 0) {
                    found_index = i;
                    break;
                }
            }

            if (found_index == -1) {
                std::cout << "Book not found.\n";
            }
            else {
                edit_book(found_index,count);
            }
            break;
        }

        case 6:
            std::cout << "Exiting program.\n";
            break;
        default:
            std::cout << "Invalid choice. Please try again.\n";
        }
    } while (choice != 6);

    return 0;
}
