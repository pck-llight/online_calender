import styled from "styled-components";
import {IoChevronBackSharp, IoChevronForwardSharp} from "react-icons/io5";
import {useState} from "react";

//달력
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
  font-weight: bold;
  font-size: 24px;
`
// 달력 - 요일
const DayOfWeek = styled.div`
  color: #3E4143;
  font-size: 24px;
`
//달력 날짜
const DateCell = styled.div`
  //width: 30px;
  //height: 30px;
  //line-height: 30px;
  margin: 2px;
  // background-color: ${props => (props.empty ? '#ecf0f1' : 'white')};
  //border: 1px solid #ccc;
  text-align: center;
`;

const DayBox = styled.

//달력 생성 함수
function generateCalendar(year, month) {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const calendar = [];
  let dayCounter = 1;

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

  return calendar;
}

  //달력 출력 함수
function Calendar(props) {
  const [selectedMonth, setSelectedMonth] = useState(new Date());

  const renderCalendar = () => {
    const year = selectedMonth.getFullYear();
    const month = selectedMonth.getMonth();
    const calendar = generateCalendar(year, month);

    return calendar.map((week, weekIndex) => (
      <div key={weekIndex} className="week">
        {week.map((day, dayIndex) => (
          <DateCell key={dayIndex} empty={day === null}>
            {day}
          </DateCell>
        ))}
      </div>
    ));
  };



  return(
    <CalendarContanier style={{
      width: props.menu ? "calc(100vw - 410px)" : "100vw",
      transition: "all .5s",
    }}>
      <div style={{
      }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "48px",
          marginBottom: "20px"
        }}>
          <IoChevronBackSharp  size={24} color={"#828587"}/>
          <SelectDate>11월 달력</SelectDate>
          <IoChevronForwardSharp size={24} color={"#828587"}/>
        </div>
        <DayOfWeek>일</DayOfWeek>
        <DayOfWeek>월</DayOfWeek>
        <DayOfWeek>화</DayOfWeek>
        <DayOfWeek>수</DayOfWeek>
        <DayOfWeek>목</DayOfWeek>
        <DayOfWeek>금</DayOfWeek>
        <DayOfWeek>토</DayOfWeek>
        <div style={{
          display: "flex",
          // flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          // margin:"0px",
          // padding:"0px"
        }}>
          {renderCalendar()}
          {/*<tr>{renderCalendar()}</tr>*/}
        </div>

      </div>
    </CalendarContanier>
  );
}

export default Calendar

