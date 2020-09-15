import React from 'react';
import Header from '../components/Header';
import { Container, Body } from './styles';
import SideBar from '../components/SideBar';
import Feed from '../components/Feed';
import Widgets from '../components/Widgets';


const Layout: React.FC = () => {
  return (
    <Container>
       <Header />
       <Body>
         <SideBar />
         <Feed />
         <Widgets />
       </Body>
    </Container>
  )
}

export default Layout;