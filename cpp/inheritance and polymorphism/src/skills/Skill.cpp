#include "Skill.h"

Skill::Skill(const char* n, const char* t, int m_cost) {
    name = new char[strlen(n) + 1];
    strcpy(name, n);

    type = new char[strlen(t) + 1];
    strcpy(type, t);

    mana_cost = m_cost;
}

Skill::~Skill() {
    delete[] name;
    delete[] type;
}

void Skill::use_skill() {
    std::cout << "Using skill: " << name << ", Type: " << type << ", Mana cost: " << mana_cost << std::endl;
}

void Skill::display_info() {
    std::cout << "Skill: " << name << ", Type: " << type << ", Mana cost: " << mana_cost << std::endl;
} 