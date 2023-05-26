const express=require('express')
const path=require('path')
const app=express()
const bodyparser=require('body-parser')
const notes=[{
    id:1,
    content:"add your notes"
}]
app.use( bodyparser.json() );      
app.use(bodyparser.urlencoded({    
  extended: true
}));
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get("/",(req,res)=>{
    res.render("keepnotes",{ data : notes })
})
app.post("/",(req,res)=>{
    const id=notes.length+1;
    
    const content=req.body.content;
    notes.push({
        id:id,
        
        content:content
    })
    
    
    res.render("keepnotes",{ data : notes })
})
app.post("/update",(req,res)=>{
    var id=req.body.id;
    var content=req.body.content;
   
    notes.forEach(note => {
        if(note.id==id){
        note.content=content;}
    })
    res.render("keepnotes",{ data : notes })
})
app.post('/delete', (req, res) => {
    var id = req.body.id;
  
    var j = 0;
    notes.forEach(note => {
        j = j + 1;
        if (note.id == id) {
            notes.splice((j - 1), 1)
        }
    })
  
    res.render("keepnotes", {
        data: notes
    })
})
app.listen(3000, (req, res) => {
    console.log("App is running on port 3000")
})
