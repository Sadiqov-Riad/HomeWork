#include <iostream>

void sum_matrix(int (*array_1)[3], int (*array_2)[3], int (*sum)[3]) {

    std::cout << "Sum:" << std::endl;

    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            *(*(sum + i) + j) = *(*(array_1 + i) + j) + *(*(array_2 + i) + j);
            std::cout << *(*(sum + i) + j) << " ";
        }
        std::cout << std::endl;
    }
}

int max_element(int (*array)[3]) {
    int max = **array;


    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            if (*(*(array + i) + j) > max) {
                max = *(*(array + i) + j);
            }
        }
    }
    return max;
}

int diaqonal_sum(int (*array)[3]) {
    int sum_main_diag = 0;
    int sum_secondary_diag = 0;

    for (int i = 0; i < 3; ++i) {
        sum_main_diag += *(*(array + i) + i);
        sum_secondary_diag += *(*(array + i) + (3 - i - 1));
    }
    return sum_main_diag + sum_secondary_diag;
}


int main() {
    int array_A[3][3] = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };
    int array_B[3][3] = {
        {9, 8, 7},
        {6, 5, 4},
        {3, 2, 1}
    };
    int array_C[3][3];

    sum_matrix(array_A, array_B, array_C);

    std::cout << "Max: " << max_element(array_A) << std::endl;

    std::cout << "Sum of diagonals: " << diaqonal_sum(array_A) << std::endl;

    return 0;
}
