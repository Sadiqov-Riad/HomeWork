
number_of_meters = float(input("Enter number : "))

select_option = int(input("1.Мили\n2.Дюймы\n3.Ярды\nChoose : "))

if select_option == 1:
    print(number_of_meters/1609)
elif select_option == 2:
    print(number_of_meters*39.37)
elif select_option == 3:
    print(number_of_meters*1.094)
else:
    print("Error! Choose between 1/2/3! ")
