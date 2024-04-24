import { useState } from "react";

function Register() {
    const [data, setData] = useState({ email: "", password: "", username: "" })

    const handleSubmit = () => {
        fetch("http://localhost:3000/user/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
            .catch(err => console.log(err))

        setData({ email: "", password: "", username: "" })
    }

    return <>
        <h1>Signup</h1>
        <input
            type="text"
            value={data.username}
            onChange={(e) => setData({ ...data, username: e.target.value })}
            placeholder="username"
        />
        <br />
        <input
            type="text"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            placeholder="email"
        />
        <br />
        <input
            type="password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            placeholder="password"
        />
        <br />
        <button onClick={handleSubmit}>Signup</button>
    </>
}
export { Register }