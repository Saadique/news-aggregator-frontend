import React, { useState } from 'react';
import AuthLayout from '../../layouts/Auth';
// import { useHistory } from 'react-router-dom';
import RegisterForm from '../../components/auth/RegisterForm';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

function Register() {
    const { register, login } = useAuth();

    const navigate = useNavigate();

    const [error, setError] = useState(undefined);
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {

        try {
            console.log(data);
            await register(data);
            await login(data.email, data.password);
            navigate('/home');
        }
        catch (error) {
            console.log(error);

            if (error.response?.data?.errors) {
                setError(Object.values(error.response.data.errors)[0][0]);
            }
        }
    };

    return (
        <AuthLayout content={
            <div className="max-w-md w-full space-y-8 p-10 bg-white shadow-xl rounded">
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-center text-3xl font-extrabold text-gray-600">
                        Register a new account
                    </h2>
                </div>
                <RegisterForm
                   
                    onSubmit={onSubmit}
                    errorMessage={error}
                    
                    
                />
            </div>
        } />
    );
}

export default Register;

