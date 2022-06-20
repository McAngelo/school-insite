using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Interfaces;
using api.Models;

namespace api.Repositories
{
    public class DataAccessProvider: ITodoRepository
    {
        private readonly PostgreSqlContext _dbContext;

        public DataAccessProvider(PostgreSqlContext context)
        {
            _dbContext = context;
        }

        public void AddTodoRecord (TodoItem todoItem)
        {
            _dbContext.TodoItems.Add(todoItem);
            _dbContext.SaveChanges();
        }
        public void UpdateTodoRecord (TodoItem todoItem)
        {
            _dbContext.TodoItems.Update(todoItem);
            _dbContext.SaveChanges();
        }

        public void DeleteTodoRecord (string id)
        {
            var entity = _dbContext.TodoItems.FirstOrDefault( t => t.Id == id);
            _dbContext.TodoItems.Remove(entity);
            _dbContext.SaveChanges();
        }

        public TodoItem GetSingleTodoItem (string id)
        {
            return _dbContext.TodoItems.FirstOrDefault(t => t.Id == id);
        }

        public IQueryable<TodoItem> GetAllTodoItems()
        {
            return _dbContext.TodoItems.AsQueryable();
        }
        
    }
}