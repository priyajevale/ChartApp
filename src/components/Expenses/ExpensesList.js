import React from 'react';
import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

function ExpensesList(props) {
  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses</h2>;
  }

  if (props.items.length === 1) {
    return (
      <div>
        <ul className='expenses-list'>
          {props.items.map((expense) => (
            <ExpenseItem
              key={expense.id}
              id={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
        </ul>
        <p className='expenses-list__message'><b>Only a single expense here. Please add more...</b></p>
      </div>
    );
  }

  return (
    <ul className='expenses-list'>
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          id={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;