#ifndef MAGE_H
#define MAGE_H

#include "Character.h"

class Mage : public Character {
public:
    Mage();

    void defence() override;
    void attack() override;
    void stats() override;
    void level_up() override;
};

#endif // MAGE_H
