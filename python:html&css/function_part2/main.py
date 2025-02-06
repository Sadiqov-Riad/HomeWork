# Task 1
# def product_of_numbers(num_list):
#     product = 1
#     for i in num_list:
#         product *= i
#     return f"Произведение элементов списка: {product}"
#
# print(product_of_numbers([1,5,6]))

# Task 2

# def min_element(num_list):
#     return f"Минимальное значение: {min(num_list)}"
#
# print(min_element([1,-1,2,5,6]))

# Task 3

# def prime_nums(num_list):
#     count = 0
#     for i in num_list:
#         if i < 2:
#             continue
#         else:
#             for j in range(2, i):
#                 if i % j == 0:
#                     break
#             else:
#                 count += 1
#     return f"Кол-во простых чисел: {count}"
#
# print(prime_nums([17,-1,2,14,11]))

# Task 4

# import random
# def del_num(num_list):
#     num_list.remove(random.choice(num_list))
#     return len(num_list)
#
# print(del_num([17,-1,2,14,11]))

# Task 5

# def union(num_list_1,num_list_2):
#     return num_list_1 + num_list_2
#
# print(union([1,2,34],[45,24,56,7]))

# Task 6

# def degree_of_num(num_list, degree):
#     num_list =[i ** degree for i in num_list ]
#     return num_list
#
# print(degree_of_num([1,2,3,4,5],2))