
num_1 = float(input("Enter first number : "))

num_2 = float(input("Enter second number : "))

num_3 = float(input("Enter third number : "))

select_option = int(input("Choose option 1|2 : "))

if select_option == 1 :
    print(num_1+num_2+num_3)
elif select_option == 2 :
    print(num_1*num_2*num_3)
else :
    print("Error! Choose between 1/2!")