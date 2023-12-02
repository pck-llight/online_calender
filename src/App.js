import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {IoMdMenu} from "react-icons/io";
import Menu from "./components/Menu";

//메뉴 칸
const SideMenu = styled.div`
  width: 400px;
  height: 100%;
  background-color: #fff;
`

//헤더 디자인
const Header = styled.header`
  width: 100%;
  height: 80px;
  position: relative;
  top: 0;
  background-color: white;
  display: flex;
  margin: 0;
  
`;

//햄버거 메뉴 버튼 디자인
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
//년도 디자인
const Year = styled.div`
  font-size: 20px;
  font-family: suit-bold;
  margin: 0;
  padding: 0;
  margin-top: 26px;
  margin-left: 48px;
  color: #BBC0C3;
`

//월 디자인
const Month = styled.b`
  font-size: 22px;
  margin: 0;
  padding: 0;
  color: #3654F4;
  margin-top: 26px;
  margin-left: 12px;
`

function App() {

  //햄버거 메뉴 버튼 기능
  function menu(){
    console.log("메뉴 버튼 눌림")

  }

  //전체 html
  return(
    <>
      <Header>
        <NavTopMenuButton onClick={menu}><IoMdMenu size={28} /></NavTopMenuButton>
        <Year>2023년</Year><Month>11월</Month>
      </Header>
      <SideMenu>
        <Menu/>
        <Menu/>
        <Menu/>
        <Menu/>
        <Menu/>
        <Menu/>
        <Menu/>
        <Menu/>
      </SideMenu>
    </>
  );
}

export default App;
