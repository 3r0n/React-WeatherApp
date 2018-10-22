import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Alert} from 'reactstrap';
import Form from './components/Form';
import Weather from './components/Weather';
import Title from './components/Title';


const API_KEY = "9842eb760a6536f17757eaa7b6b6bb7e";



class App extends Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  //function
  getWeather = async(e) => 
  {
    //prevents page from refreshing
    e.preventDefault();

    //gets info from form
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    //api call
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${API_KEY}`);

    //prints data in json format
    const data = await api_call.json();

    //checks if fields are empty
    if(city && country)
    {
  
      //sets state
      this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ""
    })
    }
    else
    {
      //sets state and prints error message
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: <Alert color="warning">"Please enter the values"</Alert>
      })
    }
    
  }

  render() {
    return (
      <div className="App">
      <Container>

        {/* Spacer */}
        {'\u00A0'}

        <Jumbotron jumbotron>
        <Row>
          <Col xs="12"><center><Title /></center></Col>
         </Row>
        
        <Row>
          <Weather 
                    temperature={this.state.temperature} 
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    error={this.state.error}
                  /> 
        </Row>
        <Row>
          <Col xs="6">
            <Form getWeather={this.getWeather} />
          </Col>
          <Col xs="6">
              <iframe src="https://datahub.io/core/country-list/r/0.html" width="100%" height="100%" frameborder="0"></iframe><br />
          </Col>
        </Row>
        </Jumbotron>
      </Container>
      </div>
    );
  }
}

export default App;
