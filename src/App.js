import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {IoMdMenu} from "react-icons/io";

const Header = styled.header`
  width: 100%;
  height: 80px;
  position: relative;
  top: 0;
  background-color: white;
  display: flex;
  
`;

const NavTopMenuButton = styled.button`
  width: 28px;
  height: 28px;
  cursor: pointer;
  margin: 0;
  padding: 0;
  border: none;
  background: none; 
  margin-left: 40px;
  margin-top: 26px;
  background-color: #fff;
`

const MenuStatus = styled.div`
  font-size: 20px;
  font-family: suit-bold;
  margin: 0;
  padding: 0;
  margin-top: 26px;
  margin-left: 48px;
  color: #BBC0C3;
`
const B = styled.b`
  font-size: 22px;
  color: blue;
`



function App() {
  
  function menu(){
    console.log("버튼 눌림")
  }
  
  return(
    <>
      <Header>
        <NavTopMenuButton onClick={menu}><IoMdMenu size={28} /></NavTopMenuButton>
        <MenuStatus>상태 : <B itemID={"menu"}> 달력</B></MenuStatus>
      </Header>
    </>
  );
}

export default App;
