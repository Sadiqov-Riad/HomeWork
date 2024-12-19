#include <iostream>
#include <string.h>

struct Grades {
    float math = 0;
    float eng = 0;
    float physics = 0;
    float chemistry = 0;
    float comp_science = 0;
};

struct Student {
    char name[25];
    unsigned short age;
    float gpa;
    char email[50];
    char phone[20];
    Grades grades;
};

void add_student(Student*& students, int& size, const Student& student) {
    Student* new_students = new Student[size + 1];
    for (int i = 0; i < size; i++) {
        new_students[i] = students[i];
    }
    new_students[size] = student;
    delete[] students;
    students = new_students;
    size++;
}

void remove_student(Student*& students, int& size, int index) {
    if (index < 0 || index >= size) return;

    Student* new_students = new Student[size - 1];
    for (int i = 0, j = 0; i < size; i++) {
        if (i != index) {
            new_students[j++] = students[i];
        }
    }
    delete[] students;
    students = new_students;
    size--;
}

void display_students(const Student* students, int size) {
    for (int i = 0; i < size; i++) {
        std::cout << "Student Name: " << students[i].name << std::endl;
        std::cout << "Student Age: " << students[i].age << std::endl;
        std::cout << "Student GPA: " << students[i].gpa << std::endl;
        std::cout << "Student Email: " << students[i].email << std::endl;
        std::cout << "Student Phone: " << students[i].phone << std::endl;
        std::cout << "Grades (Math): " << students[i].grades.math << std::endl;
        std::cout << "Grades (Eng): " << students[i].grades.eng << std::endl;
        std::cout << "Grades (Physics): " << students[i].grades.physics << std::endl;
        std::cout << "Grades (Chemistry): " << students[i].grades.chemistry << std::endl;
        std::cout << "Grades (Comp Science): " << students[i].grades.comp_science << std::endl;
        std::cout << std::endl;
    }
}

int main() {
    Student* students = nullptr;
    Student student;
    int student_count = 0;
    int choice;

    do {
        std::cout << "1. Add Student\n2. Display Students\n3. Remove Student\n4. Exit\n";
        std::cin >> choice;
        switch (choice) {
        case 1:
            std::cout << "Enter student name: ";
            std::cin >> student.name;
            std::cout << "Enter student age: ";
            std::cin >> student.age;
            std::cout << "Enter student gpa: ";
            std::cin >> student.gpa;
            std::cout << "Enter student email: ";
            std::cin >> student.email;
            std::cout << "Enter student phone: ";
            std::cin >> student.phone;
            std::cout << "Enter student grades (math): ";
            std::cin >> student.grades.math;
            std::cout << "Enter student grades (eng): ";
            std::cin >> student.grades.eng;
            std::cout << "Enter student grades (physics): ";
            std::cin >> student.grades.physics;
            std::cout << "Enter student grades (chemistry): ";
            std::cin >> student.grades.chemistry;
            std::cout << "Enter student grades (comp_science): ";
            std::cin >> student.grades.comp_science;
            add_student(students, student_count, student);
            break;
        case 2:
            display_students(students, student_count);
            break;
        case 3:
            int index;
            std::cout << "Enter the index of the student to remove (0 to " << student_count - 1 << "): ";
            std::cin >> index;
            if (index < 0 || index >= student_count) {
                std::cout << "Invalid index! Please try again.\n";
            }
            else {
                remove_student(students, student_count, index);
            }
            break;
        case 4:
            std::cout << "Exiting program...\n";
            break;
        default:
            std::cout << "Invalid choice! Try again.\n";
            break;
        }
    } while (choice != 4);

    delete[] students;
    return 0;
}
