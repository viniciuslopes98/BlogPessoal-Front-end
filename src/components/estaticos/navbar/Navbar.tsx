import Menu from "@material-ui/core/Menu";
import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
} from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css';
import { useDispatch, useSelector } from "react-redux";
import { addToken } from "../../../store/tokens/action";
import { TokenState } from "../../../store/tokens/tokenReducer";
import {toast} from 'react-toastify';
function Navbar() {
  
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
   )
  
  
  function goLogout(){
    dispatch(addToken(''));
toast.info('Usuário deslogado',{
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover:false,
  draggable:false,
  theme:"colored",
  progress: undefined,
});
navigate('/login');
  }
  var navbarComponent;

  if(token!= ""){
navbarComponent =  <AppBar position="static" style={{backgroundColor:"darksalmon"}}>
<Toolbar variant="dense">
  <Box className="cursor">
    <Typography variant="h5" color="inherit">
      BlogPessoal
    </Typography>
  </Box>

  <Box display="flex" justifyContent="start">
    <Link to="/home" className="text-decorator-none">
    <Box mx={1} className="cursor">
      <Typography variant="h6" color="inherit">
        HOME
      </Typography>
    </Box>
    </Link>
    <Link to="/posts" className="text-decorator-none">
    <Box mx={1} className="cursor">
      <Typography variant="h6" color="inherit">
        POSTAGENS
      </Typography>
    </Box>
    </Link>
    <Link to="/temas" className="text-decorator-none">
    <Box mx={1} className="cursor">
      <Typography variant="h6" color="inherit">
        TEMAS
      </Typography>
    </Box>
    </Link>
    <Link to="/formularioTema" className="text-decorator-none">
    <Box mx={1} className="cursor">
      <Typography variant="h6" color="inherit">
        CADASTRAR TEMA
      </Typography>
    </Box>
    </Link>

    
      <Box mx={1} className="cursor" onClick={goLogout}>
        <Typography variant="h6" color="inherit">
          LOGOUT
        </Typography>
      </Box>
    
  </Box>
</Toolbar>
</AppBar>
  }
  
  return (
    <>
     {navbarComponent}
    </>
  );
}

export default Navbar;
