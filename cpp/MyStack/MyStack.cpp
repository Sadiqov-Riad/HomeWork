#include <iostream>


template <typename T>
class Stack {
private:
    T* _data;
    int _capacity;
    int _size;

    void resize() {
        _capacity *= 2;
        T* new_data = new T[_capacity];
        for (int i = 0; i < _size; ++i) {
            new_data[i] = _data[i];
        }
        delete[] _data;
        _data = new_data;
    }

public:
    Stack(int initial_capacity = 10) : _capacity(initial_capacity), _size(0) {
        _data = new T[_capacity];
    }

    ~Stack() {
        delete[] _data;
    }

    void push(const T& value) {
        if (_size == _capacity) {
            resize();
        }
        _data[_size++] = value;
    }

    void pop() {
        if (is_empty()) {
            throw std::out_of_range("Stack is empty");
        }
        --_size;
    }

    T& top() {
        if (is_empty()) {
            throw std::out_of_range("Stack is empty");
        }
        return _data[_size - 1];
    }

    bool is_empty() const {
        return _size == 0;
    }

    int get_size() const {
        return _size;
    }
};

int main() {
    try {
        Stack<int> stack;

        stack.push(10);
        stack.push(20);
        stack.push(30);

        std::cout << "Top of the stack: " << stack.top() << std::endl;
        std::cout << "Stack size: " << stack.get_size() << std::endl;

        stack.pop();
        std::cout << "Top of the stack: " << stack.top() << std::endl;
        std::cout << "Stack size: " << stack.get_size() << std::endl;

        stack.pop();
        stack.pop();

        stack.pop();
    }
    catch (const std::out_of_range& e) {
        std::cout << "Exception: " << e.what() << std::endl;
    }

    return 0;
}
