import random

random_number = random.randint(1, 100)

for i in range(5):
    print(f"quantity attempts: {5 - i} ")
    number = int(input("Enter number: "))
    if number == random_number:
        print("Excellent !!!")
        break
    elif i == 3:
        range_before = random.randint(1, random_number-1)
        range_after = random.randint(random_number, 100)
        print(f"Clue{i+1} :\nThe number is between {range_before} and {range_after}")
    elif i == 0:
        if random_number % 2 == 0:
            print(f"Clue{i+1} :\nThe number is even")
        else:
            print(f"Clue{i+1} :\nThe number is odd")
    elif i == 2:
        if random_number > 9:
            print(f"Clue{i+1} :\nThe number is two-digit number")
        else:
            print(f"Clue{i + 1} :\nThe number is one digit number")
    elif i == 1:
        if random_number > 9:
            number_division = (random_number // 10)
            print(f"Clue{i+1} :\nThe number starts with {number_division}")
        else:
            print(f"Clue{i + 1} :\nThe number starts with {random_number}")
    else:
        print(f"You lose !!!\nNumber is {random_number}")
        break


