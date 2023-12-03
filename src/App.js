import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {IoMdMenu} from "react-icons/io";
import Memo from "./components/Memo";
import Menu from "./Menu";
import CalendarContanier from "./Calendar";



//헤더 디자인
const Header = styled.header`
  width: 100%;
  height: 80px;
  position: relative;
  top: 0;
  background-color: #FFF;
  display: flex;
  margin: 0;
  align-items: center;
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
  background-color: #fff;
`
//년도 디자인
const Year = styled.div`
  font-size: 20px;
  font-family: suit-bold;
  margin: 0;
  padding: 0;
  margin-left: 48px;
  color: #BBC0C3;
`

//월 디자인
const Month = styled.b`
  font-size: 22px;
  margin: 0;
  padding: 0;
  color: #3654F4;
  margin-left: 12px;
`

function App() {
  const [isMenuOn, setIsMenuOn] = useState(false);

  //햄버거 메뉴 버튼 기능
  function menuOnOff(){
    console.log("메뉴 버튼 눌림" +isMenuOn)
    setIsMenuOn(!isMenuOn)
  }

  //전체 html
  return(
    <>
      <Header>
        <NavTopMenuButton onClick={menuOnOff}><IoMdMenu size={28} /></NavTopMenuButton>
        <Year>2023년</Year><Month>11월</Month>
      </Header>
      <div style={{
        display: "flex"

      }}>
        <Menu menu={isMenuOn}/>
        <CalendarContanier />
      </div>
    </>
  );
}

export default App;
