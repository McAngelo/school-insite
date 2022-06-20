using System.Linq.Expressions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Data.Common;

namespace api.Interfaces
{
    public interface IBaseRepository<T> where T : class
    {
        T GetById(string id);
        IEnumerable<T> GetAll();
        IEnumerable<T> Find(Expression<Func<T, bool>> expression);
        void Add(T entity);
        void AddRange(IEnumerable<T> entities);
        void Remove(T entity);
        void RemoveRange(IEnumerable<T> entities);
    }
}