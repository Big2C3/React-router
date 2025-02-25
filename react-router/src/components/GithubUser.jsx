import { useEffect, useState } from "react";

export default function GithubUser({ username }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then((res) => res.json())
            .then((data) => setUser(data));
    }, [username]);

    if (!user) return <p>Loading...</p>;

    return (
        <div>
            <h2>{user.login}</h2>
            <img src={user.avatar_url} alt={user.login} width={100} />
            <p>Followers: {user.followers}</p>
            <p>Following: {user.following}</p>
        </div>
    );
}