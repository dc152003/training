import  { Component } from 'react';
class Traininginfo extends Component {
  render() {
    return (
      <div className="Traininginfo">
        <h1>Training Information</h1>
        <h2>Trainer Name: {this.props.trainerName}</h2>
        <h3>Mode of Training: {this.props.modeOfTraining}</h3>  
       
      </div>
    );
  }
}
export default Traininginfo;
 