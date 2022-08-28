import React from "react";



const SignUp = () => {

    return (
        <form action="/register" method="POST">
            <h1>Sign Up</h1>
            <input type="text" name="name" id="name" placeholder="Name" />
            <input type="text" name="email" id="email" placeholder="email" />
            <input type="text" name="username" id="username" placeholder="username" />
            <input type="text" name="password" id="password" placeholder="password" />
            <button type="submit">Submit</button>


        </form>
    );
}

export default SignUp;