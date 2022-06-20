using api.Models;
using api.Interfaces;

namespace api.Repositories
{
    public class ClassRoomRepository : BaseRepository<ClassRoom>, IClassRoomRepository
    {
        public ClassRoomRepository(PostgreSqlContext dbContext) : base(dbContext)
        {

        }
    }
}