// import logo from './logo.svg';
// import "./App.css";
// import ExpenseItem from './components/ExpenseItem'
import NewExpense from './components/NewExpenses/NewExpense';
import React from 'react';
import Expenses from './components/Expenses/Expenses';

const App =() => {
  const expenses = [
    {
      id:'e1' ,title: 'toilet Paper', amount: 94.12, date: new Date(2021, 6, 28) ,
    },
    { 
      id:'e2', title: 'new tv', amount: 29.32, date: new Date(2022, 5, 3),
    },
    { 
      id:'e3' ,title: 'car insurance', amount: 67.12, date: new Date(2019, 2, 28),
    },
    {
       id:'e4', title: 'New Desk', amount: 56.5, date: new Date(2023, 2, 28), 
      },
  ];
  // return React.createElement('div', {},React.createElement('h2',{},"lets get started"),React.createElement(Expenses,{items:expenses}) 
  // );
  return (
    <div>
      <NewExpense/>
      <Expenses items={expenses}/>
      </div>
      
  );
}

export default App;
