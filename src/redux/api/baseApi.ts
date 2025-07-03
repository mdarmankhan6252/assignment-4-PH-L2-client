import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const baseApi = createApi({
   reducerPath: 'baseApi',
   baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
   endpoints: (builder) => ({
      getBooks: builder.query({
         query: () => "/books"
      }),
      createBook: builder.mutation({
         query: (bookData) => ({
            url: '/books',
            method: "POST",
            body: bookData
         })
      }),
      deleteBook: builder.mutation({
         query: (id: string) => ({
            url: `/books/${id}`,
            method: 'DELETE'
         })
      }),
      updateBook: builder.mutation({
         query: ({ id, data }) => ({
            url: `/books/${id}`,
            method: "PUT",
            body: data
         })
      }),
      getBorrowSummary: builder.query({
         query: () => "/borrow"
      }),
      createBorrow: builder.mutation({
         query: (borrowData) => ({
            url: '/borrow',
            method: "POST",
            body: borrowData
         })
      })
   })
})

export const { useGetBooksQuery, useCreateBookMutation, useDeleteBookMutation, useUpdateBookMutation, useCreateBorrowMutation, useGetBorrowSummaryQuery } = baseApi;