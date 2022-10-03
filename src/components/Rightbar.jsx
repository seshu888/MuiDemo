import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box flex={2} p={2}
    sx={{
        display:{xs:"none",sm:"block"}
    }}
    >
    <Box position="fixed" width={300}>
      <Typography variant='h6' fontWeight={100}>
        Online Friends
      </Typography>
      <AvatarGroup max={7}>
        <Avatar alt="Remy Sharp" src="https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png" />
        <Avatar alt="Travis Howard" src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg" />
        <Avatar alt="Cindy Baker" src="https://img.freepik.com/free-photo/half-profile-image-handsome-young-caucasian-man-with-good-skin-brown-eyes-black-stylish-hair-stubble-posing-isolated-against-blank-wall-looking-front-him-smiling_343059-4560.jpg?w=2000" />
        <Avatar alt="Agnes Walker" src="https://img.freepik.com/free-photo/half-profile-picture-friendly-looking-fashionable-young-male-with-mustache-beard-smiling-thoughtfully-as-he-reminds-some-funny-story-joke-posing-studio-wearing-white-formal-shirt_343059-946.jpg?w=2000" />
        <Avatar alt="Trevor Henderson" src="https://media.istockphoto.com/photos/halffaced-portrait-of-serious-concentrated-confident-brutal-chic-picture-id932956896?b=1&k=20&m=932956896&s=170667a&w=0&h=8o4BSJlzqkVbhuRVINRGJIpFdQF6L19r3sqFHpeS6KQ=" />
      </AvatarGroup>
      <Typography variant='h6' fontWeight={100} mt={2} mb={2}>
        Latest Photos
      </Typography>
      <ImageList cols={3} rowHeight={100} gap={5}>
        <ImageListItem>
          <img alt="" src="https://static-cse.canva.com/blob/936244/1600w-z_r_KC1WlmU.jpg"/>
        </ImageListItem>
        <ImageListItem>
          <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-U04a0jFCHilqmZEJ9WOwTTQ1Co7PL0xSV1eP31LTIAZtZLe4t_kgC6mDyk1d-fleNos&usqp=CAU"/>
        </ImageListItem>
        <ImageListItem>
          <img alt="" src="https://www.adobe.com/express/create/media_11b1adffc91b8e6206e56adab00fa2bb4da3e694a.jpeg?width=400&format=jpeg&optimize=medium"/>
        </ImageListItem>
      </ImageList>
      <Typography variant='h6' fontWeight={100} mt={2} mb={2}>
        Latest Conversation
      </Typography>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://static-cse.canva.com/blob/936244/1600w-z_r_KC1WlmU.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
    </Box>
    </Box>
  )
}

export default Rightbar