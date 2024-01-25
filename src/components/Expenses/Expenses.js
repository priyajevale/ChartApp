import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card.js';
import './Expense.css';


  const Expenses = (props) => {
    const [expenses, setExpenses] = useState(props.items);
  
    const handleDeleteExpense = (id) => {
      // Filter out the expense with the specified ID
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
            onDelete={handleDeleteExpense}  // This line is using handleDeleteExpense
          />
        ))}
      </Card>
  );
}

export default Expenses;