import React, {useState, useEffect} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

let DUMMY_EXPENSE = [
  
 
];  
 const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

  useEffect(()=>{
    fetch('https://946a01d8-ad1e-4680-8511-ec6de3f85bd2.mock.pstmn.io/')
  .then(
    response => {
      return response.json();
    }
  ).then(
    data => {
      // console.log(data);
      setExpenses(data);
    }
  );
  }, []);

  const addExpenseHandler = (expense) => {
    const updatedExpense = [expense, ...expenses];
    setExpenses(updatedExpense)

  }
  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
