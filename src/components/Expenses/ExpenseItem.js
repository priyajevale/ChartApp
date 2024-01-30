//  import React,{ useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';



const ExpenseItem = (props) => {
  // const [NewTitle,setNewTitle]=useState("");
  // const [title,setTitle]=useState(props.title);
  // const clickHandler=()=>{
  //   setTitle(NewTitle);
  // }
  // const changeHandler=(event) =>{
  //   setNewTitle(event.target.value);

  // }

  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        {/* <input type="text" value={NewTitle}  onChange={ changeHandler  }/> */}
        {/* <button onClick={clickHandler}  >change title</button> */}
        
      </div>
    </Card>
    </li>
  );
};

export default ExpenseItem;