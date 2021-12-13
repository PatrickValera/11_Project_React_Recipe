import './App.css';
import FoodList from './screens/FoodList'
import FoodRecipe from './screens/FoodRecipe'

import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/' element={<FoodList/>}/>
        <Route path='/Recipe' element={<FoodRecipe/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
