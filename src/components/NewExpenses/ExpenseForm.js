
import React ,{ useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm =(props) => {
  const[enteredTitle,setNewTitle] = useState('');
  const[enteredAmount ,setNewAmount] = useState('');
  const[enteredDate,setNewDate] = useState('');
    const handleTitleChange = (event) => {
      setNewTitle( event.target.value);
      };
    
      const handleAmountChange = (event) => {
        setNewAmount(event.target.value);
      };
    
      const handleDateChange = (event) => {
        setNewDate( event.target.value);
      };

     const submitHandler = (event)=>{
      event.preventDefault();
   
     const expenseData ={
      title : enteredTitle,
      amount:enteredAmount,
      date: new Date(enteredDate),
     };
     props.onSaveExpenseData(expenseData);

     console.log(expenseData);
     setNewTitle('');
     setNewAmount('');
     setNewAmount('');
    };
    return ( 
    <form onSubmit={ submitHandler }>
    <div className="new-expense__controls">
    <div className="new-expense__control label">
<label>title</label>
<input type ="text"   value={enteredTitle} onChange={handleTitleChange}/>
</div>
<div className="new-expense__control input">
<label>amount</label>
<input type ="number" min="0.01" step="0.01"   value={enteredAmount} onChange={handleAmountChange}/>
</div>
<div className="new-expense__control input">
<label>date</label>
<input type ="date"  value={enteredDate} onChange={handleDateChange}/>

</div>

</div>

<div className="new-expense__actions">
    <button type="submit" >Add expense</button>
</div>
</form>



    );
}
export default ExpenseForm;