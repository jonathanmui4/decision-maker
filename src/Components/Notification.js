import React, { useEffect } from 'react';

function Notification({ type, message, removeAlert }) {

    useEffect(() => {
        const timeout = setTimeout(() => {
            removeAlert(); //Basically setAlert with default values
        }, 2000);
        return () => clearTimeout(timeout);
    }, []);

    if (type === 'green') {
        return (
            <div className="items-center text-center text-xl font-semibold justify-between mt-10 py-5 h-20 w-full text-slate-200 border-solid border-4 border-lime-900 bg-lime-600 rounded-lg">
                {message}
            </div>
        );
    }
    return (
        <div className="items-center text-center text-xl font-semibold justify-between mt-10 py-5 h-20 w-full text-slate-200 border-solid border-4 border-red-900 bg-red-600 rounded-lg">
            {message}
        </div>
    );
}

export default Notification;