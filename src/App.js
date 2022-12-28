import './App.css';
import { createBrowserRouter, RouterProvider, useLoaderData } from 'react-router-dom';
import Main from './component/Layout/Main';
import Home from './component/Home/Home/Home';
import Media from './component/Media/Media';
import Message from './component/Message/Message';
import About from './component/About/About';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import { Toaster } from 'react-hot-toast';
import Loader from './component/Loader/Loader';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children : [
        {
          path : '/',
          element : <Home></Home>
        },
        {
          path : '/media',
          element : <Media></Media>
        },
        {
          path : '/message',
          element : <Message></Message>
        },
        {
          path : '/about',
          element : <About></About>
        },
        {
          path : '/login',
          element : <Login></Login>
        },
        {
          path : '/register',
          element : <Register></Register>
        },
      ] 
    }
  ])
  return (
    <div className="App">
      <RouterProvider fallbackElement={<Loader></Loader>} router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
