import './App.css';
import { useState } from 'react';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense';


function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2023, 5, 12),
    },
  ];

  const [expensesList, setExpensesList] = useState(expenses)

  const newExpenseHandler = (newExpense) => {
    setExpensesList(prevList => {
      return [...prevList, newExpense];
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={newExpenseHandler} />
      <Expenses items={expensesList} />
    </div>

  );
}

export default App;
