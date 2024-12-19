#include <iostream>
#include <fstream>

struct Student {
    char name[30];
    int age;
    float gpa;
};

void write_to_file(const Student* students, int count, const char* file_name) {
    std::ofstream out_file(file_name);
    if (!out_file) {
        std::cout << "Can't open the file!" << std::endl;
        return;
    }

    out_file << count << std::endl;

    // Записываем каждого студента
    for (int i = 0; i < count; ++i) {
        out_file << students[i].name << std::endl;
        out_file << students[i].age << std::endl;
        out_file << students[i].gpa << std::endl;
    }

    out_file.close();
}

void read_from_file(Student*& students, int& count, const char* file_name) {
    std::ifstream in_file(file_name);
    if (!in_file) {
        std::cout << "Can't open the file!" << std::endl;
        return;
    }

    students = new Student[count];

    for (int i = 0; i < count; ++i) {
        in_file.getline(students[i].name, sizeof(students[i].name));
        in_file >> students[i].age;
        in_file >> students[i].gpa;
    }

    in_file.close();
}

int main() {
    int SIZE = 100;
    int count = 4;

    Student students[SIZE] = {
        {"Aftandil", 45, 4.5},
        {"Leyla", 22, 3.9},
        {"Aftandil", 45, 4.5},
        {"Leyla", 22, 3.9},
    };
    const char* file_name = "students.txt";

    write_to_file(students, 4, file_name);

    Student* new_students;
    read_from_file(new_students, count, file_name);

    for (int i = 0; i < count; ++i) {
        std::cout << "Name: " << new_students[i].name << std::endl;
        std::cout << "Age: " << new_students[i].age << std::endl;
        std::cout << "GPA: " << new_students[i].gpa << std::endl;
        std::cout << std::endl;
    }

    delete[] new_students;

    return 0;
}
