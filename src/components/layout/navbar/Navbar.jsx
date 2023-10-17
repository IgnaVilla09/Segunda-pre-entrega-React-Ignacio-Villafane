import { Box, responsiveFontSizes } from "@mui/material";
import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Outlet, Link } from "react-router-dom";
import { Height } from "@mui/icons-material";

export const Navbar = () => {
  return (
    <>
      <Box className={"containerNavbar"} sx={{height: 110}}>
        <Link to="/" className="logoNav">
        <img style={{width: 70, marginTop:5}}
        src="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png"
        alt="Logo"
        />
        <h3 style={{fontSize: 20, textAlign: "center", color: "white"}}>React Store Gaming</h3> 
        </Link>
          <ul className="categories">
            <Link to="/">
              <li>Productos</li>
            </Link>
            <Link to="/category/procesador">
              <li>Procesadores</li>
            </Link>
            <Link to="/category/graficas">
              <li>GPU´s</li>
            </Link>
          </ul>
        <CartWidget />
      </Box>
  
    </>
  );
};
