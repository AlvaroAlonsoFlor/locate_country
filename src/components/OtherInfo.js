import React from 'react';

const OtherInfo = (props) => {
    if (props.country) {
        const name = props.country.name;
        const population = props.country.population;

        return (
            <div className='other-info-box'>
                <p>{name}</p>
                <p>Population: {population}</p>
            </div>
        );
    }

 return null
    
}

export default OtherInfo;