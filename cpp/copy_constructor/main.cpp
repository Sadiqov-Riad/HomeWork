#include <iostream>
#include <string.h>

class Grocery {
private:
    char* _name;
    char* _type;
    float _price;
public:
    // Constructor
    Grocery() : _name(nullptr), _type(nullptr), _price(0.0f) {}
    Grocery(char* name, char* type, float price) :
        _name(name), _type(type), _price(price) {}

    // getters
    char* get_name() const;
    char* get_type() const;
    float get_price() const;

    // setters
    void set_name(char* other);
    void set_type(char* other);
    void set_price(float other);
};

char* Grocery::get_name() const {
    return _name;
}
char* Grocery::get_type() const {
    return _type;
}
float Grocery::get_price() const {
    return _price;
}
void Grocery::set_name(char* other) {
    if (other != nullptr) {
        _name = other;
    }
}
void Grocery::set_type(char* other) {
    if (other != nullptr) {
        _type = other;
    }
}
void Grocery::set_price(float other) {
    if (other >= 0) {
        _price = other;
    }
}

class Market {
private:
    char* _name;
    Grocery* _groceries;
    size_t _capacity;
    size_t _count;

public:
    Market(char* name, size_t capacity) {
        _capacity = capacity;
        _name = name;
        _count = 0;
        _groceries = new Grocery[capacity];
    }

    ~Market() {
        delete[] _groceries;
    }

    bool add_grocery_by_index(const Grocery& new_grocery, size_t index) {
        if (index >= _capacity) {
            std::cout << "Invalid index!\n";
            return false;
        }
        if (_count >= _capacity) {
            std::cout << "Market is full!\n";
            return false;
        }

        for (size_t i = _count; i > index; --i) {
            _groceries[i] = _groceries[i - 1];
        }
        _groceries[index] = new_grocery;
        _count++;
        return true;
    }

    bool remove_grocery_by_index(size_t index) {
        if (index >= _count) {
            std::cout << "Invalid index!\n";
            return false;
        }

        for (size_t i = index; i < _count - 1; ++i) {
            _groceries[i] = _groceries[i + 1];
        }
        _count--;
        return true;
    }

    bool find(const char* name) const {
        for (size_t i = 0; i < _count; ++i) {
            if (strcmp(_groceries[i].get_name(), name) == 0) {
                std::cout << "\nGrocery found:\n";
                std::cout << "Name: " << _groceries[i].get_name() << "\n";
                std::cout << "Type: " << _groceries[i].get_type() << "\n";
                std::cout << "Price: " << _groceries[i].get_price() << "\n";
                return true;
            }
        }
        return false;
    }


    Grocery* get_groceries() const {
        return _groceries;
    }

    size_t get_count() const {
        return _count;
    }
};

void display_groceries(const Market& market) {
    for (size_t i = 0; i < market.get_count(); ++i) {
        Grocery* groceries = market.get_groceries();
        std::cout << "\nGrocery " << i + 1 << " :\nName:" << groceries[i].get_name() << "\n"
                  << "Type:" << groceries[i].get_type() << "\n"
                  << "Price:" << groceries[i].get_price() << "\n";
    }
}

int main() {
    char market_name[50] = "Aftandil";
    Market market(market_name, 10);

    int choice;

    std::cout << "=================Aftandil Market=================" << std::endl;

    do {
        std::cout << "Menu:\n";
        std::cout << "1. Add Grocery by Index\n";
        std::cout << "2. Show All Groceries\n";
        std::cout << "3. Remove Grocery by Index\n";
        std::cout << "4. Find Grocery by Name\n";
        std::cout << "5. Exit\n";
        std::cout << "Choose an option: ";

        std::cin >> choice;

        switch (choice) {
        case 1: {
            char grocery_name[50];
            char grocery_type[50];
            float grocery_price;
            size_t index;

            std::cout << "\nEnter grocery name: ";
            std::cin >> grocery_name;
            std::cout << "Enter grocery type: ";
            std::cin >> grocery_type;
            std::cout << "Enter grocery price: ";
            std::cin >> grocery_price;
            std::cout << "Enter index to add grocery: ";
            std::cin >> index;

            Grocery new_grocery(grocery_name, grocery_type, grocery_price);

            if (market.add_grocery_by_index(new_grocery, index)) {
                std::cout << "Added successfully!\n";
            }
            break;
        }
        case 2: {
            display_groceries(market);
            break;
        }
        case 3: {
            size_t index;
            std::cout << "\nEnter index to remove grocery: ";
            std::cin >> index;

            if (market.remove_grocery_by_index(index)) {
                std::cout << "Removed successfully!\n";
            }
            break;
        }
        case 4: {
            char grocery_name[50];
            std::cout << "\nEnter grocery name to find: ";
            std::cin >> grocery_name;

            if (!market.find(grocery_name)) {
                std::cout << "Grocery not found!\n";
            }
            break;
        }
        case 5: {
            std::cout << "Exiting...\n";
            break;
        }
        default: {
            std::cout << "Invalid option, please try again.\n";
            break;
        }
        }
    } while (choice != 5);

    return 0;
}
