import React,{useState} from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card.js';
import './Expense.css';
import ExpensesFilter from './ExpensesFilter.js';

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


const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filteredChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filteredChangeHandler} />
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          id={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;