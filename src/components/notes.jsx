import React from 'react'

const Notes = () => {
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
    </div>
  )
}

export default Notes