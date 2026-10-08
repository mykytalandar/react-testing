import { Mail, UserRound } from "lucide-react";
import { useEffect, useState } from "react";
import { User } from "../../types/User";
import axios from "axios";
import { Loader } from '../Loader/Loader';

export const Users: React.FC = () => {
    const [users, setUsers] = useState<User[] | []>([]);
    const [isLoading, setIsLoading] = useState(false);

    const loadUsers = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setUsers(response.data);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        loadUsers();
    }, []);

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <div className='users-list' data-testid='users-list-elem'>
                    <h3>Users:</h3>
                    <ul className='list'>
                        {users.map((user) => (
                            <li key={user.id} className='item' data-testid='user-item'>
                                <div className='container'>
                                    <UserRound size={20} />
                                    <span className='text'>{user.username}</span>
                                </div>
                                <div className='container'>
                                    <Mail size={20} />
                                    <span className='text'>{user.email}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>

    );
}