import { Link } from "react-router-dom";

export default function LoginPage(){
    return(
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-32">
            <h1 className="text-4xl text-center mb-4">Login</h1>
            <form className="max-w-md mx-auto">
                <input type="email" placeholder="Your@email.com" className="input-style"/>
                <input type="Password" placeholder="password" className="input-style"/>
                <button className="primary">login</button>
                <div className="text-center py-2 text-gray-500">
                    Don't have an account yet?
                    <Link to={'/register'} className="underline text-black">Register</Link>
                </div>
            </form>

            </div>
        </div>
    );
}