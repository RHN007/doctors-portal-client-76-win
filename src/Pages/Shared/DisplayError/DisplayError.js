import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const DisplayError = () => {
    const {logOut } = useContext(AuthContext);
    const error = useRouteError()
    const navigate= useNavigate()


    const handleLogOut = () => {
        logOut()
            .then(() => { 
                navigate('/login')
            })
            .catch(err => console.log(err));
    }
    return (
        <div>
            <p className='text-red-500'> SOmething going wrong </p>
            <p className='text-red-400'><i>{error.statusText || error.message}</i></p>
            <h4 className="text-3xl">Please <button onClick={handleLogOut}>SignOut</button> and log Back In</h4>
        </div>
    );
};

export default DisplayError;