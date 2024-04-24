import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

    const [data, setData] = useState({ email: "", password: "" })
    const Navigate = useNavigate();

    const handleSubmit = () => {
        fetch("http://localhost:3000/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                localStorage.setItem("tokend", data.token)
            })
            .catch(err => console.log(err))
        Navigate("/notes/")


        setData({ email: "", password: "" })
    }

    return <>
        <h1>Login</h1>
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
        <button onClick={handleSubmit}>Login</button>
    </>

}

export { Login };