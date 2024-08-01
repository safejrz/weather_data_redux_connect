/* eslint-disable no-console */
import React, { Component } from 'react';
//TODO: FIX
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import Paper from 'material-ui/Paper';
//import AppBar from 'material-ui/AppBar';
import { Grid, Row, Col } from 'react-flexbox-grid';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';

import './App.css';

const cities = [
  'Buenos Aires,ar',
  'Washington,us',
  'Bogota,co',
  'Mexico,mx',
  'Madrid,es'
];



class App extends Component {

  constructor() {
    super();
    this.state = { city: null };
  }

  handleSelectedLocation = city => {
    this.setState({ city });
    console.log(`handleSelectedLocation ${city}`);
  }
  
  render() {
    const { city } = this.state;
    return (      
        <div>
          {/* <MuiThemeProvider> */}
        <Grid>
          <Row>
            <Col xs={12}>
              {/* <AppBar title="Weather App" /> */}
              AppBar goes here!
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationList cities={cities} 
              onSelectedLocation={this.handleSelectedLocation} ></LocationList>
            </Col>
            <Col xs={12} md={6}>
              {/* <Paper zDepth={4}> */}
              PAPER GOES HERE!
                <div className='detail'>
                  {
                    city && 
                    <ForecastExtended city={city}></ForecastExtended>
                  }

                </div>
                PAPER GOES HERE!!
              {/* </Paper> */}
            </Col>
          </Row>
        </Grid>
        {/* </MuiThemeProvider> */}
        </div>              
    );
  }
}

export default App;
