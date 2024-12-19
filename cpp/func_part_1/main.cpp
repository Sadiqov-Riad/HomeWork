#include <iostream>
// Task 1
const int SIZE = 100;
const int HEIGHT = 2, WIDTH = 3;

void generate_matrix(int matrix[SIZE][SIZE]) {
    srand(time(NULL));
    for (int i = 0; i < HEIGHT; ++i) {
        for (int j = 0; j < WIDTH; ++j) {
            matrix[i][j] = rand() % 10;
        }
    }
}

void printMatrix(int matrix[SIZE][SIZE],int height, int width) {
    for (int i = 0; i < height; ++i) {
        for (int j = 0; j < width; ++j) {
            std::cout << matrix[i][j] << " ";
        }
        std::cout << std::endl;
    }
}

void transpose_matrix(int transposed_matrix[SIZE][SIZE], int matrix[SIZE][SIZE]) {
    for (int i = 0; i < HEIGHT; i++) {
        for (int j = 0; j < WIDTH; j++) {
            transposed_matrix[j][i] = matrix[i][j];
        }
    }

}

int main() {
    int array[SIZE][SIZE];
    int sec_array[SIZE][SIZE];

    std::cout << "Before:" << std::endl;
    generate_matrix(array);
    printMatrix(array,HEIGHT,WIDTH);

    std::cout << std::endl;

    std::cout << "After:" << std::endl;
    transpose_matrix(sec_array,array);
    printMatrix(sec_array,WIDTH,HEIGHT);

    return 0;
}
