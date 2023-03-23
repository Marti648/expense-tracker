import { useState } from 'react';
import ExpenseItem from "./ExpenseItem"
import ExpensesFilter from './ExpensesFilter';
import Chart from './Chart';

const Expenses = (props) => {

    const [year, setYear] = useState('2023');

    const selectYear = (year) => {
        setYear(year);
    }

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === year;
    })

    let expensesContent = <p className='no-expenses'>No expenses found.</p>
    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((expense) => {
            return <ExpenseItem
                key={expense.id}  //key prop is not used by us, but by react
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        })
    }


    return <div className='expenses'>
        <ExpensesFilter selectYear={selectYear} selectedYear={year} />
        <Chart expenses={filteredExpenses} />
        {expensesContent}

    </div>
}

export default Expenses;