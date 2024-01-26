import React,{useState} from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card.js';
import './Expense.css';

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
function Expenses(props) {
  const [expenses, setExpenses] = useState(props.items);

  const deleteExpenseHandler = (id) => {
    const updatedExpenses = expenses.filter(expense => expense.id !== id);
    setExpenses(updatedExpenses);
  };

  return (
    <Card className="expenses">
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          id={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          onDelete={deleteExpenseHandler}
        />
      ))}
    </Card>
  );
}

export default Expenses;