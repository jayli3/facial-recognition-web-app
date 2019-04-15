import React, { Component } from 'react';
import Navigation from '../Components/Navigation/Navigation';
import ImageLinkForm from '../Components/ImageLinkForm/ImageLinkForm';
import Rank from '../Components/Rank/Rank';
import Particles from 'react-particles-js';
import './App.css';
import particlesOptions from './particlesjs-config';

class App extends Component {
  render() {
    return (
      <div className="tc">
        <Particles className='particles'
          params={particlesOptions} />

        <Navigation />
        <div className='mainDiv'>
          <Rank />
          <ImageLinkForm/>
                {/*<FaceRecognition />*/}
        </div>
      </div>
    );
  }
}

export default App;
