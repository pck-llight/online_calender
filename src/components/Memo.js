import styled from "styled-components";
import {MdDelete} from "react-icons/md";
import React from "react";

//메모 카드
const MemoCard = styled.div`
  width: 330px;
  height: 131px;
  border-radius: 16px;
  background-color: #F3F5F6;
  border: none;
  padding: 0;
  margin: 0;
  margin-left: 40px;
  margin-bottom: 24px;
  display: inline-flex;
  //align-items: ;
`
//메모 삭제 버튼
const MemoDelButton = styled.button`
  position: absolute;
  background-color: #ccd0da;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 8px
`
//메모 제목
const MemoTitle = styled.h3`
  color: #3654F4;
  margin: 0;
  margin-left: 20px;
  margin-bottom: 20px;
`
//메모 내용
const MemoContent = styled.h4`
  margin: 0;
  margin-left: 20px;
  margin-bottom: 18px;
`
//메모 날짜
const Memoday = styled.p`
  color: #BBC0C3;
  font-size: 14px;
  margin: 0;
  margin-left: 20px;
  margin-bottom: 18px;
  
`


function Memo(){

  //메뉴 html
  return(
    <>
        <MemoCard>
          <MemoTitle>제목</MemoTitle><br/>
          <MemoContent>내용</MemoContent><br/>
          <Memoday>2023.12.12</Memoday><br/>
          <MemoDelButton style={{
            transform: "translateX(290px) translateY(95px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}><MdDelete size={24}/></MemoDelButton>
        </MemoCard>
    </>
  )
}

export default Memo;
