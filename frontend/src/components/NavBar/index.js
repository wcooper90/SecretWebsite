import React from 'react'
import {
  Link,
} from "react-router-dom"

import { Links, NavItem, NavbarContainer, NavbarInner, Brand } from './styles'

const Navbar = () => {

    function refreshPage() {
      window.location.reload(false);
    }

    return (
      <NavbarContainer>
          <NavbarInner>
            <Link to='/' style={{textDecoration: 'none'}}> <Brand onClick={refreshPage}>Cackle</Brand></Link>
                  <Links>
                      <Link to='/'><NavItem onClick={refreshPage}>search</NavItem></Link>
                      <Link to='/about'><NavItem>about</NavItem></Link>
                  </Links>
              </NavbarInner>
      </NavbarContainer>

    )
}

export default Navbar
