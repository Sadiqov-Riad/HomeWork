using System.Diagnostics;

string child = "/Users/riad/Desktop/itstep/HomeWork/system/SystemIntroProcesses/ChildProcess/bin/Debug/net8.0/ChildProcess";

//Task1

// ProcessStartInfo psi = new ProcessStartInfo
// {
//     FileName = child,
//     Arguments = "arg1 arg2 arg3",
//     RedirectStandardOutput = true,
// };
//
// using Process childProcess = new Process { StartInfo = psi };
//
// childProcess.OutputDataReceived += (sender, args) => Console.WriteLine(args.Data);
//
// childProcess.Start();
//
// Console.WriteLine($"Child process with id: {childProcess.Id} started");
//
// childProcess.BeginOutputReadLine();
//
// childProcess.WaitForExit();
//
// Console.WriteLine($"Process with id: {Process.GetCurrentProcess().Id} ended");

//Task2

// Console.WriteLine("Choose option:\n1. Waiting for child process to terminate\n2. Terminate a child process by force");
//
// string option = Console.ReadLine();
//
// ProcessStartInfo psi = new ProcessStartInfo
// {
//     FileName = child,
//     Arguments = "arg1 arg2 arg3",
//     RedirectStandardInput = true,
// };
//
// using Process childProcess = new Process {StartInfo = psi};
//
// childProcess.OutputDataReceived += (sender, args) => Console.WriteLine(args.Data);
//
// childProcess.Start();
//
// Console.WriteLine($"Child process {childProcess.Id} started");
//
// if (option == "1")
// {
//     childProcess.WaitForExit();
// }
// else if (option == "2")
// {
//     if (!childProcess.HasExited) 
//     {
//         childProcess.Kill();
//         if (childProcess.HasExited)
//         {
//             Console.WriteLine($"Child process {childProcess.Id} terminated by force");
//         }
//
//     }
//     
// }

//Task3

// Console.Write("first_num: ");
// if (!double.TryParse(Console.ReadLine(), out double a))
// {
//     Console.WriteLine("Wrong num1");
// }
//
// Console.Write("second_num: ");
// if (!double.TryParse(Console.ReadLine(), out double b))
// {
//     Console.WriteLine("Wrong input");
// }
//
// Console.WriteLine("Operation(+,-,*,/): ");
// string operation = Console.ReadLine();
//
// ProcessStartInfo psi = new ProcessStartInfo
// {
//     FileName = child,
//     Arguments = $"{a} {b} {operation}",
//     RedirectStandardOutput = true
// };
//
// using Process childProcess = new Process { StartInfo = psi };
//
// childProcess.Start();
//
// childProcess.WaitForExit();
//
// Console.WriteLine(childProcess.StandardOutput.ReadToEnd());

//Task4

// Console.Write("Enter file path: ");
// string filePath = Console.ReadLine();
//
// Console.Write("Word to search: ");
// string fileName = Console.ReadLine();
//
// ProcessStartInfo psi = new ProcessStartInfo
// {
//     FileName = child,
//     Arguments = $"{filePath} {fileName}",
//     RedirectStandardOutput = true
// };
//
// using Process childProcess = new Process { StartInfo = psi };
//
// childProcess.Start();
//
// childProcess.WaitForExit();
//
// Console.WriteLine(childProcess.StandardOutput.ReadToEnd());
