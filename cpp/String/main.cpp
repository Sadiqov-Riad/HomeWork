#include <iostream>

class MyString {
private:
    char* str;
public:
    // Default constructor
    MyString() : str(new char[1]) {
        str[0] = '\0';
    }

    // Constructor
    MyString(const char* s) {
        if (s) {
            size_t len = my_strlen(s);
            str = new char[len + 1];
            my_strcpy(str, s);
        } else {
            str = new char[1];
            str[0] = '\0';
        }
    }

    // Copy constructor
    MyString(const MyString& other) {
        size_t len = my_strlen(other.str);
        str = new char[len + 1];
        my_strcpy(str, other.str);
    }

    // Move assignment operator
    MyString& operator=(MyString&& other) noexcept {
        if (this == &other) {
            return *this;
        }

        delete[] str;

        str = other.str;
        other.str = nullptr;

        return *this;
    }

    // Destructor
    ~MyString() {
        delete[] str;
    }

    size_t my_strlen(const char* s) const {
        size_t len = 0;
        while (s[len] != '\0') {
            len++;
        }
        return len;
    }


    void my_strcpy(char* dest, const char* src) {
        while (*src != '\0') {
            *dest++ = *src++;
        }
        *dest = '\0';
    }


    void my_strcat(char* dest, const char* src) {
        while (*dest != '\0') {
            dest++;
        }
        while (*src != '\0') {
            *dest++ = *src++;
        }
        *dest = '\0';
    }


    size_t length() const {
        return my_strlen(str);
    }


    void append(const char* s) {
        if (s) {
            size_t newLen = my_strlen(str) + my_strlen(s);
            char* newStr = new char[newLen + 1];
            my_strcpy(newStr, str);
            my_strcat(newStr, s);

            delete[] str;
            str = newStr;
        }
    }

    MyString substring(int start, int len) const {
        MyString result;
        if (start >= 0 && start < my_strlen(str)) {
            int i;
            result.str = new char[len + 1];
            for (i = 0; i < len && str[start + i] != '\0'; i++) {
                result.str[i] = str[start + i];
            }
            result.str[i] = '\0';
        }
        return result;
    }


    int find(const char* substr) const {
        size_t len_substr = my_strlen(substr);
        size_t len_str = my_strlen(str);
        for (size_t i = 0; i <= len_str - len_substr; i++) {
            size_t j;
            for (j = 0; j < len_substr; j++) {
                if (str[i + j] != substr[j]) {
                    break;
                }
            }
            if (j == len_substr) {
                return i;
            }
        }
        return -1; 
    }

    void to_upper() {
        for (size_t i = 0; str[i] != '\0'; i++) {
            if (str[i] >= 'a' && str[i] <= 'z') {
                str[i] = str[i] - ('a' - 'A');
            }
        }
    }


    void display() const {
        std::cout << str << std::endl;
    }
};

int main() {
    MyString s1("hello");
    s1.display();

    s1.to_upper();
    s1.display();

    s1.append(" WORLD");
    s1.display();

    MyString s2 = s1.substring(6, 5);
    s2.display();

    int pos = s1.find("WORLD");
    std::cout << "Position of 'WORLD': " << pos << std::endl;

    return 0;
}
