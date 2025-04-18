#ifndef CHARACTER_H
#define CHARACTER_H

#include <iostream>

class Character {
protected:
    int _level;
    int _xp;
    int _hp;
    int _attack;
    int _defence;
    int _mana;
    int _agility;

public:
    Character(int level, int xp, int hp, int attack, int defence, int mana, int agility);

    virtual void defence() = 0;
    virtual void attack() = 0;
    virtual void level_up() = 0;
    virtual void stats() = 0;

    virtual ~Character() = default;
};

#endif // CHARACTER_H
