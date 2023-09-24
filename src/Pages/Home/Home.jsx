import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Card from "../Card/Card";

const Home = () => {

    const {data} = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <div className="grid grid-cols-1 md:grid-cols-4 max-w-7xl mx-auto gap-6 mt-20">
                {
                    data.map((data,idx) => <Card 
                    key={idx}
                    card={data}
                    ></Card>)
                }
            </div>
        </div>
    );
};

export default Home;