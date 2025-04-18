#ifndef SKILL_H
#define SKILL_H

#include <iostream>
#include <string.h>

class Skill {
public:
    char* name;
    char* type; 
    int mana_cost;

    Skill(const char* n, const char* t, int m_cost);
    ~Skill();

    void use_skill();
    void display_info();
};

#endif // SKILL_H 