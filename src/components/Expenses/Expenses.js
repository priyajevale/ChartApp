// import React,{useState} from 'react';
// import ExpenseItem from './ExpenseItem';
// import Card from '../UI/Card.js';
// import './Expense.css';
// import ExpensesFilter from './ExpensesFilter.js';

// function Expenses(props){
//   const [expenses ,setTitle] = useState(props.items);
//   const clickHandler = (id) => {
//     const updatedtitle=expenses.filter(expense => expense.id !== id);
//     setTitle(updatedtitle);
//   return (
    
//     <Card className="expenses">
//     {props.items.map((expense) => (
//       <ExpenseItem
//         key={expense.id}
//         id={expense.id}
//         title={expense.title}
//         amount={expense.amount}
//         date={expense.date}
//         onDelete={clickHandler}
//       />
//     ))}
//   </Card>
//   );
// }

//         }
// export default Expenses;

import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card.js';
import './Expense.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('All');

  const filteredChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
const filteredExpenses =props.items.filter(expense => {
  return expense.date.getFullYear().toString() ===filteredYear;
});

 

  return (
    <div>
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filteredChangeHandler} />
      
    <ExpensesList items={filteredExpenses}/>
      
      (</Card>)
    
  </div>
);
  };
  
  


export default Expenses;