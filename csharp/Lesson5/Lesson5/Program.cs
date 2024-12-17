using System;
using System.Collections.Generic;

class Book
{
    public string Name { get; set; }
    public string Author { get; set; }
    public int PublishedYear { get; set; }

    public Book(string name, string author, int publishedYear)
    {
        Name = name;
        Author = author;
        PublishedYear = publishedYear;
    }
}

class Library
{
    static List<Book> catalog = new List<Book>();

    static void AddBook()
    {
        Console.WriteLine("Enter the book name: ");
        string bookName = Console.ReadLine();

        Console.WriteLine("Enter the author: ");
        string bookAuthor = Console.ReadLine();

        Console.WriteLine("Enter the publication year: ");
        bool isValidYear = int.TryParse(Console.ReadLine(), out var publicationYear);

        if (!isValidYear) throw new Exception("Invalid year format.");

        catalog.Add(new Book(bookName, bookAuthor, publicationYear));
        Console.WriteLine("Book successfully added!\n");
    }

    static void DeleteBook()
    {
        Console.WriteLine("Enter the name of the book to delete: ");
        string bookToDelete = Console.ReadLine();

        for (int i = 0; i < catalog.Count; i++)
        {
            if (string.Equals(bookToDelete, catalog[i].Name, StringComparison.OrdinalIgnoreCase))
            {
                catalog.RemoveAt(i);
                Console.WriteLine($"Book '{bookToDelete}' has been removed from the catalog.\n");
                return;
            }
        }
        Console.WriteLine("Book not found.\n");
    }

    static void DisplayBooks()
    {
        if (catalog.Count == 0)
        {
            Console.WriteLine("The catalog is currently empty!\n");
        }
        else
        {
            foreach (var book in catalog)
            {
                Console.WriteLine($"Name: {book.Name}");
                Console.WriteLine($"Author: {book.Author}");
                Console.WriteLine($"Published Year: {book.PublishedYear}");
                Console.WriteLine("--------------------");
            }
        }
    }

    static void Main()
    {
        while (true)
        {
            Console.WriteLine("Choose an action:\n" +
                              "1. Add a Book\n" +
                              "2. Remove a Book\n" +
                              "3. View Catalog\n" +
                              "4. Exit");

            bool isValidChoice = int.TryParse(Console.ReadLine(), out int choice);

            if (!isValidChoice)
            {
                Console.WriteLine("Invalid input. Please enter a number between 1 and 4.\n");
                continue;
            }

            switch (choice)
            {
                case 1:
                    AddBook();
                    break;
                case 2:
                    DeleteBook();
                    break;
                case 3:
                    DisplayBooks();
                    break;
                case 4:
                    Console.WriteLine("Exiting the program.");
                    return;
                default:
                    Console.WriteLine("Invalid choice. Please try again.\n");
                    break;
            }
        }
    }
}
