import './App.css';
import { createBrowserRouter, RouterProvider, useLoaderData } from 'react-router-dom';
import Main from './component/Layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children : [
        {
          path : '/',
        }
      ] 
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
