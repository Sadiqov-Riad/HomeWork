#ifndef TANK_H
#define TANK_H

#include "Character.h"

class Tank : public Character {
public:
    Tank();

    void defence() override;
    void attack() override;
    void stats() override;
    void level_up() override;
};

#endif // TANK_H