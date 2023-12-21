import { useContext } from "react";
import imgBg from "../../assets/login.jpg"
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
    const { signIn } = useContext(AuthContext);


    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)
        signIn(email,password)
            .then(reuslt => {
                const user = reuslt.user;
                console.log(user)
            })
    }
    return (
        <div>
             <h1 className="text-5xl font-bold my-4 text-center">Login now!</h1>
            <div className="hero min-h-screen ">

                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center w-1/2 lg:text-left">

                        <img src={imgBg} alt="" />
                    </div>
                    <div className="card w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">

                                <input className="btn bg-[#FF4F5A] text-white" type="submit" value="Login" />

                                <p>New to this site.? <Link className="font-bold text-red-600" to="/register">Register</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;