import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Fav from './component/Fav/Fav';
import Booklist from './component/Booklist/Booklist';
import { createRoot } from "react-dom/client";
import BookDetails from './component/BookDetails/BookDetails';


const router = createBrowserRouter([
  {
    path: "/Books",
    element: <App/>,
    children:[
      {
        path: "/Books/favorites",
        element:<Fav/>,
      },
      {
        path: "/Books/Bookslist",
        element:<Booklist/>,
      },
      {
        path: 'Details/:id',
        element: <BookDetails />,
      },
    
      
    ]
  },
 
  
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <RouterProvider router={router}
  /></React.StrictMode>
);


reportWebVitals();
