import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function GithubUserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://api.github.com/users")
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, []);

    return (
        <div>
            <h2>GitHub Users</h2>
                <Outlet />
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <Link to={`/users/${user.login}`}>{user.login}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}