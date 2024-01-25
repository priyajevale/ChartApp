import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const handleDeleteExpense = () => {
    // Call the parent component's onDelete function with the expense ID
    props.onDelete(props.id);
  };

  return (
    <Card className="expense-item" id={`expense-item-${props.id}`}>
      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={handleDeleteExpense}>Delete Expense</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;