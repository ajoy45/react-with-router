
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Friends from './Components/Friends/Friends';
import NotFound from './Components/NotFound/NotFound';
import Header from './Components/Header/Header';
import FriendDetails from './Components/FriendDetails/FriendDetails';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='About' element={<About></About>}></Route>
        <Route path='Friends' element={<Friends></Friends>}></Route>
        <Route path='/friend/:friendid'element={<FriendDetails></FriendDetails>}></Route>
        <Route path='*'element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
