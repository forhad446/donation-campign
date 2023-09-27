// finding the element of ls storage
const getDonationItem = () => {
    const storedDonationStr = localStorage.getItem('donationItem');
    if(storedDonationStr){
        return JSON.parse(storedDonationStr);
    }else{
        return []
    }
}

const saveDonationToLS = donationItem => {
    const donationItemStringified = JSON.stringify(donationItem);
    localStorage.setItem('donationItem', donationItemStringified);
}

const addToLS = category => {
    const donationItem = getDonationItem();
    console.log(donationItem);
    donationItem.push(category);
    // save to local storage
    saveDonationToLS(donationItem);
}

export {getDonationItem, saveDonationToLS, addToLS}