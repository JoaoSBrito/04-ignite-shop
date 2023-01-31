import { styled } from "..";

export const HomeContainer = styled('main', {
  display: 'flex',
  gap: '3rem',
  backgroundColor: 'red',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
})

export const Product = styled('a', {
   background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%);',
   borderRadius: 8,
   padding: '.25rem',
   cursor: 'pointer',
   
   position: 'relative',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',

   img: {
    objectFit: 'cover'
   },

   footer: {
    position: 'absolute',
    bottom: '.25rem',
    left: '.25rem',
    right: '.25rem',
    padding: '2rem',

    borderRadius: 6,
    
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: 'rgba(0,0,0,.6)',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all .2s ease-in-out',
    overflow: 'hidden',

    strong: {
      fontSize: '$lg',
    },

    span: {
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$green300'
    }
  
   },

   '&:hover': {
    footer: {
      transform: 'translateY(0)',
      opacity: 1,
    }
   }
})