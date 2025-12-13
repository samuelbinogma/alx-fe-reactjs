import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    username: Yup.string()
        .required('Username is required')
        .min(3, 'Username must be at least 3 characters'),
    email: Yup.string()
        .email('Please enter a valid email')
        .required('Email is required'),
    password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters'),
});

const FormikForm = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
                    Register with Formik
                </h2>

                <Formik
                    initialValues={{
                        username: '',
                        email: '',
                        password: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        // Simulate API call
                        setTimeout(() => {
                            alert('Registration successful!');
                            console.log('Form values:', values);
                            resetForm();
                            setSubmitting(false);
                        }, 1000);
                    }}
                >
                    {({ isSubmitting, errors, touched }) => (
                        <Form className="space-y-6">
                            {/* Username */}
                            <div>
                                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                                    Username
                                </label>
                                <Field
                                    name="username"
                                    type="text"
                                    placeholder="johndoe123"
                                    className={`w-full px-4 py-3 rounded-lg border ${
                                        errors.username && touched.username
                                        ? 'border-red-500'
                                        : 'border-gray-300'
                                    } focus:outline-none focus:ring-2 focus:ring-indigo-500 transition`}
                                />
                                <ErrorMessage
                                    name="username"
                                    component="p"
                                    className="mt-2 text-sm text-red-600"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Email
                                </label>
                                <Field
                                    name="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    className={`w-full px-4 py-3 rounded-lg border ${
                                        errors.email && touched.email
                                            ? 'border-red-500'
                                            : 'border-gray-300'
                                    } focus:outline-none focus:ring-2 focus:ring-indigo-500 transition`}
                                />
                                <ErrorMessage
                                    name="email"
                                    component="p"
                                    className="mt-2 text-sm text-red-600"
                                />
                            </div>

                            {/* Password */}
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                    Password
                                </label>
                                <Field
                                    name="password"
                                    type="password"
                                    placeholder="••••••••"
                                    className={`w-full px-4 py-3 rounded-lg border ${
                                        errors.password && touched.password
                                            ? 'border-red-500'
                                            : 'border-gray-300'
                                    } focus:outline-none focus:ring-2 focus:ring-indigo-500 transition`}
                                />
                                <ErrorMessage
                                    name="password"
                                    component="p"
                                    className="mt-2 text-sm text-red-600"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-all ${
                                isSubmitting
                                    ? 'bg-indigo-400 cursor-not-allowed'
                                    : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg'
                                }`}
                            >
                                {isSubmitting ? 'Creating Account...' : 'Register'}
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default FormikForm;