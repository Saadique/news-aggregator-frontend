import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import ErrorMessage from '../ErrorMessage';
import { Puff } from 'svg-loaders-react'

let registerFormSchema = yup.object().shape({
  name: yup.string().required('Your full name is required'),
  email: yup.string().required('Your email address is required'),
  password: yup.string().required('Password is required'),
  password_confirmation: yup.string().required()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
});

const RegisterForm = ({
  onSubmit, errorMessage = undefined, loading = false, defaultEmail = null }) => {

  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(registerFormSchema)
  });

  useEffect(() => {
    if (defaultEmail) {
      setValue('email', defaultEmail);
    }
  }, [defaultEmail]);

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" name="remember" value="true" />
      <div className="rounded-md shadow-sm -space-y-px flex flex-col gap-2">
        <div>
          <label htmlFor="name" className="sr-only">Full Name</label>
          <input {...register("name", { required: true })} type="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Full Name" />
          {
            errors.name &&
            <ErrorMessage message={errors.name.message} />
          }
        </div>
        <div>
          <label htmlFor="email-address" className="sr-only">Email address</label>
          <input {...register("email", { required: true })} type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
          {
            errors.email &&
            <ErrorMessage message={errors.email.message} />
          }
        </div>
        <div>
          <label htmlFor="password" className="sr-only">Password</label>
          <input {...register("password", { required: true })} type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
          {
            errors.password &&
            <ErrorMessage message={errors.password.message} />
          }
        </div>
        <div>
          <label htmlFor="password_confirmation" className="sr-only">Password confirmation</label>
          <input {...register("password_confirmation", { required: true })} type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Confirm your password" />
          {
            errors.password_confirmation &&
            <ErrorMessage message={errors.password_confirmation.message} />
          }
        </div>
      </div>

      <div className='flex flex-col justify-center items-center gap-2'>
        {
          errorMessage &&
          <ErrorMessage message={errorMessage} />
        }
        <button type="submit" disabled={loading} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            {
              loading &&
              <Puff stroke="#98ff98" strokeSize='5' className='w-7 h-7' />
              ||
              <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
            }
          </span>
          Sign up
        </button>
      </div>

      <div className="flex items-center justify-center">
        <div className="text-sm">
          <a className="cursor-pointer font-medium text-indigo-600 hover:text-indigo-500">
            Already have an account?
          </a>
        </div>
      </div>
    </form>
  )
}

export default RegisterForm;