#Задание 2
#Пользователь с клавиатуры вводит список целых чисел и некоторое число. Необходимо удалить из списка все элементы, которые меньше заданного числа. Результат вывести на экран.

user_input = input("Enter a list of integers separated by spaces: ")
list = list(map(int, user_input.split()))
threshold = int(input("Enter a number: "))

filtered_list = [num for num in list if num >= threshold]

print(f"Original list: {list}")
print(f"Filtered list: {filtered_list}")