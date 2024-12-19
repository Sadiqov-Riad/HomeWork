#include <iostream>

double add(double a, double b) {
    return a + b;
}

double subtract(double a, double b) {
    return a - b;
}

double multiply(double a, double b) {
    return a * b;
}

double divide(double a, double b) {
    if (b == 0) {
        std::cout << "Divide by 0" << std::endl;
        return 0.0;
    }else {
        return a / b;
    }
}

int main() {

    double (*functions[])(double, double) = {add, subtract, multiply, divide};

    double a = 10.0;
    double b = 0;
    for (int i = 0; i < 4; ++i) {
        double result = functions[i](a, b);
        std::cout << "Result of function " << i + 1 << ": " << result << std::endl;
    }

    return 0;
}
