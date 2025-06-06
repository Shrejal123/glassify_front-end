import { Box, Modal, Typography } from '@mui/material'
import React from 'react'
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'
import { useLocation } from 'react-router-dom'


const style={
    position:'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    outline: "none",
    p: 4,
    boxShadow: 24
}

const AuthModel = ({handleClose, open}) => {
  const location = useLocation();
  return (
    <div>
      <Modal
  open={true}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    {location.pathname === "/login" ? <LoginForm/>: <RegisterForm/>}
  
  </Box>
</Modal>
    </div>
  )
}

export default AuthModel
