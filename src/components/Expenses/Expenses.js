import React, { useState } from 'react';

import Card from './../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

import './Expenses.css';

const Expenses = props => {
  const [filterdYear, setFilterYear] = useState('2022');

  const filteredExpenses = props.items.filter(
    expense => expense.date.getFullYear().toString() === filterdYear
  );

  const filterChangeHandler = selectedYear => {
    setFilterYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterdYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart dataPoints={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
