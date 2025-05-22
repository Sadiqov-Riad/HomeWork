# task 1
# def my_func():
#     print('''"Don't compare yourself with anyone in this world…\nif you do so, you are insulting yourself."\nBill Gates''')

# my_func()

# task 2
# def my_func(a, b):
#     for i in range(a + 1, b):
#         if i % 2 == 0:
#             print(i)
#         else:
#             continue
#
# my_func(2, 10)

# task 3

# def my_func(length, symbol, bool_mode):
#     if bool_mode == True:
#         for i in range(length):
#             print(int(length) * str(symbol))
#     elif bool_mode == False:
#         print(int(length) * str(symbol))
#         for i in range(length - 2):
#             print(str(symbol) + str(" ") * int(length - 2) + str(symbol))
#         print(int(length) * str(symbol))

# my_func(5 , "*", False)

# task 4

# def my_func(num1, num2, num3, num4, num5):
#     my_list = [num1, num2, num3, num4, num5]
#     print(min(my_list))
#
# my_func(-1,3,4,5,-7)

# task 5

# def my_func(a, b):
#     my_list = [a, b]
#     sum = 1
#     new_list = []
#     for i in range(min(my_list) + 1, max(my_list)):
#         new_list.append(i)
#         sum *= i
#     print(new_list)
#     print(sum)
#
# my_func(10, 0)

# task 6

# def my_func(number):
#     print(len(str(number)))

# my_func(4500)

# task 7

# def my_func(number):
#     my_list = list(str(number))
#     value = int(len(my_list) / 2)
#     bool_type = 0
#     if len(my_list) % 2 == 0:
#         min_val = 0
#         max_val = -1
#         for i in range(value):
#             if my_list[min_val] == my_list[max_val]:
#                 min_val += 1
#                 max_val += -1
#                 bool_type = True
#             else:
#                 bool_type = False
#                 break
#     else:
#         bool_type = False
#     print(bool_type)
#
# my_func(123321)






