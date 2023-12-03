import Memo from "./components/Memo"
import styled from "styled-components";
import {HiCalendar} from "react-icons/hi";
import React from "react";

//사이드 메뉴
const SideMenu = styled.div`
  width: 400px;
  height: 100%;
  height: calc(100% - 80px);
  background-color: #ffffff;
`
//Menu디자인
const MenuTitle =styled.div`
  margin: 0;
  padding: 0;
  font-size: 18px;
  color: #828587;
  padding-left: 40px;
  
`
//메뉴 달력 버튼
const MenuCalenderButton =styled.div`
  padding: 10px 0 10px 15px;
  align-items: center;
  width: 273px;
  // height: 44px;
  border-radius: 999px;
  background-color: #EBEEFE;
  color: 3654F4;
  align-items: center;
  horiz-align: right;
`

//hr 디자인
const Hr = styled.hr`
  width: 330px;
  margin: 40px 0;
  background-color: #D8DEE2;
  margin-left: auto;
  margin-right: auto;
  
`
function Menu(){

  return(
    <>
      <SideMenu>
        <MenuTitle>
          메뉴
            <MenuCalenderButton><HiCalendar size={24} color={"#3654F4"}/></MenuCalenderButton>
        </MenuTitle>
        <Hr/>
        <Memo/>
        <Memo/>
        <Memo/>
        <Memo/>
      </SideMenu>
    </>
  )
}

export default Menu
