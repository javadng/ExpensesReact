import React from 'react';
import Card from './../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = props => {
  return (
    <li>
      <Card className="expense-item">
        <div className="expense-item__description">
          <h2>title</h2>
          <div className="expense-item__price">$</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
