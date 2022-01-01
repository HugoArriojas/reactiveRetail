// Component to render the items on the page

import HoverText from "./HoverText";
import ExtraDetails from "./ExtraDetails";
import { useState } from 'react';

function ShowProduct(props) {

    // Holds the description open state
    const [descOpen, setDescOpen] = useState(false);

    // Toggles the descOpen from true to false or vice versa every time the button is clicked
    const toggleShowDesc = () => {
        setDescOpen(!descOpen);
    }

    return (
        <>
            <div className="itemContainer" 
                key={props.key}
                onClick={toggleShowDesc}
                >
                {/* < HoverText
                    description={props.description}
                    image={props.image}
                    title={props.title}
                /> */}
                <div className="itemImage">
                    <img src={props.image} alt={props.title} />
                </div>
                <div className="itemText">
                    <h3 className="itemTitle">{props.title}</h3>
                    <div className="itemInfo">
                        <div className="priceBubble">
                            <p className="itemPrice">{props.price}</p>
                        </div>
                        <p className="itemRating">{props.rating} ★</p>
                        <p className="itemCount">({props.count} ratings)</p>
                    </div>
                </div>
            </div>

            {/* if descOpen is true, show the expanded info */}
            {descOpen ?
                <ExtraDetails content={
                    <>
                        <div className="expandedItem">
                            <div className="expandedImage">
                                <img src={props.image}
                                    alt={props.title}
                                />
                            </div>
                            <div className="itemInfo">
                                <div className="itemInfoWrapper">
                                    <h3>{props.title}</h3>
                                    <p className="itemDesc">{props.description}</p>
                                    <div className="itemInfo">
                                        <div className="priceBubble">
                                            <p className="itemPrice">{props.price}</p>
                                        </div>
                                        <p className="itemRating">{props.rating} ★</p>
                                        <p className="itemCount">({props.count} ratings)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                }
                    handleClose={toggleShowDesc}
                />
                : null // basically show nothing if it isn't clicked
            }

        </>
    )
}

export default ShowProduct;



