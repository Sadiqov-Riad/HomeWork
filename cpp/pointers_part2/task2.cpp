#include <iostream>
// Task 2

void sortArray(int* arr, int size, int (*func)(int, int)) {
    for (int i = 0; i < size; i++) {
        for (int j = 0; j < size; j++) {
            if (func(arr[j], arr[i])) {
                int temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
}

int compareAsc(int a, int b) {
    return a < b;
}

int compareDesc(int a, int b) {
    return a > b;
}

void printArray(int* arr, int size) {
    for (int i = 0; i < size; ++i) {
        std::cout << arr[i] << " ";
    }
    std::cout << std::endl;
}

int main() {
    int arr[] = {5, 2, 9, 1, 3, 6};
    int size = 6;

    std::cout << "Original array: ";
    printArray(arr, size);

    sortArray(arr, size, compareAsc);
    std::cout << "Sorted in ascending order: ";
    printArray(arr, size);

    sortArray(arr, size, compareDesc);
    std::cout << "Sorted in descending order: ";
    printArray(arr, size);

    return 0;
}