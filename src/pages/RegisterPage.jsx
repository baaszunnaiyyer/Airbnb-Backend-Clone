import { Link } from "react-router-dom";

export default function RegisterPage(){
    return(
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-32">
            <h1 className="text-4xl text-center mb-4">Register</h1>
            <form className="max-w-md mx-auto">
                <input type="text" placeholder="Your Name" className="input-style"/>
                <input type="email" placeholder="Your@email.com" className="input-style"/>
                <input type="Password" placeholder="password" className="input-style"/>
                <button className="primary">Register</button>
                <div className="text-center py-2 text-gray-500">
                    Already a Member?
                    <Link to={'/Login'} className="underline text-black">Login</Link>
                </div>
            </form>

            </div>
        </div>
    );
}