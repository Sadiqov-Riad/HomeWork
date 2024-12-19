#include <iostream>
#include <string.h>

class Course
{
protected:
    char* _title;
    int _credits;

public:
    Course(const char* title = "", int credits = 0)
    {
        _title = new char[strlen(title) + 1];
        strcpy(_title, title);
        _credits = credits;
    }

    virtual ~Course()
    {
        delete[] _title;
    }

    char* get_title() const { return _title; }
    int get_credits() const { return _credits; }

    void set_title(const char* title)
    {
        delete[] _title;
        _title = new char[strlen(title) + 1];
        strcpy(_title, title);
    }

    bool set_credits(int credits)
    {
        if (credits >= 0)
        {
            _credits = credits;
            return true;
        }
        return false;
    }

    virtual void display() const
    {
        std::cout << "Course Title: " << _title << ", Credits: " << _credits << "\n";
    }

    friend void display_info(const Course& course)
    {
        std::cout << "Title: " << course._title << ", Credits: " << course._credits << "\n";
    }
};

class OnlineCourse : public Course
{
protected:
    char* _platform;

public:
    OnlineCourse(const char* title, int credits, const char* platform)
        : Course(title, credits)
    {
        _platform = new char[strlen(platform) + 1];
        strcpy(_platform, platform);
    }

    ~OnlineCourse()
    {
        delete[] _platform;
    }

    void display() const override
    {
        Course::display();
        std::cout << "Platform: " << _platform << "\n";
    }

    friend void display_info(const OnlineCourse& course)
    {
        std::cout << "Title: " << course._title << ", Credits: " << course._credits
            << ", Platform: " << course._platform << "\n";
    }
};

class OfflineCourse : public Course
{
protected:
    char* _location;

public:
    OfflineCourse(const char* title, int credits, const char* location)
        : Course(title, credits)
    {
        _location = new char[strlen(location) + 1];
        strcpy(_location, location);
    }

    ~OfflineCourse()
    {
        delete[] _location;
    }

    void display() const override
    {
        Course::display();
        std::cout << "Location: " << _location << "\n";
    }

    friend void display_info(const OfflineCourse& course)
    {
        std::cout << "Title: " << course._title << ", Credits: " << course._credits
            << ", Location: " << course._location << "\n";
    }
};

class Student
{
protected:
    char* _name;
    int _age;
    Course** _enrolledCourses;
    int _courseCount;

public:
    Student(const char* name, int age)
    {
        _name = new char[strlen(name) + 1];
        strcpy(_name, name);
        _age = age;
        _enrolledCourses = nullptr;
        _courseCount = 0;
    }

    ~Student()
    {
        delete[] _name;
        for (int i = 0; i < _courseCount; ++i)
            delete _enrolledCourses[i];
        delete[] _enrolledCourses;
    }

    void enrollCourse(Course* course)
    {
        Course** newCourses = new Course * [_courseCount + 1];
        for (int i = 0; i < _courseCount; ++i)
            newCourses[i] = _enrolledCourses[i];
        newCourses[_courseCount] = course;
        delete[] _enrolledCourses;
        _enrolledCourses = newCourses;
        _courseCount++;
    }

    void display() const
    {
        std::cout << "Student Name: " << _name << ", Age: " << _age << "\n";
        std::cout << "Enrolled Courses:\n";
        for (int i = 0; i < _courseCount; ++i)
        {
            _enrolledCourses[i]->display();
        }
    }

    friend void display_info(const Student& student)
    {
        std::cout << "Student Name: " << student._name << ", Age: " << student._age << "\n";
        std::cout << "Enrolled Courses:\n";
        for (int i = 0; i < student._courseCount; ++i)
        {
            display_info(*student._enrolledCourses[i]);
        }
    }
};

class University
{
protected:
    Course** _courses;
    Student** _students;
    int _courseCount;
    int _studentCount;

public:
    University()
    {
        _courses = nullptr;
        _students = nullptr;
        _courseCount = 0;
        _studentCount = 0;
    }

    ~University()
    {
        for (int i = 0; i < _courseCount; ++i)
            delete _courses[i];
        delete[] _courses;

        for (int i = 0; i < _studentCount; ++i)
            delete _students[i];
        delete[] _students;
    }

    void addCourse(Course* course)
    {
        Course** newCourses = new Course * [_courseCount + 1];
        for (int i = 0; i < _courseCount; ++i)
            newCourses[i] = _courses[i];
        newCourses[_courseCount] = course;
        delete[] _courses;
        _courses = newCourses;
        _courseCount++;
    }

    void addStudent(Student* student)
    {
        Student** newStudents = new Student * [_studentCount + 1];
        for (int i = 0; i < _studentCount; ++i)
            newStudents[i] = _students[i];
        newStudents[_studentCount] = student;
        delete[] _students;
        _students = newStudents;
        _studentCount++;
    }

    void enrollStudentInCourse(Student* student, Course* course)
    {
        student->enrollCourse(course);
    }

    void display() const
    {
        std::cout << "University Courses:\n";
        for (int i = 0; i < _courseCount; ++i)
        {
            _courses[i]->display();
        }
        std::cout << "\nUniversity Students:\n";
        for (int i = 0; i < _studentCount; ++i)
        {
            _students[i]->display();
        }
    }

    friend void display_info(const University& university)
    {
        std::cout << "University Courses:\n";
        for (int i = 0; i < university._courseCount; ++i)
        {
            display_info(*university._courses[i]);
        }
        std::cout << "\nUniversity Students:\n";
        for (int i = 0; i < university._studentCount; ++i)
        {
            display_info(*university._students[i]);
        }
    }
};

int main()
{
    University university;

    Course* course1 = new Course("Mathematics", 3);
    Course* course2 = new OnlineCourse("Programming", 4, "Udemy");
    Course* course3 = new OfflineCourse("Physics", 3, "Room 101");

    university.addCourse(course1);
    university.addCourse(course2);
    university.addCourse(course3);

    Student* student1 = new Student("Alice", 20);
    Student* student2 = new Student("Bob", 22);

    university.addStudent(student1);
    university.addStudent(student2);

    university.enrollStudentInCourse(student1, course1);
    university.enrollStudentInCourse(student1, course2);
    university.enrollStudentInCourse(student2, course3);

    university.display();

    return 0;
}
