﻿namespace ProjectShowroom;

public class User
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public Guid ShowroomId { get; set; }
    public string Username { get; set; }
    public string Password { get; set; }
}   