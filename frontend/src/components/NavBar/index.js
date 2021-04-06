import React from 'react'
import {
  Link,
} from "react-router-dom"

import { Links, NavItem, NavbarContainer, NavbarInner, Brand } from './styles'

const Navbar = () => {

    // function refreshPage() {
    //   window.location.reload(false);
    // }

    return (
      <NavbarContainer>
          <NavbarInner>
            <Link to='/' style={{textDecoration: 'none'}}>
              <Brand>
                <span style={{color: '#9467BD'}}>C</span>
                <span style={{color: '#44cc00'}}>a</span>
                <span style={{color: '#cc0000'}}>c</span>
                <span style={{color: '#9467BD'}}>k</span>
                <span style={{color: '#3366ff'}}>l</span>
                <span style={{color: '#ff9900'}}>e</span>
              </Brand>
            </Link>
            <Links>
                <Link to='/'><NavItem>search</NavItem></Link>
                <Link to='/about'><NavItem>about</NavItem></Link>
                <Link to='/masthead'><NavItem>masthead</NavItem></Link>
            </Links>
        </NavbarInner>
      </NavbarContainer>

    )
}

export default Navbar
