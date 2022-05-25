import './App.css';
import AddExpanses from './components/AddExpanses';
import Budget from './components/Budget';
import Expanse from './components/Expanse';
import ExpanseList from './components/ExpanseList';
import Remaining from './components/Remaining';
import SetBudget from './components/SetBudget';
import { AppProvider } from './Context/AppContext'

function App() {
  return (
    <AppProvider>
      <main className="App">
        <h1 className='app-title'>Budget Tracker</h1>
        <SetBudget/>
        <div className='app-dashboard'>
          <Budget/>
          <Remaining/>
          <Expanse/>
        </div> 
        <h1 className='app-title'>Expenses List</h1>
        <div className='app-list'>
            <ExpanseList/>
        </div>
        <h1 className='app-title'>Add Expanse</h1>
        <div className='app-addExpanses'>
          <AddExpanses/>
        </div>
      </main>
    </AppProvider>
  );
}

export default App;
