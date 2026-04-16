import random


class Team:
    """Простая команда из персонажей."""

    def __init__(self, members: list["Character"] | None = None) -> None:
        self.members: list["Character"] = members or []

    def add_member(self, character: "Character") -> None:
        self.members.append(character)

    def __str__(self) -> str:
        if not self.members:
            return "Team(пусто)"
        names = ", ".join(member.name for member in self.members)
        return f"Team({names})"


class Character:
    def __init__(self, name: str, health: int, attack_power: int) -> None:
        self.name = name
        self.health = health
        self.attack_power = attack_power

    @property
    def is_alive(self) -> bool:
        return self.health > 0

    def attack(self, other: "Character") -> int:
        if not self:
            print(f"{self.name} не может атаковать: персонаж повержен.")
            return 0

        damage = self.attack_power
        print(f"{self.name} атакует {other.name} и наносит {damage} урона.")
        other.take_damage(damage)
        return damage

    def take_damage(self, damage: int) -> None:
        self.health = max(0, self.health - max(0, damage))
        print(f"{self.name} получает {damage} урона. Текущее здоровье: {self.health}")

    def info(self) -> str:
        return (
            f"{self.__class__.__name__}(имя={self.name}, "
            f"здоровье={self.health}, атака={self.attack_power})"
        )

    def __str__(self) -> str:
        return self.info()

    def __add__(self, other: "Character") -> Team:
        if not isinstance(other, Character):
            return NotImplemented
        return Team([self, other])

    def __lt__(self, other: "Character") -> bool:
        if not isinstance(other, Character):
            return NotImplemented
        return (self.health + self.attack_power) < (other.health + other.attack_power)

    def __eq__(self, other: object) -> bool:
        if not isinstance(other, Character):
            return False
        return (
            self.__class__ == other.__class__
            and self.name == other.name
            and self.health == other.health
            and self.attack_power == other.attack_power
        )

    def __len__(self) -> int:
        return self.health

    def __bool__(self) -> bool:
        return self.is_alive


class Warrior(Character):
    """Воин: иногда наносит критический удар."""

    def __init__(self, name: str, health: int = 140, attack_power: int = 20, crit_chance: float = 0.25) -> None:
        super().__init__(name, health, attack_power)
        self.crit_chance = crit_chance

    def attack(self, other: Character) -> int:
        if not self:
            print(f"{self.name} не может атаковать: персонаж повержен.")
            return 0

        damage = self.attack_power
        if random.random() < self.crit_chance:
            damage *= 2
            print(f"{self.name} выполняет КРИТИЧЕСКИЙ удар!")

        print(f"{self.name} (Warrior) бьет {other.name} на {damage} урона.")
        other.take_damage(damage)
        return damage


class Mage(Character):
    """Маг: расходует ману, чтобы усилить заклинание."""

    def __init__(self, name: str, health: int = 90, attack_power: int = 18, mana: int = 100) -> None:
        super().__init__(name, health, attack_power)
        self.mana = mana

    def attack(self, other: Character) -> int:
        if not self:
            print(f"{self.name} не может колдовать: персонаж повержен.")
            return 0

        if self.mana >= 20:
            damage = int(self.attack_power * 1.7)
            self.mana -= 20
            print(f"{self.name} (Mage) применяет огненный шар. Мана: {self.mana}")
        else:
            damage = self.attack_power
            print(f"{self.name} (Mage) атакует базовым заклинанием. Мана: {self.mana}")

        print(f"{self.name} наносит {other.name} {damage} урона.")
        other.take_damage(damage)
        return damage

    def info(self) -> str:
        return (
            f"{self.__class__.__name__}(имя={self.name}, здоровье={self.health}, "
            f"атака={self.attack_power}, мана={self.mana})"
        )


class Archer(Character):
    """Лучник: использует стрелы, точный выстрел усиливает урон."""

    def __init__(self, name: str, health: int = 100, attack_power: int = 16, arrows: int = 10) -> None:
        super().__init__(name, health, attack_power)
        self.arrows = arrows

    def attack(self, other: Character) -> int:
        if not self:
            print(f"{self.name} не может стрелять: персонаж повержен.")
            return 0

        if self.arrows <= 0:
            damage = max(1, self.attack_power // 2)
            print(f"{self.name} (Archer) без стрел, использует кинжал.")
        else:
            self.arrows -= 1
            precise = random.random() < 0.35
            damage = int(self.attack_power * 1.5) if precise else self.attack_power
            shot_type = "точный выстрел" if precise else "обычный выстрел"
            print(f"{self.name} (Archer) делает {shot_type}. Осталось стрел: {self.arrows}")

        print(f"{self.name} наносит {other.name} {damage} урона.")
        other.take_damage(damage)
        return damage

    def info(self) -> str:
        return (
            f"{self.__class__.__name__}(имя={self.name}, здоровье={self.health}, "
            f"атака={self.attack_power}, стрелы={self.arrows})"
        )


def demo() -> None:
    print("=== Создание персонажей ===")
    warrior = Warrior("Тор")
    mage = Mage("Мерлин")
    archer = Archer("Робин")

    characters: list[Character] = [warrior, mage, archer]

    print("\n=== Вывод информации (__str__) ===")
    for ch in characters:
        print(ch)

    print("\n=== Полиморфные атаки ===")
    warrior.attack(mage)
    mage.attack(archer)
    archer.attack(warrior)

    print("\n=== Сравнение персонажей (__lt__, __eq__) ===")
    print(f"{warrior.name} < {mage.name}: {warrior < mage}")
    print(f"{warrior.name} == {Warrior('Тор') .name}: {warrior == Warrior('Тор')}")

    print("\n=== Проверка len и bool ===")
    for ch in characters:
        print(f"len({ch.name}) = {len(ch)}; bool({ch.name}) = {bool(ch)}")

    print("\n=== Объединение персонажей (__add__) ===")
    team = warrior + archer
    print(team)

    print("\n=== Добиваем мага для проверки __bool__ ===")
    while mage:
        warrior.attack(mage)
    print(f"Жив ли {mage.name}? {bool(mage)}")


if __name__ == "__main__":
    demo()
