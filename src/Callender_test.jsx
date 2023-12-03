import styled from "styled-components";
import {IoChevronBackSharp, IoChevronForwardSharp} from "react-icons/io5";
import {useState} from "react";


const Container = styled.div`
  display: flex;
  width: 1430px;
  height: 920px;
  padding: 50px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 66px;
  flex-shrink: 0;
  border-radius: 16px;
  background: #FFF;
`;


const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 48px;
`;

const TitleText = styled.div`
  color: #222;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Callender_test = () => {
  return(
    <Container>
      <Title>
        <IoChevronBackSharp  size={24} color={"#828587"}/>
        <TitleText>11월 달력</TitleText>
        <IoChevronForwardSharp  size={24} color={"#828587"}/>
      </Title>
    </Container>
  );
};

export default Callender_test;