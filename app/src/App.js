import Header from './components/Header';
import './App.css';

function onSearchSubmit() {
    //TODO: create function to fetch data
}

function App() {
    return (
        <div className='App'>
            <Header searchFunction={onSearchSubmit}></Header>
        </div>
    );
}

export default App;
