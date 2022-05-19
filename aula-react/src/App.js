import './App.css';
import TopNavBar from './components/TopNavBar';
import ResultList from './components/ResultList';
import FloatingCard from './components/FloatingCard';

function App() {
  return (
    <div>
      <header >
        <TopNavBar/>
        <div style = {{display:'flex'}}>
          <ResultList/>
          <FloatingCard/>
        </div>
      </header>
    </div>
  );
}

export default App;
