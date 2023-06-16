import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";
import "./App.css";
import ExpensesPopup from "./components/NewExpenses/ExpensesPopup";

function App() {
  //  return React.createElement(
  //    "div",
  //    {},
  //    React.createElement("h2", {}, "Let's get started!"),
  //    React.createElement(Expenses, { items: expenses })
  //  );

  return (
    <div>
      <ExpensesPopup></ExpensesPopup>
    </div>
  );
}

export default App;
