import './App.css'
import React, {useState} from 'react';
import NewExpense from './Components/NewExpense/NewExpense';

import Expenses from './Components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {id:'e1',title:'Car Expenses', amount:1120, date:new Date(2021,2,22)},
  {id:'e2',title:'Groceries', amount:520, date:new Date(2020,8,21)},
  {id:'e3',title:'House Rent', amount:2220, date:new Date(2022,1,20)},
  {id:'e4',title:'Bank Loan', amount:5000, date:new Date(2021,10,1)},

];

const App = () => {
  
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

const addExpenseHandler = expense =>{
  setExpenses((prevExpenses)=>{
    return [expense, ...prevExpenses];
  });
}

  return (
    <div className="App">
   
      
      <NewExpense onAddExpense ={addExpenseHandler} />
      <Expenses items= {expenses}/>

    </div>
  );
}

export default App;
