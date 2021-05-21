import React from 'react'
import PropTypes from 'prop-types'

import { FaStar, FaStarHalfAlt, FaRegStar} from "react-icons/fa";
import './Rating.css'

const Rating = ({ value, text, color }) => {
    return (
        <div className='rating'>
            <span style={{color}}>
                <span>
                    {value >= 1 ? <FaStar/> : value >=0.5 ? <FaStarHalfAlt/> : <FaRegStar/>}
                </span>
                <span>
                    {value >= 2 ? <FaStar/> : value >=1.5 ? <FaStarHalfAlt/> : <FaRegStar/>}
                </span>
                <span>
                    {value >= 3 ? <FaStar/> : value >=2.5 ? <FaStarHalfAlt/> : <FaRegStar/>}
                </span>
                <span>
                    {value >= 4 ? <FaStar/> : value >=3.5 ? <FaStarHalfAlt/> : <FaRegStar/>}
                </span>
                <span>
                    {value >= 5 ? <FaStar/> : value >=4.5 ? <FaStarHalfAlt/> : <FaRegStar/>}
                </span>
            </span>
            <span>
                {text && text}
            </span>
        </div>
    )
}

Rating.defaultProps = {
    value: 0,
    color: '#f8e825', 
}

Rating.propTypes = {
    value: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string
}

export default Rating
