#ifndef TANK_H
#define TANK_H

#include "../core/Character.h"

class Tank : public Character {
public:
    Tank();
    
    void use_skill(int index) override;
    void attack() override;
    void defence() override {};
    void stats() override;
    void level_up() override;
};

#endif // TANK_H 