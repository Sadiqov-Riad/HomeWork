# Task 1 :
# Код который я написал повторяет лишь самую базовую функию метода startswith()
# без value, start, end

# string = input("Enter the string: ")
# string_check = input("Enter your string: ")
#
# if string_check in string[0]:
#     print(True)
# else:
#     print(False)

# Task 2 : count()

# my_string = input("Enter the string: ")
# string_check = input("Enter your string: ")
# count = 0
#
# for i in range(len(my_string)):
#     if string_check not in my_string[i]:
#         continue
#     elif string_check in my_string[i]:
#         count += 1
# print(count)

# Task 3 : replace()
# тут у меня old принимает только строку с одним символом а new принимает любую строку

# my_string = input("Enter the string: ")
# string_old = input("Enter old string: ")
# string_new = input("Enter new string: ")
# result_string = ""
#
# for i in range(len(my_string)):
#     if string_old not in my_string[i]:
#         result_string += my_string[i]
#     elif string_old in my_string[i]:
#         result_string += string_new
#
# print(result_string)