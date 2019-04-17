import React, { Component } from 'react';
import Navigation from '../Components/Navigation/Navigation';
import ImageLinkForm from '../Components/ImageLinkForm/ImageLinkForm';
import Rank from '../Components/Rank/Rank';
import FaceRecognition from '../Components/FaceRecognition/FaceRecognition';
import SignIn from '../Components/SignIn/SignIn';
import Register from '../Components/Register/Register';
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
      array_of_boxes: [],
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        faces: 0,
        joined: ''
      }
    }
  }

  calculateFaceLocation = (data) => {
    const array_of_regions = data.outputs[0].data.regions;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);

    const array_of_boxes = array_of_regions.map((region) => {
      const box = region.region_info.bounding_box;
      const modified_box = {
        top_row: box.top_row * height,
        left_col: box.left_col * width,
        bottom_row: height - (box.bottom_row * height),
        right_col: width - (box.right_col * width)
      }
      return modified_box;
    })
    return array_of_boxes;
  }

  displayFaceBox = (array_of_boxes) => {
    this.setState({array_of_boxes: array_of_boxes});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  loadUser = (data) => {
    this.setState({user: 
      {
          id: data.id,
          name: data.name,
          email: data.email,
          faces: data.faces,
          joined: data.joined
      }
    });
    this.onRouteChange('home');
  }

  onSubmit = () => {
    this.setState({array_of_boxes: []});
    this.setState({image_url: ''});
    this.setState({image_url: this.state.input});
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => {
        if(response.outputs[0].data.regions){
          if(this.state.user.id === -1){
            const faces = response.outputs[0].data.regions.length;
            this.setState(Object.assign(this.state.user, {faces: this.state.user.faces + faces}));
            return this.displayFaceBox(this.calculateFaceLocation(response))
          }
          else{
            fetch('http://localhost:3001/image', {
              method: 'put',
              headers: {'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                id: this.state.user.id,
                faces: response.outputs[0].data.regions.length
              })
            })
            .then(res => res.json())
            .then(faces => this.setState(Object.assign(this.state.user, {faces: faces})));
            return this.displayFaceBox(this.calculateFaceLocation(response))
          }
        }
      })
      .catch(err => console.log("An error occurred: ", err));
  }

  onRouteChange = (route) => {
    if(route === 'home'){
      this.setState({isSignedIn: true});
    }
    else if(route === 'signin'){
      this.setState({isSignedIn: false});
    }
    else{
      this.setState({isSignedIn: false});
    }
    this.setState({route: route});
  }

  render() {
    const {isSignedIn, image_url, array_of_boxes, route, user} = this.state;
    return (
      <div className="tc">
        <Particles className='particles'
          params={particlesOptions} />

        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
        <div className='mainDiv'>
          {(route === 'home') ? 
              <div>
              <Rank name={user.name} faces={user.faces}/>
                <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
                <FaceRecognition image_url={image_url} array_of_boxes={array_of_boxes}/>
              </div>
          : (route === 'signin') ?
              <SignIn onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>
            : <Register loadUser={this.loadUser}/>  
          }
        </div>
      </div>
    );
  }
}

export default App;
