#include <iostream>

int main() {
    float num_1, num_2;

    std::cout << "Enter a numbers:";

    if (std::cin >> num_1 >> num_2) {
        char operation;
        std:: cout << "Enter operation:";
        std::cin >> operation;

        switch (operation) {
            case '+':
                std::cout << "answer = " << num_1 + num_2 << std::endl;
                break;
            case '-':
                std::cout << "answer = " << num_1 - num_2 << std::endl;
                break;
            case '*':
                std::cout << "answer = " << num_1 * num_2 << std::endl;
            break;
            case '/':
                if (num_2 == 0) {
                    std::cout << "Invalid operation!!!" << std::endl;
                }
                else if (num_1 == 0) {
                    std::cout << 1 << std::endl;
                }
                else {
                    std::cout << "answer = " << num_1 / num_2 << std::endl;
                }
                break;
            default:
                std::cout << "Invalid input!!!";
        }

    } else {
        std::cout << "Invalid input!!!" << std::endl;    }
}
