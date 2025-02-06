import random

while True:
    try:
        user_list = int(input("Введите количество элементов в списке: "))

        if user_list > 1:
            random_list = []
            for i in range(user_list):
                random_list.append(random.randint(-100, 100))

            print(f"Список случайных чисел: {random_list}")
            print(
                "Меню:\n1. Найти минимальный элемент в списке\n2. Найти максимальный элемент в списке\n3. Найти сумму элементов в списке\n4. Найти среднеарифметическое значение элементов в списке\n5. Завершить программу")

            while True:
                max = random_list[0]
                min = random_list[0]
                sum = 0
                user = int(input("Выберите операцию (1-5): "))
                if user == 1:
                    for i in random_list:
                        if i < min:
                            min = i
                    print(f"Минимальный элемент в списке: {min}")
                elif user == 2:
                    for i in random_list:
                        if i > max:
                            max = i
                    print(f"Максимальный элемент в списке: {max}")
                elif user == 3:
                    for i in random_list:
                        sum += i
                    print(f"Сумма элементов в списке: {sum}")
                elif user == 4:
                    for i in random_list:
                        sum += i
                    arith_mean = sum / len(random_list)
                    print(f"Среднеарифметическое значение элементов в списке: {arith_mean}")
                elif user == 5:
                    print("Программа завершена.")
                    break
                elif user > 5 or user < 1:
                    print("Введите число от 1-5!")
                    continue
            break
        elif user_list == 0:
            print("Это пустой список!!!")
        elif user_list == 1:
            random_list = []
            for i in range(user_list):
                random_list.append(random.randint(-100, 100))
            print(f"В списке всего один элемент: {random_list[0]}")
            user = int(input("Завершить программу?(1=Да|2=Нет): "))
            if user == 1:
                print("Программа завершена.")
                break
            elif user == 2:
                continue
            else:
                print("Введите числа 1 или 2")
        else:
            print("Количество элементов списка не может быть меньше 0!!!")
            continue

    except ValueError:
        print("Введите числовое значение !!!")




