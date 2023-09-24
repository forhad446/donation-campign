
const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/z4ypgsv/Rectangle-4281.png)' }}>
            <div className="hero-overlay bg-[#FFFFFFF2] bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <h1 className="mb-5 text-5xl font-bold text-[#0B0B0B]">I Grow By Helping People In Need</h1>
                    <div className="relative mt-10">
                        <input type="text" placeholder="Search here...." className="input input-bordered text-[#BBB766] w-full pr-16" />
                        <button className="btn text-[#FFF] bg-[#FF444A] absolute top-0 right-0 px-7 rounded-l-none">Search</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;