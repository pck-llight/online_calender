
//달력
import styled from "styled-components";
import {IoChevronBackSharp, IoChevronForwardSharp} from "react-icons/io5";
import {useState} from "react";


const CalendarContanier = styled.div`
  background-color: #FFF;
  margin: 40px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`
//날짜 선택
const SelectDate= styled.div`
  //width: 90px;
  height: 29px;
  text-align: center;
  //font-weight: bold;
  font-size: 24px;
`
// // 달력 - 요일
const DayOfWeek = styled.div`
  color: #3E4143;
  font-size: 24px;
`

function Calendar(props){

  const [selectedMonth, setSelectedMonth] = useState(new Date());

  //달력 생성 함수


  function GenerateCalendar() {
    const year = selectedMonth.getFullYear();
    const month = selectedMonth.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    const calendar = [];
    let dayCounter = 1;

    const DateCell = styled.div`
      width: 50px;
      height: 50px;
      font-size: 24px;
    `

    for (let i = 0; i < 6; i++) {
      const week = [];

      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < firstDayOfMonth) || dayCounter > daysInMonth) {
          week.push(null);
        } else {
          week.push(dayCounter);
          dayCounter++;
        }
      }

      calendar.push(week);
    }


    return(
      calendar.forEach(<DateCell></DateCell>)
    )
  }


  return(
    <CalendarContanier style={{
      width: props.menu ? "calc(100vw - 410px)" : "100vh"
    }}>
      <SelectDate><IoChevronBackSharp size={24} color={"#828587"}/>{selectedMonth.getMonth() + 1}월 달력<IoChevronForwardSharp size={24} color={"#828587"}/></SelectDate>

    </CalendarContanier>
  )
}

export default Calendar

