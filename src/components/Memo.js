import styled from "styled-components";
import {MdDelete} from "react-icons/md";
import React from "react";

//메모 카드
const MemoCard = styled.div`
  width: 330px;
  height: 1000px;
  border-radius: 16px;
  background-color: #F3F5F6;
  border: none;
  padding: 10px;
  margin: 0;
  //margin-left: 40px;
  //margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
`
//메모 삭제 버튼
const MemoDelButton = styled.button`
  //position: relative;
  background-color: #ccd0da;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 8px;
  //transform: translateX(300px) translateY(-28px);
  display: flex;
  align-items: center;
`
//메모 제목
const MemoTitle = styled.h3`
  color: #3654F4;
  margin: 0;
  //overflow-y: 300px;
  //word-wrap: break-word;
`
//메모 내용
const MemoContent = styled.h4`
  //width: 330px;
  height: 45px;
  word-wrap: break-word;
  margin: 0;
  overflow-y: scroll;
  &::-webkit-scrollbar{
    background-color: none;
    width: 3px;
  }
  &::-webkit-scrollbar-thumb{
    background-color: #00000032;
    border-radius: 999px;
  }
`
//메모 날짜
const Memoday = styled.p`
  color: #BBC0C3;
  font-size: 14px;
  margin: 0;
`


function Memo(props){

  //메뉴 html
  return(
    <>
        <MemoCard>
          <div>
            <MemoTitle>{props.title}</MemoTitle>
            <MemoContent>{props.content}</MemoContent>
          </div>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}>
            <Memoday>2023.12.12</Memoday><br/>
            <MemoDelButton><MdDelete size={24}/></MemoDelButton>
          </div>
        </MemoCard>
    </>
  )
}

export default Memo;
