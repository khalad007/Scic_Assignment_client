import bg1 from "../../assets/bodybg.png"

const UserHome = () => {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img className="w-full" src={bg1} alt="Shoes" /></figure>
                <div className="card-body">
                    <p>✍️ Article</p>
                    <h2 className="font-bold text-sm">
                        What if famous brands had regular fonts? Meet RegulaBrands!
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img className="w-full" src={bg1} alt="Shoes" /></figure>
                <div className="card-body">
                    <p>✍️ Article</p>
                    <h2 className="font-bold text-sm">
                        What if famous brands had regular fonts? Meet RegulaBrands!
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img className="w-full" src={bg1} alt="Shoes" /></figure>
                <div className="card-body">
                    <p>✍️ Article</p>
                    <h2 className="font-bold text-sm">
                        What if famous brands had regular fonts? Meet RegulaBrands!
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserHome;