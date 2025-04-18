#include "Thief.h"
#include <iostream>

Thief::Thief() : Character(1, 0, 50, 3, 0, 0, 5) {}

void Thief::use_skill(int index) {
    std::cout << "Thief is using skill: ";
    Character::use_skill(index);
}

void Thief::attack() {
    std::cout << "Thief attack: " << _attack << std::endl;
}

void Thief::stats() {
    std::cout << "Thief stats - Level: " << _level << ", HP: " << _hp << ", XP: " << _xp << std::endl;
}

void Thief::level_up() {
    if (_xp >= 1000) {
        _level++;
        _hp += 10;
        _xp = 0;
        _agility++;
    }
} 