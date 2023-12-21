import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="hero h-[400px]" style={{ backgroundImage: 'url(https://i.ibb.co/7yW3zrh/Rectangle-2.png)' }}>
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">

                    <Link to="dashboard">
                        <button className="btn bg-[#27A365] text-white">Let's Explore</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;