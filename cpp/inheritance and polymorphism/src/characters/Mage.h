#ifndef MAGE_H
#define MAGE_H

#include "../core/Character.h"

class Mage : public Character {
public:
    Mage();
    
    void use_skill(int index) override;
    void attack() override;
    void defence() override {};
    void stats() override;
    void level_up() override;
};

#endif // MAGE_H 