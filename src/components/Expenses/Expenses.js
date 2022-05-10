import React, { useState } from 'react';

import Card from './../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

import './Expenses.css';

const Expenses = props => {
  return (
    <Card className="expenses">
      <ExpensesList items={props.items} />
    </Card>
  );
};

export default Expenses;
