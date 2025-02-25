import { Route, Routes } from "react-router-dom";
import ShowGithubUser from "./ShowGithubUser "


export default function GithubUsers() {
    return (
        <div>
            <Routes>
                <Route index element={
                    <p>Add a user and select it.</p>
                } />
                <Route path="users/:username" element={<ShowGithubUser />} />
            </Routes>
        </div>
    );
}