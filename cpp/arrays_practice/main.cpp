#include <iostream>

int main() {
    const int ARRAY_SIZE = 3;
    int array[ARRAY_SIZE][ARRAY_SIZE];
    char symbol_array[2] = { '+', 'x' };
    int row, col;

    srand(time(NULL));

    int random_number = rand() % 2;
    std::cout << "Random symbol is " << symbol_array[random_number] <<std::endl;


    for (int i = 0; i < ARRAY_SIZE; i++) {
        for (int j = 0; j < ARRAY_SIZE; j++) {
            array[i][j] = 0;
            std::cout << array[i][j] << " ";
        }
        std::cout << std::endl;
    }

    for (int i = 0; i < ARRAY_SIZE * ARRAY_SIZE; i++) {
        while (true) {
            std::cout << "Enter size:";
            std::cin >> row >> col;
            if (row >= 1 && row <= ARRAY_SIZE && col >= 1 && col <= ARRAY_SIZE) {
                break;
            } else {
                std::cout << "Invalid input! Please try again!" << std::endl;
            }
        }

        array[row - 1][col - 1] = 1;

        for (int i = 0; i < ARRAY_SIZE; i++) {
            for (int j = 0; j < ARRAY_SIZE; j++) {
                std::cout << array[i][j] << " ";
            }
            std::cout << std::endl;
        }

        if (random_number == 0) {
            bool plus_found = true;
            for (int i = 0; i < ARRAY_SIZE; i++) {
                if (array[i][ARRAY_SIZE / 2] != 1) {
                    plus_found = false;
                    break;
                }
            }
            for (int j = 0; j < ARRAY_SIZE; j++) {
                if (array[ARRAY_SIZE / 2][j] != 1) {
                    plus_found = false;
                    break;
                }
            }

            if (plus_found) {
                std::cout << "You entered the correct symbol (+)!" << std::endl;
                break;
            }

        } else {
            bool x_found = true;
            for (int i = 0; i < ARRAY_SIZE; i++) {
                if (array[i][i] != 1 || array[i][ARRAY_SIZE - i - 1] != 1) {
                    x_found = false;
                    break;
                }
            }

            if (x_found) {
                std::cout << "You entered the correct symbol (x)!" << std::endl;
                break;
            }
        }
    }

    return 0;
}
