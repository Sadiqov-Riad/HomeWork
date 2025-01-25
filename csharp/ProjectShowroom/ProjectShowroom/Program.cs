using ProjectShowroom;
using ProjectShowroom.Data;

UserService authSystem = new UserService();

Console.WriteLine("1. Register\n2. Login\n3. Exit");

string userInput = Console.ReadLine();

switch (userInput)
{
    case "1":
        Console.WriteLine("Enter username: ");
        string RegUsername = Console.ReadLine();
        
        Console.WriteLine("Enter password: ");
        string RegPassword = Console.ReadLine();
        
        var RegisterDTO = new RegisterDTO(RegUsername, RegPassword);

        if (!ValidateService.ValidateRegister(RegisterDTO))
        {
            Console.WriteLine("Invalid username or password");
        }
        else
        {
            authSystem.RegisterUser(RegisterDTO);
        }
        break;
    case "2":
        Console.WriteLine("Enter username: ");
        string LogUsername = Console.ReadLine();
        Console.WriteLine("Enter password: ");
        string LogPassword = Console.ReadLine();
        
        var loginDTO = new LoginDTO(LogUsername, LogPassword);

        if (!ValidateService.ValidateLogin(loginDTO))
        {
            Console.WriteLine("Invalid username or password");
        }
        else
        {
            authSystem.LoginUser(loginDTO);
        }
        break;

}