import React, {Component} from 'react';
import InformationBox from '../components/InformationBox.js'

export default class LocationContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imageUrl: null,
            countries: []
        }
    }


    componentDidMount() {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(response => response.json())
            .then(countries => this.setState({countries: countries}) )

        fetch('https://api.nasa.gov/planetary/earth/imagery/?lon=-3.18&lat=55.95&dim=0.122&cloud_score=True&api_key=pRV8OiANGrU9cEF806ZYsE9FdesQCvGBGoB6Iq9m')
            .then(response => response.json())
            .then(imageInfo => this.setState({imageUrl: imageInfo.url}))
    }

    render() {
        return (
            <InformationBox imageUrl={this.state.imageUrl}/>
        );
    }
}