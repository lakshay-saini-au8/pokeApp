import React from 'react'
import {Wrapper,CardImg,CardNumber,CardTitle} from './Card.style'
const Card = ({cardData,cardNo}) => {
    console.log(cardData.name)
    return (
        <Wrapper>
            <CardImg>
                <img src={`https://pokeres.bastionbot.org/images/pokemon/${cardNo}.png`} alt="Poke 4"/>
            </CardImg>
            <CardTitle>
            {cardData.name[0].toUpperCase() + cardData.name.slice(1)}
            </CardTitle>
            <CardNumber>
                    #{cardNo}
            </CardNumber>
        </Wrapper>
    )
}

export default Card
