import React, {Component} from 'react';
import InformationBox from '../components/InformationBox.js'
import CountriesDropdown from '../components/CountriesDropdown.js';

export default class LocationContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imageUrl: null,
            countries: [],
            currentCountry: null
        }

        this.handleChangeCountry = this.handleChangeCountry.bind(this);
    }


    componentDidMount() {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(response => response.json())
            .then(countries => this.setState({countries: countries}))

        
    }

    handleChangeCountry(index) {
        const selectedCountry = this.state.countries[index];
        this.setState({currentCountry: selectedCountry})

        const lat = selectedCountry.latlng[0];
        const long = selectedCountry.latlng[1];

        console.log(lat);
        console.log(long);
       
        fetch(`https://api.nasa.gov/planetary/earth/imagery/?lon=${long}&lat=${lat}&date=2015-07-16&dim=0.025&cloud_score=True&api_key=pRV8OiANGrU9cEF806ZYsE9FdesQCvGBGoB6Iq9m`)
            .then(response => response.json())
            .then(imageInfo => this.setState({
                imageUrl: imageInfo.url
            }))
    }

    render() {
        return (
            <div>
                <CountriesDropdown countries={this.state.countries} onChangeCountry={this.handleChangeCountry}/>
                <InformationBox imageUrl={this.state.imageUrl} currentCountry={this.state.currentCountry}/> 
            </div>
        );
    }
}