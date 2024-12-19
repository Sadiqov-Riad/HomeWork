#include <iostream>

int main() {
    int height;

    std::cout << "Enter Height:";
    std::cin >> height;

// Задание 1

    for (int i = 1; i <= height; i++) {
        std::cout << "*" ;
    }

    std::cout << std::endl;

    for (int i = 0; i < height - 2; i++) {
        for (int j = 0; j < (height - 1) - i ; j++) {
            std::cout << "*";
        }

        for (int j = 0; j < i ; j++) {
            std:: cout << " ";
        }

        std::cout << "*" ;

        std::cout << std::endl;
    }

    for (int i = 0; i < height; i++) {
        std::cout << "*";
    }

// Задание 2
    // for (int i = 0; i < height; i++) {
    //     for (int j = 0; j < height - i; j++) {
    //         std:: cout << "*";
    //     }
    //     for (int j = 0; j < i * 2; j++) {
    //         std:: cout << " ";
    //     }
    //     for (int j = 0; j < height - i; j++) {
    //         std:: cout << "*";
    //     }
    //     std:: cout << std::endl;
    // }
    //
    // for (int i = 0; i < height; i++) {
    //     for (int j = 0; j < i + 1; j++) {
    //         std:: cout << "*";
    //     }
    //     for (int j = 0; j < (height - i - 1) * 2; j++) {
    //         std:: cout << " ";
    //     }
    //     for (int j = 0; j < i + 1; j++) {
    //         std:: cout << "*";
    //     }
    //     std:: cout << std:: endl;
    // }

    return 0;
}