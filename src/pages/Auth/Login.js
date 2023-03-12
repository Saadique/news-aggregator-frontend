import React, { useState, useCallback, useEffect } from 'react';
import AuthLayout from '../../layouts/Auth';
import { useAuth } from '../../hooks/useAuth';
import LoginForm from '../../components/auth/LoginForm';
import { useNavigate } from 'react-router-dom';


function Login() {

    const { login } = useAuth();
   

    const [error, setError] = useState(undefined);

    const navigate = useNavigate()

   
    const onSubmit = async (data) => {
        setError(undefined);

        
        try {
            await login(data.email, data.password);
            navigate('/home');
        }
        catch (error) {
            setError('Invalid username or password, please try again');

        };
    }

    return (
        <AuthLayout content={
            <div className="max-w-md w-full space-y-8 p-10 bg-white shadow-xl rounded flex flex-col justify-center items-center min-h-60">
                {

                    <>
                        <div className="flex flex-col justify-center items-center">
                            <h2 className="text-center text-3xl font-extrabold text-gray-600">
                                Sign in to your account
                            </h2>
                        </div>
                        <LoginForm
                            onSubmit={onSubmit}

                            errorMessage={error}
                        />

                    </>
                }


            </div>
        } />
    );
}

export default Login;