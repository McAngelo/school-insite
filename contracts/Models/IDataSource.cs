using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace contracts.Models
{
    public interface IDataSource
    {
        IEnumerable<Product> Products { get; }
    }
}