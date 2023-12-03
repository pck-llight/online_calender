import styled from "styled-components";

//달력
const CalendarContanier = styled.div`
  background-color: #FFF;
  //background-color: #353535;
  width: calc(100vw - 410px);
  height: calc(100vh - 200px);
  margin: 40px;
  border-radius: 16px;
`
//날짜 선택 폼
const SelectDateForm= styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  justify-content: center;
  margin-bottom: 20px;
`
  
function Calendar(){

  return(
    <CalendarContanier>
      <SelectDateForm>
        {/*<input type={"date"}/>*/}
        {/*<SelectDate />*/}
      </SelectDateForm>
    </CalendarContanier>
  );
}

export default Calendar