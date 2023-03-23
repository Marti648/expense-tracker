import { useState } from 'react';

const NewExpense = (props) => {

    // const [formInput, setFormInput] = useState({
    //     name: '',
    //     amount: '',
    //     date: '',
    // })

    // const nameChangeHandler = (event) => {
    //     setFormInput((prevState) => {
    //         return { ...prevState, name: event.target.value };
    //     });
    // }

    // const amountChangeHandler = (event) => {
    //     setFormInput((prevState) => {
    //         return { ...prevState, amount: event.target.value };
    //     });
    // }

    // const dateChangeHandler = (event) => {
    //     setFormInput((prevState) => {
    //         return { ...prevState, date: event.target.value }
    //     })
    // }

    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: name,
            amount: +amount,
            date: new Date(date),
            id: Math.random(),
        }

        setName('');
        setAmount('');
        setDate('');

        props.onAddExpense(expenseData);
        toggleShowAddExpense();
    }

    const [showAddExpense, setShowAddExpense] = useState(false);

    const toggleShowAddExpense = () => {
        setShowAddExpense((prevVal) => {
            return !prevVal;
        })
    }

    return <div className='new-expense'>

        {!showAddExpense && <button className='new-expense__actions' onClick={toggleShowAddExpense}>Add Expense</button>}
        {showAddExpense && <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Name</label>
                    <input type='text' onChange={nameChangeHandler} value={name} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} value={amount} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2023-01-01' max='2025-01-01' onChange={dateChangeHandler} value={date} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' className='cancel' onClick={toggleShowAddExpense}>Cancel</button> 
                {/* set type to button so it doesnt submit form */}
                <button type='submit'>Add Expense</button>
            </div>
        </form>}
    </div>
}

export default NewExpense;