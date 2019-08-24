import React from 'react';
import {Sidebar, Menu} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

function Navbar(){
  const navbarItems = [
    {
      'to': '/',
      'name': 'Home',
      'key': '/'
    },
    {
      'to': '/test/',
      'name': 'Test',
      'key': '/test/'
    }
  ];

  var menuItems = navbarItems.map((navbarItem)=>(
    <Menu.Item key={navbarItem['key']}>
      <Link to={navbarItem['to']}>{navbarItem['name']}</Link>
    </Menu.Item>
  ));

  return (
    <Sidebar
      as={Menu}
      direction='top'
      width='wide'
      visible
    >
      {menuItems}
    </Sidebar>
  )
}

export default Navbar;
