#include <iostream>
// Task 3
double add(double a, double b) {
    return a + b;
}

double subtract(double a, double b) {
    return a - b;
}

double multiply(double a, double b) {
    return a * b;
}

double divide(double a, double b) {
    if (b == 0) {
        std::cout << "Divide by 0" << std::endl;
        return 0.0;
    } else {
        return a / b;
    }
}

int main() {
    double (*functions[])(double, double) = {add, subtract, multiply, divide};

    double a, b;
    int index;

    std::cout << "Выберите операцию:\n";
    std::cout << "1. Сложение\n";
    std::cout << "2. Вычитание\n";
    std::cout << "3. Умножение\n";
    std::cout << "4. Деление\n";
    std::cout << "0. Выход\n";

    while (true) {
        std::cout << "Введите номер операции: ";
        std::cin >> index;

        if (index == 0) {
            std::cout << "Выход из программы." << std::endl;
            break;
        }

        if (index < 1 || index > 4) {
            std::cout << "Неверный ввод. Попробуйте снова." << std::endl;
            continue;
        }

        std::cout << "Введите два числа: ";
        std::cin >> a >> b;

        std::cout << "Результат: " << functions[index - 1](a, b) << std::endl;
    }

    return 0;
}