#include <iostream>

int main() {
    // Task 1
    int size = 3;
    srand(time(NULL));
    int matrix[size][size];


    for (int i = 0; i < size; ++i) {
        for (int j = 0; j < size; ++j) {
            matrix[i][j] = rand() % 10; ;
        }
    }

    std::cout << "Generated matrix:" << std::endl;
    for (int i = 0; i < size; ++i) {
        for (int j = 0; j < size; ++j) {
            std::cout << matrix[i][j] << " ";
        }
        std::cout << std::endl;
    }

    std::cout << std::endl;

    for (int i = 0; i < size / 2; ++i) {
        int temp = matrix[i][i];
        matrix[i][i] = matrix[size-i-1][size-i-1];
        matrix[size-i-1][size-i-1] = temp;
    }

    std::cout << "Matrix after reverse first diaqonal:" << std::endl;
    for (int i = 0; i < size; ++i) {
        for (int j = 0; j < size; ++j) {
            std::cout << matrix[i][j] << " ";
        }
        std::cout << std::endl;
    }

    std::cout << std::endl;

    for (int i = 0; i < size / 2; ++i) {
        int temp = matrix[i][size-i-1];
        matrix[i][size-i-1] = matrix[size-i-1][i];
        matrix[size-i-1][i] = temp;
    }

    std::cout << "Matrix after reverse second diaqonal:" << std::endl;
    for (int i = 0; i < size; ++i) {
        for (int j = 0; j < size; ++j) {
            std::cout << matrix[i][j] << " ";
        }
        std::cout << std::endl;
    }
    // Task 2
    // int rows, cols, shift;
    // srand(time(NULL));
    //
    // std::cout << "Enter rows and cols:";
    // std::cin >> rows >> cols;
    //
    // int matrix[rows][cols];
    //
    // for (int i = 0; i < rows; ++i) {
    //     for (int j = 0; j < cols; ++j) {
    //         matrix[i][j] = rand() % 10; ;
    //     }
    // }
    //
    // std::cout << "Generated matrix:" << std::endl;
    // for (int i = 0; i < rows; ++i) {
    //     for (int j = 0; j < cols; ++j) {
    //         std::cout << matrix[i][j] << " ";
    //     }
    //     std::cout << std::endl;
    // }
    //
    // do {
    //     std::cout << "Enter the shift value (-2 2):";
    //     std::cin >> shift;
    // } while (shift < -2 || shift > 2);
    //
    // if (shift > 0) {
    //     for (int i = 0; i < rows; ++i) {
    //         int temp[shift];
    //         for (int j = 0; j < shift; ++j) {
    //             temp[j] = matrix[i][cols - shift + j];
    //         }
    //         for (int j = cols - 1; j >= shift; --j) {
    //             matrix[i][j] = matrix[i][j - shift];
    //         }
    //         for (int j = 0; j < shift; ++j) {
    //             matrix[i][j] = temp[j];
    //         }
    //     }
    // } else if (shift < 0) {
    //     shift = -shift;
    //     for (int i = 0; i < rows; ++i) {
    //         int temp[shift];
    //         for (int j = 0; j < shift; ++j) {
    //             temp[j] = matrix[i][j];
    //         }
    //         for (int j = 0; j < cols - shift; ++j) {
    //             matrix[i][j] = matrix[i][j + shift];
    //         }
    //         for (int j = 0; j < shift; ++j) {
    //             matrix[i][cols - shift + j] = temp[j];
    //         }
    //     }
    // }
    //
    // std::cout << "Result:" << std::endl;
    // for (int i = 0; i < rows; ++i) {
    //     for (int j = 0; j < cols; ++j) {
    //         std::cout << matrix[i][j] << " ";
    //     }
    //     std::cout << std::endl;
    // }

    return 0;
}
