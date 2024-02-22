import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Birame NDIAYE",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        imgSrc: "../birame.png",
        profession: "Développeur Web"
      },
      show: false,
      elapsedTime: 0
    };
  }

  toggleShow = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState(prevState => ({
        elapsedTime: prevState.elapsedTime + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleShow}>Toggle Show</button>
        {this.state.show && (
          <div>
            <h1>{this.state.person.fullName}</h1>
            <p>{this.state.person.bio}</p>
            <img src={this.state.person.imgSrc} alt="Person" />
            <p>{this.state.person.profession}</p>
          </div>
        )}
        <p>Elapsed Time: {this.state.elapsedTime} seconds</p>
      </div>
    );
  }
}

export default App;
