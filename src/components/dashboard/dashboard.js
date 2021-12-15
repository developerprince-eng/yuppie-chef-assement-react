import React from 'react';
import NavbarDashboard from '../navbarDashboard/navbar';
import Login from '../login/login';
import  useToken  from '../useToken';

const Dashboard = () => {
    const { token, setToken } = useToken();

    if(!token) {
      return <Login setToken={setToken} />
    }

    return (
        <div>
            <NavbarDashboard/>
            <div>
                <h1>Dashboard</h1>
            </div>
        </div>
    )
}

export default Dashboard
