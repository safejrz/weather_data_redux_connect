import React, {Component} from "react";
import PropTypes from "prop-types";
import NotificationAirlineSeatLegroomReduced from "material-ui/svg-icons/notification/airline-seat-legroom-reduced";
import { connect } from 'react-redux';
import { setCity } from "../actions";
import LocationList from "../components/LocationList";

class LocationListContainer extends Component {
    handleSelectedLocation = city => {
        //this.setState({ city });
        console.log(`handleSelectedLocation ${city}`)
        this.props.dispatchSetCity(city)
    }

    render () {
        return (
            <LocationList cities={this.props.cities}
                onSelectedLocation={this.handleSelectedLocation} ></LocationList>
        )
    }
}

LocationListContainer.propTypes = {
    setCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
}

const mapDispatchToProps = dispatch => ({
    dispatchSetCity: value => dispatch(setCity(value))
})

export default connect(null, mapDispatchToProps)(LocationListContainer)