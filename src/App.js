import './App.css';
import Header from './Header';
import Collections from './Collections';

function App() {
  return (
    <div className="App">
      <div className="pt-20">
      <Header />
      <main className="p-6">
        <Collections />
      </main>
    </div>
    </div>
  );
}

export default App;
