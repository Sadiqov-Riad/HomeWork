import random
import string

fruit_list = ["apple", "banana", "cherry", "orange", "pear", "grape", "mango", "pineapple", "strawberry", "watermelon", "kiwi", "blueberry", "peach", "raspberry", "lemon"]

number_of_attempts = 5

ai_word = fruit_list[random.randint(0, 14)]

hidden_word = []

try:

    while number_of_attempts > 0:
        displayed_word = ""
        for i in ai_word:
            if i in hidden_word:
                displayed_word += i
            else:
                displayed_word += "_"

        if "_" not in displayed_word:
            print(f"Поздравляем! Вы угадали слово: {ai_word}")
            break
        elif "_" in displayed_word and number_of_attempts == 0:
            print(f"Вы проиграли. Загаданное слово было: {ai_word}")

        print(f"Слово: {displayed_word}\nКоличество попыток: {number_of_attempts}")

        user_input = input("Введите букву: ").lower()

        if len(user_input) > 1 or len(user_input) < 0:
            number_of_attempts -= 1
            print(f"Неправильно! Осталось попыток: {number_of_attempts}")
        elif len(user_input) == 0:
            continue
        elif user_input in hidden_word:
            print("Вы уже угадали эту букву. Попробуйте другую.")
        elif user_input in ai_word:
            hidden_word.append(user_input)
            print("Правильно!")
        else:
            if user_input not in string.ascii_lowercase:
                print("Введенное значение должно быть буквой!!!")
                continue
            number_of_attempts -= 1
            print(f"Неправильно! Осталось попыток: {number_of_attempts}")

        if "_" not in displayed_word:
            print(f"Поздравляем! Вы угадали слово: {ai_word}")
            break
        elif "_" in displayed_word and number_of_attempts == 0:
            print(f"Вы проиграли. Загаданное слово было: {ai_word}")

except Exception:
    print("Введите букву а не число!")