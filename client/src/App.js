import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
/* import CreateRecipes from './pages/CreateRecipes' */
/* import CreateRecipes2 from './pages/CreateRecipes2' */
import CreateRecipesForm from './pages/CreateRecipesForm'
import SavedRecipes from './pages/Saved_recipes'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/create_recipes" element = {<CreateRecipesForm/>}/>
          <Route path="/saved_recipes" element = {<SavedRecipes/>}/>
          <Route path="/login" element = {<Login/>}/>
          <Route path="/register" element = {<Register/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
