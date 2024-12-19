#include <iostream>
#include <cstring>

class TeamMember {
private:
    char _name[50];
    char _role[50];
public:
    TeamMember(const char* name = "", const char* role = "") {
        strcpy(_name, name);
        strcpy(_role, role);
    }

    const char* get_name() const {
        return _name;
    }

    const char* get_role() const {
        return _role;
    }

    void set_name(const char* name) {
        if (name != nullptr) {
            strcpy(_name, name);
        }
    }

    void set_role(const char* role) {
        if (role != nullptr) {
            strcpy(_role, role);
        }
    }

    void display() const {
        std::cout << "Name: " << _name << ", Role: " << _role << std::endl;
    }
};

class Task {
private:
    char _title[50];
    char _status[20];
    int _assignedMember;
public:
    Task(const char* title = "", const char* status = "new", int assignedMember = -1) {
        strcpy(_title, title);
        strcpy(_status, status);
        _assignedMember = assignedMember;
    }

    const char* get_title() const {
        return _title;
    }

    const char* get_status() const {
        return _status;
    }

    int get_assigned_member() const {
        return _assignedMember;
    }

    void set_title(const char* title) {
        if (title != nullptr) {
            strcpy(_title, title);
        }
    }

    void set_status(const char* status) {
        if (status != nullptr) {
            strcpy(_status, status);
        }
    }

    void display() const {
        std::cout << "Title: " << _title << ", Status: " << _status << ", Assigned to Member Index: " << _assignedMember << std::endl;
    }
};

class Project {
private:
    char _name[50];
    Task _tasks[10]; 
    int _taskCount;  
public:
    Project(const char* name = "") {
        strcpy(_name, name);
        _taskCount = 0;
    }

    const char* get_name() const {
        return _name;
    }

    void add_task(const Task& task) {
        if (_taskCount < 10) {
            _tasks[_taskCount++] = task;
        }
        else {
            std::cout << "Task limit reached!" << std::endl;
        }
    }

    void display_tasks() const {
        std::cout << "Project: " << _name << ", Tasks: " << std::endl;
        for (int i = 0; i < _taskCount; ++i) {
            _tasks[i].display();
        }
    }

    void display_tasks_for_member(int memberIndex) const {
        std::cout << "Tasks for Member Index " << memberIndex << ":" << std::endl;
        for (int i = 0; i < _taskCount; ++i) {
            if (_tasks[i].get_assigned_member() == memberIndex) {
                _tasks[i].display();
            }
        }
    }
};

int main() {
    TeamMember members[2] = {
        TeamMember("Alice", "Developer"),
        TeamMember("Bob", "Tester")
    };

    Project project("Project X");

    Task task1("Setup environment", "in progress", 0);
    Task task2("Test feature", "new", 1);

    project.add_task(task1);
    project.add_task(task2);

    std::cout << "Team Members:" << std::endl;
    for (int i = 0; i < 2; ++i) {
        members[i].display();
    }

    project.display_tasks();

    std::cout << std::endl;
    project.display_tasks_for_member(0); 

    return 0;
}
