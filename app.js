const express = require("express");
const app = express();
app.use(express.json());
let courses = [
 { id: 1, name: "Data Structures" },
 { id: 2, name: "Operating Systems" }
];
const router = express.Router();
router.get("/courses",(req,res)=>{
 res.json(courses);
});
router.get("/courses/:id",(req,res)=>{
 const course=courses.find(c=>c.id==req.params.id);
 if(!course) return res.send("Not found");
 res.json(course);
});
router.post("/courses",(req,res)=>{
 const course={
  id:courses.length+1,
  name:req.body.name
 };
 courses.push(course);
 res.json(course);
});
router.put("/courses/:id",(req,res)=>{
 const course=courses.find(c=>c.id==req.params.id);
 if(!course) return res.send("Not found");
 course.name=req.body.name;
 res.json(course);
});
router.delete("/courses/:id",(req,res)=>{
 courses=courses.filter(c=>c.id!=req.params.id);
 res.send("Deleted");
});
app.use("/api/v1",router);
const PORT=process.env.PORT || 4000;
app.listen(PORT,()=>{
 console.log("Server running on port "+PORT);
});