import './App.css';
import { GlobalProvider } from './Context/GlobalState';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';

function App() {
  return (
    <GlobalProvider >
      <Header></Header>
      <div className="container">
        <Balance></Balance>
        <IncomeExpenses></IncomeExpenses>
        <TransactionList></TransactionList>
        <AddTransaction></AddTransaction>

        <p className='aboutme'>~Anurag</p>
        
      </div>
    </GlobalProvider>

  );
}

export default App;
