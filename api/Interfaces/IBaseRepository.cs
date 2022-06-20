using System;
using System.Linq.Expressions;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace api.Interfaces
{
    public interface IBaseRepository<TEntity> where TEntity : class
    {
        Task<IList<TEntity>> GetAllAsync();
        Task<TEntity> GetByIdAsync(string id);
        //Task<IList<TEntity>> FindAsync(Expression<Func<TEntity, bool>> expression);
        Task<TEntity> CreateAsync(TEntity entity);
        //Task<TEntity> AddRange(IEnumerable<TEntity> entities);
        Task<TEntity> UpdateAsync(TEntity entity);
        Task<bool> DeleteAsync(string id);
        //Task<bool> RemoveRange(IEnumerable<TEntity> entities);
    }
}