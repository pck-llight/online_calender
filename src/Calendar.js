
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


const DateCell = styled.div`
      width: 50px;
      height: 50px;
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
    const today = new Date();


    const calendar = [];
    let dayCounter = 1;


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
              display: "flex",
              textAlign: "center",
            }}>
              {
                e.map((e) => {
                    return <DateCell>{e}</DateCell>
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


  return(
    <CalendarContanier style={{
      width: props.menu ? "calc(100vw - 410px)" : "100vh",
      display:"flex",
      alignItems:"center",
      justifyContent:"space-between",
      textAlign:"center"
    }}>
      <div style={{
        display:"flex",
        gap: "20px"
      }}>
        <SelectDate><IoChevronBackSharp size={24} color={"#828587"}/>{selectedMonth.getMonth() + 1}월 달력<IoChevronForwardSharp size={24} color={"#828587"}/></SelectDate>
      </div>
      <GenerateCalendar/>
    </CalendarContanier>
  )
}

export default Calendar

