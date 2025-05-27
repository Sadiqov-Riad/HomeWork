using Lesson11.Data.Model;

namespace Lesson11.Interfaces;

public interface IMovieService
{
    public MovieSearchResult? Search(string movieName, int page = 1);
}