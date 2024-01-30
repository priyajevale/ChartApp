import React from 'react';

import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

function ExpensesList(props) {
  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'> No expenses found</h2>;
  }

  if (props.items.length === 1) {
    return (
      <div className='expenses-list'>
        <ExpenseItem
          key={props.items[0].id}
          id={props.items[0].id}
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <p className='expenses-list__message'>Only a single expense here. Please add more...</p>
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