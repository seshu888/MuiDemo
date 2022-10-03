import React,{useState} from 'react'
import {Box,Fab,Modal,Tooltip,styled, Typography, Avatar, TextField, ButtonGroup, Button} from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import ImageIcon from '@mui/icons-material/Image';
import MissedVideoCallIcon from '@mui/icons-material/MissedVideoCall';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { Stack } from '@mui/system';
const Add = () => {
    const [open,setOpen]=useState(false)
    const StyledModal=styled(Modal)(
        {
            display:"flex",
            alignItems:"center",
            justifyContent:"center"
        }
    )
    const UserBox=styled(Box)(
        {
            display:"flex",
            alignItems:"center",
            gap:"1rem",
            marginBottom:"2rem"
        }
    )
    

  return (
    <Box>
        <Tooltip onClick={e=>setOpen(true)} title="Delete" sx={{position:"fixed",bottom:20,left:{xs:"calc(50%-25px)",md:30}}}>
            <Fab color="primary" aria-label='add'>
                <AddIcon/>
            </Fab>
        </Tooltip>
        <StyledModal
            open={open}
            onClose={e=>setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5} >
                <Typography variant="h6" color="gray" textAlign="center" border="none">
                    Create Post
                </Typography>
                <UserBox>
                <Avatar
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJBs6MU-InXcZnTzG7I9JP5mp2d0iDc39PQkMvsao&s"
                    sx={{width:30,height:30}}
                    />
                    <Typography fontWeight={500} variant="span">Abhi</Typography>
                </UserBox>
                <TextField
                    sx={{width:"100%"}}
                    id="standard-multiline-static"
                    multiline
                    rows={4}
                    placeholder="What's on Your Mind!"
                    variant="standard"
                    />
                <Stack direction="row" gap="1rem" mt="1rem" mb="1rem">
                    <SentimentVerySatisfiedIcon color="primary"/>
                    <ImageIcon color="secondary"/>
                    <MissedVideoCallIcon color="success"/>
                    <PersonAddAltIcon color="error"/>
                </Stack>
                <ButtonGroup variant="contained" aria-label="outlined primary button group" fullWidth>
                    <Button>Post</Button>
                    <Button sx={{width:"100px"}}
                    ><DateRangeIcon/></Button>
                </ButtonGroup>
            </Box>
            
        </StyledModal>
    </Box>
  )
}

export default Add