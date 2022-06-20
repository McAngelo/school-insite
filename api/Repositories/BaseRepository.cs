using System;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using api.Interfaces;
using api.Models;

namespace api.Repositories
{
    public class BaseRepository<TEntity> : IBaseRepository<TEntity> where TEntity : class
    {
        private readonly PostgreSqlContext _dbContext;

        public BaseRepository(PostgreSqlContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<IList<TEntity>> GetAllAsync()
        {
            try
            {
                //return await _dbContext.Set<TEntity>().AsNoTracking().ToListAsync();
                return await _dbContext.Set<TEntity>().AsNoTracking().ToListAsync();
            }
            catch (Exception ex)
            {
                throw new Exception($"Couldn't retrieve entities: {ex.Message}");
            }
        }

        public async Task<TEntity> GetByIdAsync(string id)
        {
            try
            {
                var item = await _dbContext.Set<TEntity>().FindAsync(id);
                //var item = await _dbContext.Set<TEntity>().Where(x => x.Id == id).AsNoTracking().FirstOrDefaultAsync();
                if (item == null)
                {
                    throw new Exception($"Couldn't find entity with id={id}");
                }

                return item;
            }
            catch (Exception ex)
            {
                throw new Exception($"Couldn't retrieve entity with id={id}: {ex.Message}");
            }
        }

        public async Task<TEntity> CreateAsync(TEntity data)
        {
            if (data == null)
            {
                throw new ArgumentNullException(nameof(data));
            }

            try
            {
                await _dbContext.Set<TEntity>().AddAsync(data);
                await _dbContext.SaveChangesAsync();
                return data;
            }
            catch (Exception ex)
            {
                throw new Exception($"{nameof(data)} could not be saved: {ex.Message}");
            }
        }

        public async Task<TEntity> UpdateAsync(TEntity data)
        {
            if (data == null)
            {
                throw new ArgumentNullException(nameof(data));
            }

            try
            {
                _dbContext.Set<TEntity>().Update(data);
                await _dbContext.SaveChangesAsync();
                return data;
            }
            catch (Exception ex)
            {
                throw new Exception($"{nameof(data)} could not be updated: {ex.Message}");
            }
        }

        public async Task<bool> DeleteAsync(string id)
        {
            var entity = await _dbContext.Set<TEntity>().FindAsync(id);
            if (entity == null)
            {
                throw new Exception($"{nameof(id)} could not be found.");
            }

            _dbContext.Set<TEntity>().Remove(entity);
            await _dbContext.SaveChangesAsync();
            return true;
        }
    } 
}