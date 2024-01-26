import React from 'react';
import './ExpenseForm.css';
const ExpenseForm =() => {
    const handleTitleChange = (event) => {
        console.log('Title:', event.target.value);
      };
    
      const handleAmountChange = (event) => {
        console.log('Amount:', event.target.value);
      };
    
      const handleDateChange = (event) => {
        console.log('Date:', event.target.value);
      };
    
    return ( 
    <form>
    <div className="new-expense__controls">
    <div className="new-expense__control label">
<label>title</label>
<input type ="text"  onChange={handleTitleChange}/>
</div>
<div className="new-expense__control input">
<label>amount</label>
<input type ="number" min="0.01" step="0.01"  onChange={handleAmountChange}/>
</div>
<div className="new-expense__control input">
<label>date</label>
<input type ="date"  onChange={handleDateChange}/>

</div>

</div>

<div className="new-expense__actions">
    <button type="submit" >Add expense</button>
</div>
</form>



    );
}
export default ExpenseForm;