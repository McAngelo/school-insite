using api.Interfaces;
using api.Models;

namespace api.Repositories
{
    /* public class BaseRepository<T> : IBaseRepository<T> where T : class
    {
        private readonly PostgreSqlContext _dbContext;

        public BaseRepository(PostgreSqlContext dbContext)
        {
            _dbContext = dbContext;
        }

        public Task<T> GetById(string id){
            try
            {
                var item = _dbContext.Set<T>().FirstOrDefault(t => t.Id == id);
                return item;
            }
            catch (System.Exception ex)
            {
                 // TODO
            }
        }
        IEnumerable<T> GetAll();
        IEnumerable<T> Find(Expression<Func<T, bool>> expression);
        void Add(T entity);
        void AddRange(IEnumerable<T> entities);
        void Remove(T entity);
        void RemoveRange(IEnumerable<T> entities);
    } */
}