import Link from "next/link"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { ButtonBase } from "@mui/material";
import { maxWidth, width } from "@mui/system";
import { Stack } from "@mui/material";





const images = [
  {
    url: '/backgrounds/green.png',
    title: 'Public Q&A',
    subtitle: 'Ask any kind of question, whether it is about art, fitness or travel. Anything You want, all in one place!',
    width: '50%',
    link: '/q&a/public'
  },
  {
    url: '/backgrounds/grey.png',
    title: 'Private Q&A',
    subtitle: 'Perhaps, if You need greater assistance with your problem, You can get in touch with one of our best specialists.',
    width: '50%',
    link: '/q&a/private'
  },
 
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: window.innerHeight - 64,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: (window.innerHeight - 56)/2,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.1,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 50%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.3,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 0,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export default function Forum() {


  

  function detectMob() {
    return ( ( window.innerWidth <= 800 ) && ( window.innerHeight <= 1000 ) );
  }
  const isMobile = detectMob()

if(isMobile)
{
  return <>
  <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
          href={image.link}
          
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root"  />
          
          <Image sx={{'& .MuiTypography-root': {
      border: '2px solid currentColor',
    }}}>
            <Typography
              align="center"
              component="span"
              variant="h6"
              color="text.secondary"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                mb:20
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>

          <Image>
            <Typography
              align="center"
              component="span"
              variant="body1"
              color="text.secondary"
              sx={{
                mt:10, maxWidth:220
              }}>
              {image.subtitle}
              
            </Typography>
            
          </Image>
        </ImageButton>
      ))}
    </Box>
  </>
}else{

  
  return <>
  <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 150, width: '100%' }}>
      {images.map((image) => (
        <ImageButton
        
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
          href={image.link}
          
        >
          {/* imagesrc je pozadina-boja */}
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          {/* imagebackdrop je hover efekt */}
          <ImageBackdrop className="MuiImageBackdrop-root" />
          
          {/* image komponenta je tekst samo */}
          
          <Image sx={{'& .MuiTypography-root': {
      border: '4px solid currentColor',
    }}}>
            <Typography
              align="center"
              component="span"
              variant="h6"
              color="text.secondary"
              sx={{
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                mb:{md:20, xs:30}
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
            
          </Image>

          <Image>
            <Typography
              align="center"
              component="span"
              variant="body1"
              color="text.secondary"
              sx={{
                mb:{md:-10, xs:30}, maxWidth:{md:300}
              }}
            >
              {image.subtitle}
              
            </Typography>
            
          </Image>
          
        </ImageButton>
      ))}
    </Box>
  </>
}
  
}