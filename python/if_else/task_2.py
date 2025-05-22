
num_1 = float(input("Enter first number : "))

num_2 = float(input("Enter second number : "))

num_3 = float(input("Enter third number : "))

select_option = int(input("1.Max\n2.Min\n3.Average\nChoose : "))

if select_option == 1:
    if num_1 > num_2 and num_1 > num_3:
        print(num_1)
    elif num_2 > num_1 and num_2 > num_3:
        print(num_2)
    elif num_3 > num_1 and num_3 > num_2:
        print(num_3)
    elif num_1 == num_2 and num_1 > num_3 and num_2 > num_3:
        print(num_1)
    elif num_1 == num_3 and num_1 > num_2 and num_3 > num_2:
        print(num_1)
    elif num_2 == num_3 and num_2 > num_1 and num_3 > num_1:
        print(num_2)
    else:
        print("Error")
elif select_option == 2:
    if num_1 < num_2 and num_1 < num_3:
        print(num_1)
    elif num_2 < num_1 and num_2 < num_3:
        print(num_2)
    elif num_3 < num_1 and num_3 < num_2:
        print(num_3)
    elif  num_1 == num_2 and num_1 < num_3 and num_2 < num_3:
        print(num_1)
    elif num_1 == num_3 and num_1 < num_2 and num_3 < num_2:
        print(num_1)
    elif num_2 == num_3 and num_2 < num_1 and num_3 < num_1:
        print(num_2)
    else:
        print("Error")
elif select_option == 3:
    print((num_1+num_2+num_3)/3)
else :
    print("Error! Choose between 1/2/3!")