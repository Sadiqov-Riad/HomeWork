using ProjectShowroom.Data;

namespace ProjectShowroom.Interfaces;

public interface IUserService
{
    public User LoginUser(LoginDTO loginDto);
    public void RegisterUser(RegisterDTO registerDto);
}