import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import '../style/StaffSignupLogin.css';




const StaffSignupLogin = () => {
    const [isSignup, setSignup] = useState(true);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const toggleForm = () => {
        setSignup(!isSignup);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
    
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword')?.value;

    let data = JSON.stringify({
        "email": email,
        "username": username,
        "password": password,
        "confirmpassword": confirmPassword
      });
      
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: '[REPLACE YOUR URL HERE]/api/register',
        headers: { 
          'x_api_key': 'test', 
          'Content-Type': 'application/json'
        },
        data : data
      };
      

      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
      
  };
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    };

    if (isLoading) {
        return <Loader />;
    }


    return (
        <div className="auth-container">
            <div className={`auth-form staff-form ${isSignup ? 'signup' : 'login'}`}>
                <h2>{isSignup ? 'Staff Signup' : 'Staff Login'}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">
                            Username
                        </label>
                        <input type="text" className="form-control" id="username" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input type="text" className="form-control" id="email" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input type="password" className="form-control" id="password" />
                    </div>

                    {isSignup && (
                        <div className="mb-3">
                            <label htmlFor="confirmPassword" className="form-label">
                                Confirm Password
                            </label>
                            <input type="password" className="form-control" id="confirmPassword" />
                        </div>
                    )}

                    <button type="submit" className="btn btn-primary">
                        {isSignup ? 'Signup' : 'Login'}
                    </button>
                </form>

                <p>
                    {isSignup ? 'Already have an account?' : 'Don’t have an account?'}{' '}
                    <Link to="#" onClick={toggleForm}>{isSignup ? 'Login' : 'Signup'}</Link>
                </p>

            </div>

        </div>
    );
};

export default StaffSignupLogin;
