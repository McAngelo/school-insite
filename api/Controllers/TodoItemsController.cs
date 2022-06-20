using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using api.Models;
using api.Interfaces;

namespace api.Controllers
{
    [Route("api/todo")]
    [ApiController]
    public class TodoItemsController : ControllerBase
    {
        private readonly ITodoRepository _todoRepository;
        public TodoItemsController(ITodoRepository todoRepository)
        {
            _todoRepository = todoRepository;
        }

        // GET: api/TodoItems
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TodoItem>>> GetTodoItems()
        {
            //return await _dataAccessProvider.GetAllTodoItems();
            return _todoRepository.GetAllTodoItems().ToList();
        }

        // GET: api/TodoItems/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TodoItem>> GetTodoItem(string id)
        {
            //var todoItem = await _context.TodoItems.FindAsync(id);
            var todoItem = _todoRepository.GetSingleTodoItem(id);

            if (todoItem == null)
            {
                return NotFound();
            }

            return todoItem;
        }

        // PUT: api/TodoItems/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTodoItem(TodoItem todoItem)
        {
            if (ModelState.IsValid)
            {
                _todoRepository.UpdateTodoRecord(todoItem);
                return Ok();
            }
            return BadRequest();
        }

        // POST: api/TodoItems
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<TodoItem>> PostTodoItem(TodoItem todoItem)
        {
            if(ModelState.IsValid){
                Guid obj = Guid.NewGuid();
                todoItem.Id = obj.ToString();
                _todoRepository.AddTodoRecord(todoItem);
                return Ok();
            }
            return BadRequest();

            //return CreatedAtAction("GetTodoItem", new { id = todoItem.Id }, todoItem);
        }

        // DELETE: api/TodoItems/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<TodoItem>> DeleteTodoItem(string id)
        {
            var data = _todoRepository.GetSingleTodoItem(id);
            
            if(data == null)
            {
                return NotFound();
            }

            _todoRepository.DeleteTodoRecord(id);
            return Ok();
        }

        /* private bool TodoItemExists(string id)
        {
            return _context.TodoItems.Any(e => e.Id == id);
        } */
    }
}
