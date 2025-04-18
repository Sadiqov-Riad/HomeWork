#ifndef CHARACTER_H
#define CHARACTER_H

#include "../skills/Skill.h"

class Character {
protected:
    int _level;
    int _xp;
    int _hp;
    int _attack;
    int _defence;
    int _mana;
    int _agility;
    Skill* skills[2];  

public:
    Character(int level, int xp, int hp, int attack, int defence, int mana, int agility);
    virtual ~Character() = default;

    virtual void use_skill(int index);
    void add_skill(Skill* skill, int index);

    virtual void attack() = 0;
    virtual void defence() = 0;
    virtual void level_up() = 0;
    virtual void stats() = 0;
};

#endif // CHARACTER_H 