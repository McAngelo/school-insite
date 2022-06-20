using System.Diagnostics.Contracts;
namespace Api.Test;
using Xunit;
using contracts.Models;

public class ProductTests
{
    [Fact]
    public void CanChangeProductName()
    {
        // Arrange
        var p = new Product { Name = "Test", Price = 100M };

        // Act
        p.Name = "New Name";

        // Assert
        Assert.Equal("New Name", p.Name);
    }

    [Fact]
    public void CanChangeProductPrice(){
        //Arrage
        var p = new Product { Name = "Test", Price = 100M };

        // Act
        p.Price = 200M;

        //Assert
        Assert.Equal(200M, p.Price);
    }
}