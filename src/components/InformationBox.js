import React from 'react';
import LocationImage from './LocationImage';

const InformationBox = (props) => {
    return (
        <LocationImage imageUrl={props.imageUrl}/>
    )
}

export default InformationBox;