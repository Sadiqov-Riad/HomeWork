#include "Mage.h"
#include <iostream>

Mage::Mage() : Character(1, 0, 25, 5, 1, 100, 0) {}

void Mage::use_skill(int index) {
    std::cout << "Mage is using skill: ";
    Character::use_skill(index);
}

void Mage::attack() {
    std::cout << "Mage attack: " << _attack << std::endl;
}

void Mage::stats() {
    std::cout << "Mage stats - Level: " << _level << ", HP: " << _hp << ", XP: " << _xp << std::endl;
}

void Mage::level_up() {
    if (_xp >= 1000) {
        _level++;
        _hp += 10;
        _xp = 0;
        _attack++;
        _mana += 10;
    }
} 