using System.Linq;
using api.Models;

namespace api.Interfaces
{
    public interface ITodoRepository
    {
        void AddTodoRecord (TodoItem todoItem);
        void UpdateTodoRecord (TodoItem todoItem);
        void DeleteTodoRecord (string id);
        TodoItem GetSingleTodoItem (string id);
        IQueryable<TodoItem> GetAllTodoItems();

    }
}