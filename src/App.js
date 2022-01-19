import './App.css'
import Header from "./Contents/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import TodoList from './Contents/TodoList';

function App() {
  return (
    <div className="App container">
      <Header></Header>
      <TodoList/>
    </div>
    
  )
}

export default App;
