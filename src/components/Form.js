import React from 'react';
import { Button,  FormGroup, Input, } from 'reactstrap';


class Form extends React.Component {

  /* fetch(http://api.worldbank.org/v2/countries)
  .then(respsone => Response.json())
  .then(json =>
    {
      this.setState(
        {
          countries:json
        }
      )
    }) */
    
  render() {
    return (
      <div >
        <h1 className="lead">Please fill out the fields below</h1>
          <form onSubmit={this.props.getWeather}>
          <FormGroup>
            <Input type="text" name="city" placeholder="City..."></Input><br />
            <Input type="text" name="country" placeholder="Country..."></Input><br />
            <Button outline color="info">Submit</Button>
          </FormGroup>
          </form>
       </div>
    );
  }
}

export default Form;
