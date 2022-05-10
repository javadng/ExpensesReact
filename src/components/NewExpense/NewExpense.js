import React from 'react';

import ExpenseForm from './ExpensrForm';
import './NewExpense.css';

const NewExpense = props => {
  const onSubmitDateHandler = formDate => {
    // console.log(formDate);
    props.onReciveDate(formDate);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSubmitDate={onSubmitDateHandler} />
    </div>
  );
};

export default NewExpense;
