using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using api.Interfaces;
using api.Models;
using AutoMapper;

namespace api.Controllers
{
    [Route("api/student")]
   
    [ApiController]
    public class StudentsController : ControllerBase
    {
        private readonly IStudentRepository _studentRepository;/search
        private readonly IMapper _mapper;
        private readonly ILogger<StudentsController> _logger;

        public StudentsController(IStudentRepository studentRepository, IMapper mapper, ILogger<StudentsController> logger)
        {
            _studentRepository = studentRepository;
            _mapper = mapper;
            _logger = logger;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var categories = await _studentRepository.GetAllAsync();
            return Ok(_mapper.Map<IList<Student>>(categories));
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] Student newPost)
        {
            if (newPost == null)
            {
                return BadRequest();
            }

            var post = _mapper.Map<Student>(newPost);
            await _studentRepository.CreateAsync(post);
            return Ok();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(string id, [FromBody] Student postModel)
        {
            if (postModel == null || id == null)
            {
                return BadRequest();
            }

            postModel.Id = id;
            var post = _mapper.Map<Student>(postModel);
            await _studentRepository.UpdateAsync(post);
            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            if (id == null)
            {
                return BadRequest();
            }

            var isDeleted = await _studentRepository.DeleteAsync(id);
            return Ok(isDeleted);
        }
    }
}