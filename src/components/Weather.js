import React from 'react';


class Weather extends React.Component {

  render() {
    return (
      <div className="weather__info">
         {/* Displays info only if data exists  */}
        {this.props.city && this.props.country && <p>Location: 
          <span className="weather__value"> {this.props.city}, {this.props.country}</span></p>}
        {this.props.temperature && <p>Temperature:
          <span className="weather__value">  {this.props.temperature}°C</span></p>}
        {this.props.humidity && <p>Humidity:
          <span className="weather__value">  {this.props.humidity}</span></p>}
        {this.props.description && <p>Conditons:
          <span className="weather__value">  {this.props.description}</span></p>}
        
        {/* Displays error message if fields are empty */}
        {this.props.error && <p className="weather__error">{this.props.error}</p>}
      </div>
    );
  }
}

export default Weather;
