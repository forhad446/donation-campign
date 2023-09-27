import DonationCard from "./donationCard";


const Donation = () => {
    const storedItem = localStorage.getItem('donationItem');
    const donation = JSON.parse(storedItem);
    return (
        <div className="flex justify-center gap-5">
            <div className="grid gap-6 grid-cols-2 max-w-7xl mx-auto">
                {
                    donation.map((info, idx) => <DonationCard
                        key={idx}
                        info={info}></DonationCard>)
                }
            </div>
        </div>
    );
};

export default Donation;