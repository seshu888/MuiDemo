import { AppBar,Toolbar,styled, Typography, Box, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material'
import React,{useState} from 'react'
import SpaIcon from '@mui/icons-material/Spa';
import {theme} from '../theme'
import { Mail, Notifications } from '@material-ui/icons';

const StyledToolbar=styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between",

})
const Search=styled("div")(( {theme} ) => ({
  backgroundColor:"white",
  padding:"0 1rem",
  borderRadius:theme.shape.borderRadius,
  width:"40%"
}));
const Icons=styled(Box)(({theme})=>({
  display:"none",
  gap:"1rem",
  alignItems:"center",
  [theme.breakpoints.up("sm")]:{display:"flex"} 
}));
const UserBox=styled(Box)(( {theme} ) => ({
  display:"none",
  gap:"1rem",
  alignItems:"center",
  [theme.breakpoints.up("xs")]:{display:"flex"} 
}));
const Navbar = () => {
  const [open,setOpen]=useState(false)

  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{display:{sm:"block",xs:"none"}}}>ABHI DEV</Typography>
        <SpaIcon sx={{display:{sm:"none",xs:"block",lg:"none",md:"none"}}}/>
        <Search>
          <InputBase placeholder='search'/>
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail  />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications  />
          </Badge>
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJBs6MU-InXcZnTzG7I9JP5mp2d0iDc39PQkMvsao&s" 
          sx={{height:30,width:30}}/>
        </Icons>
        <UserBox>
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJBs6MU-InXcZnTzG7I9JP5mp2d0iDc39PQkMvsao&s" 
          sx={{height:30,width:30}}
          onClick={e=>setOpen(true)}/>
          <Typography variant='span'>John</Typography>
        </UserBox>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        
        open={open}
       onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar