import App from '@/App'
import ErrorPage from '@/components/utility/ErrorPage'
import AddBook from '@/pages/books/AddBook'
import AllBooks from '@/pages/books/AllBooks'
import BorrowSummary from '@/pages/books/BorrowSummary'
import ManageBooks from '@/pages/books/ManageBooks'
import Home from '@/pages/home/Home'
import { createBrowserRouter } from 'react-router'

export const router = createBrowserRouter([
   {
      path: '/',
      Component: App,
      errorElement: <ErrorPage />,
      children: [
         { index: true, Component: Home },
         { path: '/all-books', Component: AllBooks },
         { path: '/add-book', Component: AddBook },
         { path: '/borrow-summary', Component: BorrowSummary },
         { path: '/manage-books', Component: ManageBooks }
      ]
   }
])