#include <iostream>

template <typename T>
class MyVector {
private:
    T* data;
    int capacity;
    int size;

    void resize(int new_capacity) {
        T* new_data = new T[new_capacity];
        for (int i = 0; i < size; ++i) {
            new_data[i] = data[i];
        }
        delete[] data;
        data = new_data;
        capacity = new_capacity;
    }

public:
    MyVector(int initial_capacity = 10)
        : capacity(initial_capacity), size(0) {
        data = new T[capacity];
    }

    ~MyVector() {
        delete[] data;
    }

    void push_back(const T& value) {
        if (size == capacity) {
            resize(capacity * 2);
        }
        data[size++] = value;
    }

    T pop_back() {
        if (size == 0) {
            throw "vector is empty!";
        }
        return data[--size];
    }

    bool contains(const T& value) const {
        for (int i = 0; i < size; ++i) {
            if (data[i] == value) {
                return true;
            }
        }
        return false;
    }

    void reverse() {
        for (int i = 0; i < size / 2; ++i) {
            T temp = data[i];
            data[i] = data[size - i - 1];
            data[size - i - 1] = temp;
        }
    }

    MyVector copy() const {
        MyVector<T> new_vector(capacity);
        new_vector.size = size;
        for (int i = 0; i < size; ++i) {
            new_vector.data[i] = data[i];
        }
        return new_vector;
    }

    bool operator==(const MyVector& other) const {
        if (size != other.size) {
            return false;
        }
        for (int i = 0; i < size; ++i) {
            if (data[i] != other.data[i]) {
                return false;
            }
        }
        return true;
    }

    bool operator!=(const MyVector& other) const {
        return !(*this == other);
    }

    void sort() {
        for (int i = 0; i < size - 1; ++i) {
            for (int j = 0; j < size - i - 1; ++j) {
                if (data[j] > data[j + 1]) {
                    T temp = data[j];
                    data[j] = data[j + 1];
                    data[j + 1] = temp;
                }
            }
        }
    }

    void swap(MyVector& other) {
        T* temp_data = data;
        int temp_size = size;
        int temp_capacity = capacity;

        data = other.data;
        size = other.size;
        capacity = other.capacity;

        other.data = temp_data;
        other.size = temp_size;
        other.capacity = temp_capacity;
    }

    void print() const {
        for (int i = 0; i < size; ++i) {
            std::cout << data[i] << " ";
        }
        std::cout << std::endl;
    }
};

int main() {
    MyVector<int> vec;

    vec.push_back(3);
    vec.push_back(1);
    vec.push_back(4);
    vec.push_back(1);
    vec.push_back(5);

    std::cout << "initial vector: ";
    vec.print();

    std::cout << "pop_back: " << vec.pop_back() << std::endl;

    std::cout << "contains 4: " << vec.contains(4) << std::endl;
    std::cout << "contains 6: " << vec.contains(6) << std::endl;

    vec.reverse();
    std::cout << "reversed vector: ";
    vec.print();

    MyVector<int> vec_copy = vec.copy();
    std::cout << "copied vector: ";
    vec_copy.print();

    vec.sort();
    std::cout << "sorted vector: ";
    vec.print();

    MyVector<int> vec2;
    vec2.push_back(7);
    vec2.push_back(8);

    std::cout << "vector 2 before swap: ";
    vec2.print();

    vec.swap(vec2);

    std::cout << "vector 1 after swap: ";
    vec.print();
    std::cout << "vector 2 after swap: ";
    vec2.print();

    return 0;
}
