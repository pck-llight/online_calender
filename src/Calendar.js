
//달력
import styled from "styled-components";
import {IoChevronBackSharp, IoChevronForwardSharp} from "react-icons/io5";
import {useState} from "react";


const CalendarContanier = styled.div`
  background-color: #FFF;
  margin: 40px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
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

//날짜 칸 디자인 -> 만약 오늘이라면 배경색, 글자색을 수정한다.
const DateCell = styled.div`
  width: 50px;
  height: 50px;
  font-size: 24px;
  background-color: ${({ isToday }) => (isToday ? "#3654F4" : "transparent")};
  color: ${({ isToday }) => (isToday ? "#FFF" : "#000")};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`

function Calendar(props){
  //달 선택 저작 객체
  const [selectedMonth, setSelectedMonth] = useState(new Date());


  //달력 생성 함수
  function GenerateCalendar() {
    const year = props.date.getFullYear();
    const month = props.date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    // 현재 날짜를 가져와서 오늘인지 확인
    const today = new Date();
    //오늘이 맞는지 확인
    const isThisToday = today.getFullYear() === year && today.getMonth() === month;

    //달력 저장 배열
    const calendar = [];
    //날짜 카운터
    let dayCounter = 1;

    //날짜를 배열에 저장해주는 이중 포문
    for (let i = 0; i < 6; i++) {
      const week = [];

      // 7일(열)까지 반복
      for (let j = 0; j < 7; j++) {
        // 첫 주이면서 현재 날짜 이전이거나 해당 월의 마지막 날을 넘어갔으면 null 추가
        if ((i === 0 && j < firstDayOfMonth) || dayCounter > daysInMonth) {
          week.push(null);
        } else {
          // 아니면 날짜 추가
          week.push(dayCounter);
          dayCounter++;
        }
      }

      // 주(행) 추가
      calendar.push(week);
    }

    return (
      <>
        {
          calendar.map((e) => {
            return <div style={{
              width:"calc(100vw - 450px)",
              display: "flex",
              textAlign: "center",
              alignItems:"center",
              justifyContent:"space-between",
              padding: "10px"

            }}>
              {
                e.map((e) => {
                    return <DateCell key={e} isToday={isThisToday && today.getDate() === e}>{e}</DateCell>
                  }
                )
              }
            </div>
            }
          )
        }
      </>
    )
  }
  //이전 달로 이동하는 함수
  function moveToPreviousMonth() {
    const currentMonth = props.date.getMonth();
    const newMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const newYear = currentMonth === 0 ? props.date.getFullYear() - 1 : props.date.getFullYear();

    props.setDate(new Date(newYear, newMonth));
  }
  // 다음 달로 이동하는 함수
  function moveToNextMonth() {
    const currentMonth = props.date.getMonth();
    const newMonth = currentMonth === 11 ? 0 : currentMonth + 1;
    const newYear = currentMonth === 11 ? props.date.getFullYear() + 1 : props.date.getFullYear();

    props.setDate(new Date(newYear, newMonth));
  }


  return(
    <CalendarContanier style={{
      width: props.menu ? "calc(100vw - 410px)" : "100vw",
      display:"flex",
      alignItems:"center",
      justifyContent:"space-between",
      textAlign:"center"
    }}>
      <div style={{
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
        gap: "20px"
      }}>
        <SelectDate><IoChevronBackSharp onClick={moveToPreviousMonth} size={24} color={"#828587"}/>{props.date.getMonth() + 1}월 달력<IoChevronForwardSharp onClick={moveToNextMonth} size={24} color={"#828587"}/></SelectDate>
      </div>
      <div style={{
        width:"calc(100vw - 450px)",
        display:"flex",
        alignItems:"center",
        justifyContent: "space-between"
      }}>
      <DayOfWeek>일</DayOfWeek>
      <DayOfWeek>월</DayOfWeek>
      <DayOfWeek>화</DayOfWeek>
      <DayOfWeek>수</DayOfWeek>
      <DayOfWeek>목</DayOfWeek>
      <DayOfWeek>금</DayOfWeek>
      <DayOfWeek>토</DayOfWeek>
      </div>
      <GenerateCalendar/>
    </CalendarContanier>
  )
}

export default Calendar

