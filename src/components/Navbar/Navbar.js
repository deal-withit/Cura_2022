import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { 
  Nav, 
  NavbarContainer, 
  NavIcon, 
  NavLogo, 
  NavMenu,
  NavItem,
  NavLinks,
  MobileIcon
} from './NavbarElement';
import {Link} from 'react-router-dom'

const Navbar = () => {
  const [scrollNav, setScrollNav] = useState(false);
  const [click, setClick] = useState(false);

  function handleClicker(){
    setClick(!click)
  }
  function closeMobileMenu(){
    setClick(false);
  }

//start code from material ui
const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
//end code from material ui

  const changeNav = () => {
    if (window.scrollY >= 100) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={closeMobileMenu}>
            <NavIcon />
          </NavLogo>

          <MobileIcon onClick={handleClicker}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>

          <NavMenu click={click}> 
            <NavItem>
              <Link activeClass="active" to="/" style={{textDecoration:'none'}}><NavLinks onClick={handleClicker}>Home</NavLinks></Link>
            </NavItem>

            {/* <NavItem style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
              <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                style={{
                  color:'white',
                  fontSize:'1.2rem',
                  fontFamily:'sans-serif',
                  textTransform:'capitalize',
                  paddingRight:'-111px'
                }}
              >
               Events
              </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }} */}
    
            {/* > */}
              {/* <Link to="/competitions" style={{textDecoration:'none',color:'black'}}>
                <MenuItem onClick={() => { handleClose(); handleClicker();}}>Competitions</MenuItem>
              </Link> */}
              {/* <Link to="/comingsoon" style={{textDecoration:'none',color:'black'}}>
                <MenuItem onClick={() => { handleClose(); handleClicker();}}>Workshops</MenuItem>
              </Link> */}
              {/* <Link to ="/comingsoon" style={{textDecoration:'none',color:'black'}}>
                <MenuItem onClick={() => { handleClose(); handleClicker();}}>Keynote Speakers</MenuItem>
              </Link> */}
            {/* </Menu>
            </NavItem> */}
            <NavItem>
               <Link to="/competitions"
                style={{textDecoration:'none'}}>
                  <NavLinks 
                     onClick={() => { handleClose(); handleClicker();}}
                  >
                    Events
                  </NavLinks>
               </Link>
            </NavItem>
            <NavItem>
               <Link to="/workshops"
                style={{textDecoration:'none'}}>
                  <NavLinks 
                     onClick={() => { handleClose(); handleClicker();}}
                  >
                    WorkShops
                  </NavLinks>
               </Link>
            </NavItem>

            <NavItem>
               <Link to="/comingsoon"
                style={{textDecoration:'none'}}>
                  <NavLinks 
                     onClick={() => { handleClose(); handleClicker();}}
                  >
                    Keynote Speakers
                  </NavLinks>
               </Link>
            </NavItem>


            <NavItem>
              <Link to="/teams" style={{textDecoration:'none'}}><NavLinks onClick={handleClicker}>Teams</NavLinks></Link>
            </NavItem>
            <NavItem>
             <Link to="/comingsoon" style={{textDecoration:'none'}}><NavLinks onClick={handleClicker}>Partners</NavLinks></Link>
            </NavItem>
            {/* <NavItem>
            <Link to="/comingsoon" style={{textDecoration:'none'}}><NavLinks onClick={handleClicker}>Testimonials</NavLinks></Link>
            </NavItem> */}
          </NavMenu>

        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
