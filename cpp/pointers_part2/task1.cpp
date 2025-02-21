#include <iostream>
// Task 1
void print_length(const char* string) {
    int length = 0;
    for (int i = 0; string[i] != '\0'; i++) {
        length++;
    }
    std::cout << "Length: " << length << std::endl;
}

void print_upper(const char* string) {
    for (int i = 0; string[i] != '\0'; i++) {
        char symbol = string[i];
        if (symbol >= 'a' && symbol <= 'z') // мне это вывел ассистент из clion, сам я пока не разобрался почему это условие работает
            {
            symbol = symbol - 32;
        }

        std::cout << symbol;
    }
    std::cout << std::endl;
}

void process_string(const char* string,  void (*func)(const char*)) {
    func(string);
}

int main() {
    const char* string = "Hello, World!";
    void (*functions[])(const char*) = {print_upper, print_length};

    process_string(string, functions[0]);
    process_string(string, functions[1]);


    return 0;
}
