from random import randint

# Задание 1
#В списке целых, заполненном случайными числами, определить минимальный, положительный элемент и максимальный, отрицательный элемент, посчитать количество отрицательных элементов, посчитать количество положительных элементов, посчитать количество нулей. Результаты вывести на экран.

lst = [randint(-10, 10) for i in range(20)]

min_positive = 0
max_negative = 0
count_negative = 0
count_positive = 0
count_zero = 0

for num in lst:
    if num > 0:
        count_positive += 1
        if min_positive == 0 or num < min_positive:
            min_positive = num
    elif num < 0:
        count_negative += 1
        if max_negative == 0 or num > max_negative:
            max_negative = num
    else:
        count_zero += 1

print(f"list: {lst}")
print(f"min positive value: {min_positive}")
print(f"max negative value: {max_negative}")
print(f"count negative values: {count_negative}")
print(f"count positive values: {count_positive}")
print(f"count zero values: {count_zero}")

