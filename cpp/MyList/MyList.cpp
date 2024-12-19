#include <iostream>

template <typename T>
class MyList {
private:
    T* _data;
    int _capacity;
    int _size;
    int _front;
    int _back;

    void resize() {
        _capacity *= 2;
        T* new_data = new T[_capacity];
        for (int i = 0; i < _size; ++i) {
            new_data[i] = _data[(_front + i) % _capacity];
        }
        delete[] _data;
        _data = new_data;
        _front = 0;
        _back = _size;
    }

public:
    MyList() : _data(new T[10]), _capacity(10), _size(0), _front(0), _back(0) {}

    ~MyList() {
        delete[] _data;
    }

    void push_back(const T& value) {
        if (_size == _capacity) {
            resize();
        }
        _data[_back] = value;
        _back = (_back + 1) % _capacity;
        ++_size;
    }

    void push_front(const T& value) {
        if (_size == _capacity) {
            resize();
        }
        _front = (_front - 1 + _capacity) % _capacity;
        _data[_front] = value;
        ++_size;
    }

    void pop_back() {
        if (_size == 0) return;
        _back = (_back - 1 + _capacity) % _capacity;
        --_size;
    }

    void pop_front() {
        if (_size == 0) return;
        _front = (_front + 1) % _capacity;
        --_size;
    }

    T& front() {
        return _data[_front];
    }

    T& back() {
        return _data[(_back - 1 + _capacity) % _capacity];
    }

    bool is_empty() const {
        return _size == 0;
    }

    int get_size() const {
        return _size;
    }

    void clear() {
        _size = 0;
        _front = _back = 0;
    }
};

int main() {
    MyList<int> list;

    list.push_back(10);
    list.push_back(20);
    list.push_front(5);

    std::cout << "Front: " << list.front() << std::endl;
    std::cout << "Back: " << list.back() << std::endl;
    std::cout << "Size: " << list.get_size() << std::endl;

    list.pop_front();
    list.pop_back();

    std::cout << "Front after pop_front: " << list.front() << std::endl;
    std::cout << "Size after pops: " << list.get_size() << std::endl;

    list.clear();
    std::cout << "Is list empty? " << list.is_empty() << std::endl;

    return 0;
}
