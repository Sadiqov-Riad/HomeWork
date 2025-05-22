
# height = int(input("Enter height: "))
#
# width = 1
#
# tab_width = (1 + (2*(height-1))) // 2
#
# for i in range(height):
#     print((tab_width * " ") + width * "*")
#     width += 2
#     tab_width -= 1

# height = int(input("Enter height: "))
#
# width = 1
#
# tab_width = (1 + (2*(height-1))) // 2
#
# if height % 2 != 0:
#     for i in range((height // 2) + 1):
#         print((tab_width * " ") + width * "*")
#         width += 2
#         tab_width -= 1
#     width -= 2
#     tab_width += 1
#     for i in range((height // 2)):
#         width -= 2
#         tab_width += 1
#         print((tab_width * " ") + width * "*")
# else:
#     print("Enter odd number!")

# height = int(input("Enter height: "))
#
# width = 1
#
# tab_width = (height+(height-1)) // 2
#
# for i in range(height):
#     print((tab_width * " ") + (width*"*"))
#     width += 2
#     tab_width -= 1


#               task 1
#
# height = int(input("Enter height: "))
#
# width = 1
#
# tab_width = (height+(height-1)) // 2
#
# if height % 2 != 0:
#     print((tab_width * " ") + (width * "*"))
#
#     for i in range((height // 2)):
#         width += 2
#         tab_width -= 1
#         print((tab_width * " ") + (width * "*"))
#
#     for i in range((height // 2)):
#         width -= 2
#         tab_width += 1
#         print((tab_width * " ") + (width * "*"))
# else:
#     print("Enter an odd number!!!")

#               task 2

# height = int(input("Enter height: "))
#
# width = 1
#
# tab_width = (height+(height-1)) // 2
#
# if height % 2 != 0:
#     print(((tab_width +1) * " ") + "*")
#     for i in range((height // 2)):
#         print((tab_width * " ") + "*" + (width * " ") + "*")
#         width += 2
#         tab_width -= 1
#     width -= 2
#     tab_width += 1
#     for i in range((height // 2)-1):
#         width -= 2
#         tab_width += 1
#         print((tab_width * " ") + "*" + (width * " ") + "*")
#     print(((tab_width + 1) * " ") + "*")
# else:
#     print("Enter odd number!")

#               task 3

height = int(input("Enter height: "))

pre_height = height - 1

width = (pre_height+(pre_height-1))

tab_width = width // 2

print(((tab_width) * " ")+((width+2) * "*"))

for i in range(pre_height-1):
    width -= 2
    tab_width += 1
    print((tab_width * " ") + "*" + (width * " ") + "*")
print(((tab_width + 1) * " ") + "*")