using api.Controllers;
using api.Models;
using api.Interfaces;
using Moq;

namespace Api.Test
{
    public class HomeControllerTests
    {
        [Fact]
        public async void Can_Use_Repository()
        {
            // Arrange
            Mock<ITodoRepository> mock = new Mock<ITodoRepository>();
            mock.Setup(m => m.GetAllTodoItems()).Returns((new TodoItem[]{
                new TodoItem { Id = Guid.NewGuid().ToString(), Name = "Wake Up", IsComplete = true},
                new TodoItem { Id = Guid.NewGuid().ToString(), Name = "Bath", IsComplete = false},
                new TodoItem { Id = Guid.NewGuid().ToString(), Name = "Eat Something", IsComplete = false}
            }).AsQueryable<TodoItem>());

            TodoItemsController controller = new TodoItemsController(mock.Object);

            // Act
            IEnumerable<TodoItem>? result = controller.GetTodoItems() as IEnumerable<TodoItem>;
             System.Console.Write(result.ToString());
            //Assert
            TodoItem[] todoArray = result?.ToArray() ?? Array.Empty<TodoItem>();

            System.Console.Write(todoArray.ToString());

            Assert.True(todoArray.Length == 3);
            Assert.Equal("Wake Up", todoArray[0].Name);
            Assert.Equal("Bath", todoArray[1].Name);
            Assert.Equal("Eat Something", todoArray[2].Name);
        }
    }
}