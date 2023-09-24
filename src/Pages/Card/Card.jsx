import { Link } from "react-router-dom";

const Card = ({ card }) => {

    const { title, picture, category, category_bg, card_bg, text_button_bg } = card;
    const bgColor = `w-full p-4 bg-[${card_bg}]`;
    const textColor = `mb-2 text-xl font-medium text-[${text_button_bg}]`;
    console.log(textColor);
    return (

        <div className="rounded-lg cursor-pointer h-[280px] w-[300px] ">
            <Link to='/' className="block w-full h-full">
                <div>
                    <img src={picture} className=" w-full h-[190px]" />
                </div>
                <div className={bgColor}>
                    <p className="font-medium text-indigo-500 text-sm">
                        {category}
                    </p>
                    <p className={textColor}>
                        {title}
                    </p>
                </div>
            </Link>
        </div>

    );
};

export default Card;