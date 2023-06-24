import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from '@mui/material/Box';
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useContext } from "react";
import { noteStore } from "./note";
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';


import '../Style.css';
import Grid from '@mui/material/Grid';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const AddNotes = () => {
  const notes = useContext(noteStore);
  

  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
 

  return ( 

<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>    
      {notes.notes.map((ele, index) => {
        return (
          <Grid  item xs={6} sm={3} md={3} key={index}>
          <Box p={3}>
          {notes.edit[index]===true ? (
      <Card  style={{ maxWidth: '18rem', }} className="child text-center">
            <Card.Header>
             <input type="text" name="title" id="title"  defaultValue={notes.notes[index].title} required/>
        </Card.Header>
        <Card.Body>
          <textarea name="content" id="content" cols="30" rows="3"  defaultValue={notes[index].content} required >
          </textarea>
          <Button variant="contained" color='success' endIcon={<SaveIcon />}>
         Save Note
        </Button>
        </Card.Body> </Card>
        ) :(
            <Card key={index} sx={{ maxWidth: 500 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[800] }} aria-label="recipe">
                    D
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={ele.title}
                subheader={notes.time[index]}
              />
              <Typography component={'span'} variant="body2" color="text.secondary">
                <CardContent>
                  {ele.content.substr(0, 150)}
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                    {ele.content.substr(150,)}   
                  </Collapse>
                  
                </CardContent>
              </Typography>
              <CardActions disableSpacing>
                <IconButton aria-label="edit">
                  <EditNoteIcon />
                </IconButton>
                <IconButton aria-label="delete">
                  <DeleteForeverIcon />
                </IconButton>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
            </Card>
            )}
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
};
export default AddNotes;
