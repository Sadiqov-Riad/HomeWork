#ifndef THIEF_H
#define THIEF_H

#include "../core/Character.h"

class Thief : public Character {
public:
    Thief();
    
    void use_skill(int index) override;
    void attack() override;
    void defence() override {};
    void stats() override;
    void level_up() override;
};

#endif // THIEF_H 