import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import NotFound from './components/NotFound';
import MainPage from './features/photo/pages/MainPage';
import AddEditPage from './features/photo/pages/AddEditPage';
import LoginPage from './features/Login/LoginPage';
function App() {
  let isLoggedIn = Boolean(localStorage.getItem('access_token'))
  // const Photo = React.lazy(() => import('./features/photo/index'));
  return (
    <div className="App">
      {/* <Suspense fallback={<div>...Loading</div>}> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/user/photos' />} />

          <Route path='/login' element={<LoginPage />} />

          <Route path='/user/photos' element={isLoggedIn ? <MainPage /> : <Navigate to='/login' />} />

          <Route path='/user/photos/add' element={isLoggedIn ? <AddEditPage /> : <Navigate to='/login' />} />

          <Route path='/user/photos/:photoId' element={isLoggedIn ? <AddEditPage /> : <Navigate to='/login' />} />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      {/* </Suspense> */}
    </div>
  );
}

export default App;
