import Card from 'react-bootstrap/Card';
import '../Style.css';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import SaveIcon from '@mui/icons-material/Save';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  

const Note = () => {

const [data,setData]=useState({
  title:'',
  content:''
});

const [notes,setNotes]=useState([]);
const [edit,setEdit] =useState([]);
const [time,setTime] = useState([]);
const handleChange = (e) => {  
  setData(pre => {
    return{...pre,[e.target.name]:e.target.value}
  });
}
const date = new Date().toLocaleString();

const addNote = (e) => {
  e.preventDefault();
  if(data.title.trim()==='' && data.content.trim()===''){
    toast.error("notes can't be empty")
  }
  else{
  setNotes(prevNotes => [...prevNotes, data]);
  setData({});
  console.log(data);
  setEdit([...edit,false]);
  setTime([...time,date]);
  toast.success('note added successfully'); 
  } 
}
const updateNote = (index) =>{

const updatedNotes = [...notes];
updatedNotes.splice(index,1,data);
setNotes(updatedNotes);
const updated = [...edit]
updated.splice(index,1,false);
setEdit(updated);
const updatedTime = [...time]
updatedTime.splice(index,1,date);
setTime(updatedTime);
toast.success('note updated successfully')

}
const editNote = (index) => {
const updated = [...edit]
updated.splice(index,1,true);
setEdit(updated);
}

const deleteNote = (index) => {
  const updatedNotes = [...notes];
  updatedNotes.splice(index,1);
  setNotes(updatedNotes);
  const updated = [...edit]
  updated.splice(index,1); 
  setEdit(updated);
  const updatedTime = [...time];
  updatedTime.splice(index,1);
  setTime(updatedTime);
  toast.error ('note removed successfully');
}
  return (
    <div>
   
      <Card style={{ maxWidth: '30rem', background:'#fdfac7' }} className="text-center">
        <form>
      <Card.Header>
           <input type="text"  name="title" id="title" defaultValue={data.title} onChange={ handleChange }  placeholder="Add Title:" required/>
      </Card.Header>
      <Card.Body>  
    <textarea name="content" maxLength={300} id="content" cols="30" rows="3" defaultValue='' onChange={ handleChange } placeholder="Add Your Notes..." required >
    </textarea>
        <Button type="submit" variant="contained" color='success' onClick={addNote} endIcon={<NoteAddIcon />}>
       Add Note
      </Button>
      </Card.Body>
      </form>
    </Card>  
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>    
    {notes.map((ele,index) => {
      return(
        <Grid item xs={6} sm={3} md={3} key={index}> 
          {edit[index]===true ? (
          <Card  style={{ maxWidth: '18rem', }} className="child text-center">
          <Card.Header>
           <input type="text" name="title" id="title"  onChange={ handleChange } defaultValue={notes[index].title} required/>
      </Card.Header>
      <Card.Body>
        <textarea name="content" id="content" cols="30" rows="3"  onChange={ handleChange } defaultValue={notes[index].content} required >
        </textarea>
        <Button variant="contained" color='success'  onClick={(e) => updateNote(index)} endIcon={<SaveIcon />}>
       Save Note
      </Button>
        
      </Card.Body> </Card>) :(
            <Card style={{ maxWidth: '18rem' }}>
        <Card.Header className="text-center">{ ele.title }</Card.Header>
      <Card.Body className="text-center">{ ele.content}</Card.Body> 
      
        <span>   
        <span style={{ textAlign:'left' }}>  {time[index]}</span>
        <DeleteForeverIcon color="error"  onClick={(e) => deleteNote(index)} sx={{float:'right',fontSize: 30 ,cursor:'pointer'}} />
        <EditNoteIcon color="success"  onClick={(e) => editNote(index)} style={{ float:'right' }} sx={{textAlign:'right',fontSize: 30,cursor:'pointer'}}/>
       
    </span>
    </Card> )}
      
        </Grid>
      )
    })}
    </Grid>
    <ToastContainer />
    </div>
  )
}

export default Note;
