import React from 'react'

function CardItem(props) {
    return (
        <>
            <li className="cards__item">
                <div className="cards__item__link">
                    <figure className="cards__item__pic-wrap" data-category={props.label}>
                        <a href={props.path}>
                            <img src={props.src} alt="Project"
                                className="cards__item__img">
                            </img></a>
                    </figure>
                    <div className="cards__item__info">
                        <h5 className="cards_item__text">{props.text}</h5>
                        <a href={props.pathgithub}>
                            <i class="fab fa-github cards__links__icon"></i>
                        </a>  
                        <a href={props.path}>
                            <i class="fas fa-link cards__links__icon"></i>
                            </a>  
                            
                        
                    </div>

                </div>
            </li>
        </>
    )
}

export default CardItem;
