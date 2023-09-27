

const DonationCard = ({ info }) => {
    const category_bg = info[0].category_bg;
    return (

        <div style={{backgroundColor:info[0].card_bg}} className="flex items-center  overflow-hidden  rounded-lg shadow-lg gap-4">
            <div className="w-2/4 bg-cover bg-landscape">
                <img className="w-full rounded-2xl" src={info[0].picture} alt="" />
            </div>
            <div className="">
                <p style={{ backgroundColor: category_bg, color: info[0].text_button_bg }} className="bg-red-300 text-center  py-1 rounded-md font-medium text-sm">
                    {info[0].category}
                </p>
                <h1 className="text-xl text-[#0B0B0B] font-medium mt-2">
                    {info[0].title}
                </h1>
                <h1  style={{
                    color: info[0].text_button_bg
                }} className="text-xl text-[#0B0B0B] font-medium t">
                    {info[0].price.slice(7, 15)}
                </h1>
                <button style={{
                    backgroundColor: info[0].text_button_bg
                }} className="text-[#FFF] px-4 py-2 mt-6 b-5 font-semibold text-xl rounded-md">
                    View Details
                </button>
            </div>
        </div>

    );
};

export default DonationCard;