import React from 'react';

const OtherInfo = (props) => {
    if (props.country) {
        const name = props.country.name;
        const population = props.country.population;
        const flag = props.country.flag;
        const capital = props.country.capital;
        const currency = props.country.currencies[0].name;

        return (
            <div className='other-info-box'>
                <h3>{name}</h3>
                <p>Capital: {capital}</p>
                <p>Population: {population}</p>
                <p>Main Currency: {currency}</p>
                <img className="flag-image" src={flag}/>
            </div>
        );
    }

 return null
    
}

export default OtherInfo;