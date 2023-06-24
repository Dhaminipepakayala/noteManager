import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import Note from './note';
import { useState } from 'react';

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
 
});


const Footer = () =>{
  const [cnt,setCnt] = useState(false);
  
    return(
        <>
        {cnt &&  <Note />}

        <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        
         <Toolbar>
          <StyledFab color="secondary" aria-label="add">
            {cnt ? (<CloseIcon onClick={() => setCnt(!cnt)} />) : (<AddIcon onClick={() => setCnt(!cnt)} />)}
          </StyledFab>
          </Toolbar>
      </AppBar>
    </>
    )
}
export default Footer;