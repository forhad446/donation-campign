import { Link } from "react-router-dom";

const Card = ({ card }) => {

    const { title, picture, category, category_bg, card_bg, text_button_bg } = card;

    return (

        <div className="rounded-lg cursor-pointer h-[280px] w-[300px] ">
            <Link to={`/${category}`} className="block w-full h-full">
                <div>
                    <img src={picture} className=" w-full h-[190px]" />
                </div>
                <div style={{backgroundColor: card_bg}} className="w-full p-4">
                    <p style={{backgroundColor:category_bg,color:text_button_bg}} className="w-4/12 text-center px-3 py-1 rounded-md font-medium text-sm">
                        {category}
                    </p>
                    <p style={{color:text_button_bg}} className="mb-2 text-xl font-medium">
                        {title}
                    </p>
                </div>
            </Link>
        </div>

    );
};

export default Card;