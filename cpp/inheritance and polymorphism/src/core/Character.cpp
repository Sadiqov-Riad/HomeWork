#include "Character.h"

Character::Character(int level, int xp, int hp, int attack, int defence, int mana, int agility)
    : _level(level), _xp(xp), _hp(hp), _attack(attack), _defence(defence), _mana(mana), _agility(agility) {}

void Character::use_skill(int index) {
    skills[index]->use_skill();
}

void Character::add_skill(Skill* skill, int index) {
    if (index < 2) {
        skills[index] = skill;
    }
} 