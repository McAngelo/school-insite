using api.Models;
using api.Interfaces;

namespace api.Repositories
{
    public class StudentsRepository : BaseRepository<Student>, IStudentRepository
    {
        public StudentsRepository(PostgreSqlContext dbContext) : base(dbContext)
        {

        }
    }
}