import React, { useState, useEffect } from 'react'
import { FaStar, FaStarHalf } from 'react-icons/fa'
interface Props {
    value: number
}

const StarRating: React.FC<Props> = (Props) => {
    const [dec, SetDec] = useState(0);  //decimal value
    useEffect(() => {
        SetDec(dec => dec + (Props.value * 10) - (10 * Math.floor(Props.value)))
    }, []) //runs only once

    const halfStar = () => {
        return (
            <FaStarHalf style={{ marginLeft: "7px" }} color="gold" title={`${Props.value}/5`}></FaStarHalf>
        )
    }
    return (
        <div>
            <h4>Rating:
    {[...Array(5)].map((star, index) => {
                if (index < Math.floor(Props.value)) {
                    return <FaStar style={{ marginLeft: "7px" }} color="gold" title={`${Props.value}/5`}></FaStar>
                }
            })}
           {(dec>=5)?halfStar():null} </h4>
        </div>
    )
}

export default StarRating
