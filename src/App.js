import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage'
import LoginPage from './pages/LoginPage/LoginPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<HomePage/>}/>
          <Route path="/login"  element={<LoginPage/>}/>
          <Route path="/profile"  element={<ProfilePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
