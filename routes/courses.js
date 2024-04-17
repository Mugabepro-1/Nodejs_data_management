const express = require('express')
const router = express.Router()

const courses = [
    {id:1 , name:'course1'},
    {id:2 , name:'course2'},
    {id:3 , name:'course3'}
];


router.get('/',(req,res)=>{
    res.send(courses);
});


router.get('/:id',(req,res)=>{
    const course = courses.find(c=>c.id ===parseInt(req.params.id))
    if(!course) return res.status(404).send('Course with this id was not found.')
    res.send(course)
});

router.post('', (req,res)=>{
    //after we validate the name input

  const {error} = validateCourse(req.body)
    if(error) return res.status(400).send(error.details[0].message)
    
       const course = {
           id:courses.length+1,
           name:req.body.name
       };a
   
    courses.push(course)
    res.send(course) 
   })

router.put('/:id',(req,res)=>{

    //to get result.error easily using object destructuring 
    const {error} = validateCourse(req.body)

    if(result.error) return res.status(400).send(result.error.details[0].message)
    
    course.name = req.body.name

    res.send(course)
})


router.delete('/:id',(req,res)=>{
    const course = courses.find(c=> c.id===parseInt(req.params.id))
    if(!course) return res.status(404).send('Course with this id was not found.')

    const index = courses.indexOf(course)
    courses.splice(index, 1)
    res.send(course)
})

function validateCourse(course){
    const schema={
        name:Joi.string().min(3).required()
    }
    return Joi.valid(course, schema)
}

module.exports = router;