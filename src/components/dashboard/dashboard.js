import React from 'react'
import Navbar from './components/navbarDashboard/navbar';
import Login from './components/login/login';
import  useToken  from './components/useToken';

const Dashboard = () => {
    const { token, setToken } = useToken();

    if(!token) {
      return <Login setToken={setToken} />
    }

    return (
        <div>
            <Navbar/>
            <div>
                <h1>Dashboard</h1>
            </div>
        </div>
    )
}

export default Dashboard
