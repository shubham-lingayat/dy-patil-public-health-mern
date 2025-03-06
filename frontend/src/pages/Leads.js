import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LeadsPage = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/getallUsers`);
                setUsers(response.data);
            } catch (err) {
                setError('Failed to fetch users');
                console.error(err);
            }
        };

        fetchUsers();
    }, []);

    if (error) {
        return <div className="text-red-500 text-center mt-5">{error}</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold text-center mb-6">All Leads</h1>
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border">Name</th>
                        <th className="py-2 px-4 border">Phone</th>
                        <th className="py-2 px-4 border">Email</th>
                        <th className="py-2 px-4 border">Level</th>
                        <th className="py-2 px-4 border">Program</th>
                        <th className="py-2 px-4 border">State</th>
                        <th className="py-2 px-4 border">City</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user._id}>
                            <td className="py-2 px-4 border">{user.name}</td>
                            <td className="py-2 px-4 border">{user.phone}</td>
                            <td className="py-2 px-4 border">{user.email}</td>
                            <td className="py-2 px-4 border">{user.level}</td>
                            <td className="py-2 px-4 border">{user.programs}</td>
                            <td className="py-2 px-4 border">{user.state}</td>
                            <td className="py-2 px-4 border">{user.city}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default LeadsPage;
