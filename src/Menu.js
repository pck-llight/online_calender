import Memo from "./components/Memo"
import styled from "styled-components";
import {HiCalendar} from "react-icons/hi";
import React, {useState} from "react";
import {PiTagFill} from "react-icons/pi";

//사이드 메뉴
const SideMenu = styled.div`
  width: 410px;
  height: calc(100vh - 80px);
  overflow-y: hidden;
  background-color: #ffffff;
`
//메모 컨테이너
const MenuTitle =styled.div`
  margin: 0;
  padding: 0;
  font-size: 18px;
  color: #828587;
  padding-left: 40px;
`
//메모 추가 버튼
const MemoAddButton =styled.button`
  padding: 5px 10px;
  background-color: #3654F4;
  border-radius: 8px;
  border: none;
  position: relative;
  margin-left: 200px;
  color: white;
  font-weight: bold;
`
//메모 칸
const MemoContainer = styled.div`
  height: calc(100vh - 320px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  overflow-y: scroll;
  &::-webkit-scrollbar-thumb{
    background-color: #00000032;
    border-radius: 999px;
  }
  &::-webkit-scrollbar{
    background-color: none;
    border-radius: 999px;
    width: 5px;
  }
`
//메뉴 달력 버튼
const MenuCalenderButton =styled.div`
  padding: 10px 0 10px 15px;
  align-items: center;
  width: 273px;
  border-radius: 999px;
  background-color: #EBEEFE;
  color: 3654F4;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: left;
  color: black;
  text-indent: 18px;
  margin-top: 32px;
  font-weight: bold;
`
//메뉴 메모 버튼
  const MenuMemoButton =styled.div`
    padding: 10px 0 10px 15px;
    align-items: center;
    width: 273px;
    border-radius: 999px;
    //background-color: #EBEEFE;
    color: black;
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: left;
    color: 3654F4;
    text-indent: 18px;
    margin-top: 16px;
    font-weight: bold;
    margin-bottom: 20px;
`
//hr 디자인
const Hr = styled.hr`
  width: 330px;
  margin: 40px 0;
  background-color: #D8DEE2;
  margin-left: auto;
  margin-right: auto;
  
`

//hr 디자인
function Menu(props){
  //메모 저장 배열(새로고침 하면 사라짐)
  const [post, setpost] = useState([]);



  return(
    <>
      <SideMenu style={{
        transform: props.menu ? "translateX(0px)" : "translateX(-410px)",
        width: props.menu ? "420px" : "0px",
        transition: "all .5s",
      }}>
        <MenuTitle>
          메뉴
          <MenuCalenderButton><HiCalendar size={24} color={"#3654F4"}/>달력</MenuCalenderButton>
          <MenuMemoButton><PiTagFill size={24} color={"#F44336"}/>메모 열람</MenuMemoButton>
          메뉴 목록 <MemoAddButton onClick={() => {
            post.push({"title": "sunrint", "content": "wifi is sus", "date": "2023.12.12", "id": post.length? post[post.length-1].id+1: 0})
            setpost([...post])
        }}>추가</MemoAddButton>
        </MenuTitle>
        <Hr/>
        <MemoContainer>
          {
            post.map(e => {
              console.log(e.id);
              return <Memo title ={e.title} content ={e.content} date = {e.date} id={e.id} post={post} setpost={setpost}/>
            })
          }
        </MemoContainer>
      </SideMenu>
    </>
  )
}

export default Menu
