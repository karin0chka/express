const express = require('express')
const router = express.Router()

//static routes first
router.get('/', (req,res) =>{
    console.log(req.query.name)
    res.send('User list')
})
router.get('/new',(req,res)=>{
    res.render("users/new")
})

router.post('/',(req,res) =>{
    const isValid = true
    if(isValid){
        users.push({firstName: req.body.firstName})
        res.redirect(`/users/${users.length - 1}`)
    }else{
        console.log("Error")
        res.render('users/new', {firstName:req.body.firstName})
    }
   console.log(req.body.firstName)
   res.send("Hi")
})

router.route("/:id").get((req,res) => {
    console.log(req.user)
    res.send(`Get User With ID ${req.params.id}`)
})
.put((req,res)=>{
    req.params.id
    res.send(`Update User With ID ${req.params.id}`)
})
.delete((req,res)=>{
    req.params.id
    res.send(`Delete User With ID ${req.params.id}`)
})

const users = [{name: "Kyle"}, {name:"Sally"}]

router.param("id",(req,res,next,id)=>{
    req.user = users[id]
    next()
})

module.exports = router