import React,{useState, useEffect} from 'react';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Login from "./SignIn"
import Register from './Register';
import "./LoginRegister.css"
import "../styles/Login.css"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function LoginRegister() {
  const [open, setOpen] = useState(true);
  const [showLogin, setShowLogin] = useState(true);
  const [showRegister, setShowRegister] = useState(false);

  const handleModal = (value)=>{
      setOpen(value)
  }

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='main_container'>
      <div>
        <button className='btn login_redirect_btn' onClick={handleOpen}>Login / Register</button>
      </div>
      <Modal
        className="basic_modal"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className='modal_box'>
         
          <div className='login_container'>
            
             <div className="login_info_container grid_item">
               <div className="login_options">
                 <div
                   className={(showLogin == 1 ? "is_active": null)}
                  onClick={()=>{
                   setShowLogin(true)
                   setShowRegister(false)
                   
                 }}>
                   LOGIN
                 </div>
                 <div
                 className={(showRegister == 1 ? "is_active": null)}
                  onClick={()=>{
                   setShowLogin(false)
                   setShowRegister(true)
                 }}>
                   REGISTER
                 </div>
               </div>
            {
              showLogin &&
              <Login handleModal= {handleModal}/>
            }
            {
              showRegister &&
              <Register handleModal= {handleModal}/>
            }
             </div>
             
         </div>
     
        </Box>
      </Modal>
    </div>
  );
}
