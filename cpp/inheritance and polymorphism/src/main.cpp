#include <iostream>
#include "skills/Skill.h"
#include "characters/Tank.h"
#include "characters/Mage.h"
#include "characters/Thief.h"

int main() {
    
    Tank tank;
    tank.add_skill(new Skill("Shield Bash", "defense", 30), 0);
    tank.add_skill(new Skill("Earthquake", "attack", 50), 1);

    Mage mage;
    mage.add_skill(new Skill("Fireball", "attack", 40), 0);
    mage.add_skill(new Skill("Mana Shield", "defense", 20), 1);

    Thief thief;
    thief.add_skill(new Skill("Backstab", "attack", 30), 0);
    thief.add_skill(new Skill("Smoke Bomb", "support", 10), 1);

    tank.use_skill(0); 
    mage.use_skill(1); 
    thief.use_skill(0);

    return 0;
} 