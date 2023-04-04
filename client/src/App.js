import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import CreateRecipes from './pages/CreateRecipes'
import SavedRecipes from './pages/Saved_recipes'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/auth" element = {<Auth/>}/>
          <Route path="/create_recipes" element = {<CreateRecipes/>}/>
          <Route path="/saved_recipes" element = {<SavedRecipes/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
