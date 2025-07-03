import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Toaster } from 'react-hot-toast';
import {
  RouterProvider
} from 'react-router'
import { router } from './router/Router';
import { store } from './redux/app/store';


createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
    <Toaster />
  </Provider>,
)
