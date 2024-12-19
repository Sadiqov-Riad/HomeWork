#include <iostream>

template<typename T>
void fill_array(T* arr, unsigned short size) {
    for (unsigned short i = 0; i < size; i++) {
        arr[i] = rand() % 100;
    }
}

template<typename T>
void display_array(T* arr, unsigned short size) {
    for (unsigned short i = 0; i < size; i++) {
        std::cout << arr[i] << " ";
    }
    std::cout << std::endl;
}

template<typename T>
void insert(T** arr, unsigned short* size, unsigned short index, T our_num) {
    if (index > *size) {
        std::cout << "Index out of bounds." << std::endl;
        return;
    }

    T* new_array = new T[*size + 1];
    for (unsigned short i = 0; i < index; i++) {
        new_array[i] = (*arr)[i];
    }
    new_array[index] = our_num;
    for (unsigned short i = index; i < *size; i++) {
        new_array[i + 1] = (*arr)[i];
    }

    delete[] *arr;
    *arr = new_array;
    (*size)++;
}

template<typename T>
void pop(T** arr, unsigned short* size, unsigned short index) {
    if (index >= *size) {
        std::cout << "Index out of bounds." << std::endl;
        return;
    }

    T* new_array = new T[*size - 1];
    for (unsigned short i = 0; i < index; i++) {
        new_array[i] = (*arr)[i];
    }
    for (unsigned short i = index + 1; i < *size; i++) {
        new_array[i - 1] = (*arr)[i];
    }

    delete[] *arr;
    *arr = new_array;
    (*size)--;
}

template<typename T>
void clear(T** arr, unsigned short* size) {
    delete[] *arr;
    *arr = nullptr;
    *size = 0;
}

int main() {
    unsigned short size;
    std::cout << "Enter array size:";
    std::cin >> size;

    int* numbers_array = new int[size];

    fill_array(numbers_array, size);
    display_array(numbers_array, size);

    insert(&numbers_array, &size, 3, 45);
    display_array(numbers_array, size);

    pop(&numbers_array, &size, 4);
    display_array(numbers_array, size);

    clear(&numbers_array, &size);


    return 0;
}
