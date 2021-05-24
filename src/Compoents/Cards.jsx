import React from 'react'
import Images from '../Compoents/Images'
import Heading from '../Compoents/Heading'

const Card = (props) =>{
    return(
        <>

        <div className="cards">
            <div className="card">
                <Images imgsrc={props.imgsrc}/>
                <div className="card_info">
                    <span className="card_category">
                        {props.title}
                    </span>
                    <Heading sname={props.sname}/>
                    <a href="#" target="_blank">
                        <button>Watch Now</button>
                    </a>
                </div>
            </div>
        </div>
        </>
    );
}
export default Card;