import React from 'react';
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';

const NavBar = () => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand>314Tastic</NavbarBrand>
      </Navbar>
    </div>
  );
}


export default NavBar;