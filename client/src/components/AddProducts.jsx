import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom';
function AddProducts() {
  const navigate= useNavigate()
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl mb-4">Add Product</h1>
      <Formik
        initialValues={{
          name: '',
          price: '',
          category: '',
          image: '',
          review: '',
          description: '',
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            fetch('http://127.0.0.1:5555/products', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(values),
            })
              .then(res => res.json())
              .then(data => {
                console.log('Product added:', data);
                toast.success("Product added successfully", {position:'top-center'})
              })
              .catch(error => {
                console.error('Error adding product:', error);
                toast.error("Error adding product", {position:'top-center'})
              })
              .finally(() => {
                setSubmitting(false);
              });
          }, 500); // Example timeout, adjust as needed
        }}
      >
        {({ isSubmitting }) => (
          <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name:
              </label>
              <Field className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="name" />
              <ErrorMessage name="name" component="div" className="text-red-500 text-xs italic" />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                Price:
              </label>
              <Field className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" name="price" />
              <ErrorMessage name="price" component="div" className="text-red-500 text-xs italic" />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                Category:
              </label>
              <Field className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="category" />
              <ErrorMessage name="category" component="div" className="text-red-500 text-xs italic" />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                Image URL:
              </label>
              <Field className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="image" />
              <ErrorMessage name="image" component="div" className="text-red-500 text-xs italic" />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="review">
                Review:
              </label>
              <Field className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="review" />
              <ErrorMessage name="review" component="div" className="text-red-500 text-xs italic" />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                Description:
              </label>
              <Field className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" as="textarea" name="description" />
              <ErrorMessage name="description" component="div" className="text-red-500 text-xs italic" />
            </div>

            <div className="flex items-center justify-between">
              <button  className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddProducts;
