import React, { useContext } from "react";
import { globalContext } from "../Context/GlobalState";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions } = useContext(globalContext);
  // console.log(context);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
            <Transaction  key={transaction.id} transaction={transaction}/>
        ))}
        
      </ul>
    </>
  );
};

export default TransactionList;
