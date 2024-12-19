#include <iostream>


char str_copy(char str1[], char str2[]) {
    int len = 0;

    for (int i = 0; str2[i] != '\0'; i++) {
        len++;
    }

    for (int i = 0; i < len + 1; i++) {
        str1[i] = str2[i];
    }
    return str1[len + 1];
}


void strcat(char* str1, char* str2) {
    int len1 = 0, len2 = 0;

    while (str1[len1] != '\0') {
        len1++;
    }

    while (str2[len2] != '\0') {
        len2++;
    }

    for (int i = 0; i < len2; i++) {
        str1[len1 + i] = str2[i];
    }

    str1[len1 + len2] = '\0';
}

char str_chr(char str[], char symbol) {
    for (int i = 0; str[i] != '\0'; i++) {
        if (str[i] == symbol) {
            return str[i];
        }
    }
    return '\0';
}

const char* str_str(const char* str, const char* substr) {
    for (int i = 0; str[i] != '\0'; ++i) {
        int j = 0;

        while (substr[j] != '\0' && str[i + j] == substr[j]) {
            ++j;
        }

        if (substr[j] == '\0') {
            return str + i;
        }
    }

    return nullptr;
}

int str_len(const char str[]) {
    int len = 0;
    while (str[len] != '\0') {
        ++len;
    }
    return len;
}


int main()
{
    char source[] = "Hello World!";
    char destination[100];

    str_copy(destination, source);

    std::cout << destination << std::endl;

    char str1[] = "Hello ";
    char str2[] = "World!";
    strcat(str1, str2);

    std::cout << str1 << std::endl;

    std::cout << str_chr(str1, 'o') << std::endl;

    std::cout << str_str(str1, "ll") << std::endl;

    std::cout << str_len(str1) << std::endl;

    return 0;
}
