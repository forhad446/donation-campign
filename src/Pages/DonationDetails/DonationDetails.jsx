import { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { Link, useLoaderData, useParams } from "react-router-dom";
import {addToLS} from './../../utilities/localStorage'

const DonationDetails = () => {
    const notify = () => { toast.success(`Donation Success!`) };

    const [card, setCard] = useState({});
    const [donationItem, setDonationItem] = useState([]);

    const { title, picture, description, text_button_bg, price } = card;
    const { donation_details } = useParams()

    const data = useLoaderData();
    const donationUser = data.data;
    useEffect(() => {
        const donation = donationUser?.find(card => card.category === donation_details);


        setCard(donation);
    }, [donation_details, data]);
    // save to local storage
    const handleAddToDonationItem = donationInfo => {
        console.log(donationInfo);
    const newDonationInfo = [...donationItem];
    newDonationInfo.push(donationInfo)
        setDonationItem(newDonationInfo);
        addToLS(newDonationInfo);
    }
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <Link to='' aria-label="View Item">
                <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg">
                    <img
                        className="object-cover w-full h-56 md:h-[600px]"
                        src={picture}
                        alt=""
                    />
                    <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-50">
                        <button onClick={() => {
                            handleAddToDonationItem(card);
                            notify()
                        }}
                            style={{ backgroundColor: text_button_bg, opacity: '1 !important' }} className="text-[#FFF] px-6 py-4 font-semibold text-xl md:my-12 rounded-md">
                            {price}
                        </button>
                    </div>
                </div>
            </Link>
            <div className="mt-5 md:mt-10">
                <h1 className="text-[#0B0B0B] text-4xl font-bold mb-4">{title}</h1>
                <p className="font-normal text-[#0B0B0BB2]">
                    {description}
                </p>
                <Toaster />
            </div>
        </div>
    );
};

export default DonationDetails;