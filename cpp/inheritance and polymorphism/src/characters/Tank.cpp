#include "Tank.h"
#include <iostream>

Tank::Tank() : Character(1, 0, 100, 2, 5, 0, 1) {}

void Tank::use_skill(int index) {
    std::cout << "Tank is using skill: ";
    Character::use_skill(index);
}

void Tank::attack() {
    std::cout << "Tank attack: " << _attack << std::endl;
}

void Tank::stats() {
    std::cout << "Tank stats - Level: " << _level << ", HP: " << _hp << ", XP: " << _xp << std::endl;
}

void Tank::level_up() {
    if (_xp >= 1000) {
        _level++;
        _hp += 10;
        _xp = 0;
        _attack++;
        _defence++;
    }
} 