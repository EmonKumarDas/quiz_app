import logo from './logo.svg';
import './App.css';
import { router } from './components/route';
import { RouterProvider } from 'react-router-dom';
function App() {

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
