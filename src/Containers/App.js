import React, { Component } from 'react';
import Navigation from '../Components/Navigation/Navigation';
import ImageLinkForm from '../Components/ImageLinkForm/ImageLinkForm';
import Rank from '../Components/Rank/Rank';
import FaceRecognition from '../Components/FaceRecognition/FaceRecognition';
import Particles from 'react-particles-js';
import './App.css';
import particlesOptions from './particlesjs-config';
import Clarifai from 'clarifai';

const CLARIFAI_API_KEY = '7753a1a4e42b42709100728dd5840d4d';
const app = new Clarifai.App({apiKey: CLARIFAI_API_KEY});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      image_url: '',
      box: {}
    }
  }

  calculateFaceLocation = (data) => {
    const array_of_boxes = data.outputs[0].data.regions;
    const box1 = array_of_boxes[0].region_info.bounding_box;

    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);

    return {
      top_row: box1.top_row * height,
      left_col: box1.left_col * width,
      bottom_row: height - (box1.bottom_row * height),
      right_col: width - (box1.right_col * width)
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box});
    console.log(box);
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onSubmit = () => {
    this.setState({image_url: this.state.input});
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch(err => console.log("An error occurred: ", err));
  }

  render() {
    return (
      <div className="tc">
        <Particles className='particles'
          params={particlesOptions} />

        <Navigation />
        <div className='mainDiv'>
          <Rank />
          <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
          <FaceRecognition image_url={this.state.image_url} box={this.state.box}/>
        </div>
      </div>
    );
  }
}

export default App;
