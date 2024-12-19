#include <iostream>
#include <string.h>

class Grocery {
private:
    char* _name;
    char* _type;
    float _price;
    static int _count;

public:
    Grocery() {
        _name = nullptr;
        _type = nullptr;
        _price = 0;
        ++_count;
    }

    Grocery(const char* name, const char* type, float price) : _price(price) {
        _name = new char[strlen(name) + 1];
        _type = new char[strlen(type) + 1];
        strcpy(_name, name);
        strcpy(_type, type);
        ++_count;
    }

    Grocery(const Grocery& other) : _price(other._price) {
        if (other._name && other._type) {
            _name = new char[strlen(other._name) + 1];
            _type = new char[strlen(other._type) + 1];
            strcpy(_name, other._name);
            strcpy(_type, other._type);
        } else {
            _name = nullptr;
            _type = nullptr;
        }
        ++_count;
    }

    ~Grocery() {
        delete[] _name;
        delete[] _type;
        --_count;
    }

    Grocery& operator=(const Grocery& other) {
        if (this != &other) {
            delete[] _name;
            delete[] _type;
            _price = other._price;
            if (other._name && other._type) {
                _name = new char[strlen(other._name) + 1];
                _type = new char[strlen(other._type) + 1];
                strcpy(_name, other._name);
                strcpy(_type, other._type);
            } else {
                _name = nullptr;
                _type = nullptr;
            }
        }
        return *this;
    }

    Grocery(Grocery&& other) noexcept : _name(other._name), _type(other._type), _price(other._price) {
        other._name = nullptr;
        other._type = nullptr;
        other._price = 0;
        ++_count;
    }

    Grocery& operator=(Grocery&& other) noexcept {
        if (this != &other) {
            delete[] _name;
            delete[] _type;
            _name = other._name;
            _type = other._type;
            _price = other._price;
            other._name = nullptr;
            other._type = nullptr;
            other._price = 0;
        }
        return *this;
    }

    bool operator==(const Grocery& other) const {
        return (strcmp(_name, other._name) == 0 && strcmp(_type, other._type) == 0);
    }

    Grocery operator+(const Grocery& other) const {
        Grocery combined("Combined", "Various", _price + other._price);
        return combined;
    }

    Grocery& operator++() {
        _price += 1.0;
        return *this;
    }

    Grocery operator++(int) {
        Grocery temp = *this;
        ++(*this);
        return temp;
    }

    static int get_count() {
        return _count;
    }

    char* get_name() const { return _name; }
    char* get_type() const { return _type; }
    float get_price() const { return _price; }

    void set_name(char* other) {
        if (other != nullptr) {
            _name = other;
        }
    }
    void set_type(char* other) {
        if (other != nullptr) {
            _type = other;
        }
    }
    void set_price(float other) {
        if (other >= 0) {
            _price = other;
        }
    }
};

int Grocery::_count = 0;

class Market {
private:
    char* _name;
    Grocery* _groceries;
    size_t _capacity;
    size_t _count;
    static float _total_budget;

public:
    Market(const char* name, size_t capacity) {
        _capacity = capacity;
        _name = new char[strlen(name) + 1];
        strcpy(_name, name);
        _count = 0;
        _groceries = new Grocery[capacity];
    }

    ~Market() {
        delete[] _groceries;
        delete[] _name;
    }

    bool add_grocery(const Grocery& grocery) {
        if (_count < _capacity) {
            _groceries[_count++] = grocery;
            _total_budget += grocery.get_price();
            return true;
        }
        return false;
    }

    bool remove_grocery(const char* name) {
        for (size_t i = 0; i < _count; i++) {
            if (strcmp(_groceries[i].get_name(), name) == 0) {
                for (size_t j = i; j < _count - 1; j++) {
                    _groceries[j] = _groceries[j + 1];
                }
                --_count;
                return true;
            }
        }
        return false;
    }

    size_t get_count() const { return _count; }

    const Grocery& get_grocery(int index) {
        if (index >= 0 && index < _count) {
            return _groceries[index];
        }
        throw std::out_of_range("Invalid index");
    }

    static Grocery* search_grocery(Grocery* groceries, size_t size, const char* name) {
        for (size_t i = 0; i < size; ++i) {
            if (strcmp(groceries[i].get_name(), name) == 0) {
                return &groceries[i];
            }
        }
        return nullptr;
    }

    static Grocery* create_predefined_products(size_t& size) {
        static Grocery predefined[] = {
            Grocery("Apple", "Fruit", 2.0),
            Grocery("Milk", "Dairy", 1.5),
            Grocery("Bread", "Bakery", 1.0)
        };
        size = sizeof(predefined) / sizeof(predefined[0]);
        return predefined;
    }

    static void increase_budget(float amount) {
        if (amount > 0) {
            _total_budget += amount;
        }
    }

    static void decrease_budget(float amount) {
        if (amount > 0 && amount <= _total_budget) {
            _total_budget -= amount;
        }
    }

    static float get_total_budget() {
        return _total_budget;
    }
};

float Market::_total_budget = 0.0f;

void display_products(Market& market) {
    for (size_t i = 0; i < market.get_count(); i++) {
        std::cout << "\nName: " << market.get_grocery(i).get_name();
        std::cout << "\nType: " << market.get_grocery(i).get_type();
        std::cout << "\nPrice: " << market.get_grocery(i).get_price();
    }
}

int main() {
    Market market("AftandilShop", 10);

    Grocery product_1("Orange", "Fruit", 5);
    Grocery product_2("Banana", "Fruit", 9);
    Grocery product_3("Cucumber", "Vegetable", 1.2f);
    Grocery product_4(product_3);

    product_2 = product_1;
    product_3 = std::move(product_2);

    market.add_grocery(product_1);
    market.add_grocery(product_3);
    market.add_grocery(product_4);

    display_products(market);

    std::cout << "\nCount of Grocery: " << Grocery::get_count() << std::endl;
    std::cout << "\nTotal Market Budget: " << Market::get_total_budget() << std::endl;

    return 0;
}
