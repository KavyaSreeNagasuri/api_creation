const express=require('express');
const app=express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const studentList=[
    {
        id:1,
        name:"abc",
        age:20
    },
    {
        id:2,
        name:"def",
        age:21
    },
    {
        id:3,
        name:"pqr",
        age:21
    },
    {
        id:4,
        name:"xyz",
        age:20
    },
]

app.get('/api/student',(req,res)=>{
    res.json(studentList);
})

app.post('/api/student',(req,res)=>{
    console.log(req);
    const newstud={
        id:studentList.length+1,
        name:req.body.name,
        age:req.body.age
    }
    studentList.push(newstud);
    res.status(200);
})
app.delete('/api/student/:id',(req,res)=>{
    const idToBeDeleted=parseInt(req.params.id);
    const studentToBeDeleted=studentList.findIndex(stud=>idToBeDeleted==stud.id);
    studentList.splice(studentToBeDeleted,1);
    res.json(studentList);
})
app.put('/api/student/:id',(req,res)=>{
    const idToBeReplaced=parseInt(req.params.id);
    const studentToBeReplaced=studentList.findIndex(stud=>idToBeReplaced==stud.id);
    studentList[studentToBeReplaced].name=req.body.name;
    studentList[studentToBeReplaced].age=req.body.age;
    res.json(studentList);
})
app.get('/api/student/:id',(req,res)=>{
    const idToBeFetched=parseInt(req.params.id);
    const studentToBeFetched=studentList.findIndex(stud=>idToBeFetched==stud.id);
    // studentList.splice(studentToBeFetched,1);
    res.json(studentList[studentToBeFetched]);
})
app.listen(1008);

