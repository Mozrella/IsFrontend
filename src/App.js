import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import {isRouter} from './router/isRouter';

function App() {
  return (
   <>
    <RouterProvider router={isRouter}/>
   </>
  );
}

export default App;
