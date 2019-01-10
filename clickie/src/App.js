import React, { Component } from 'react';
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Title";
import characters from "./characters.json";
import BodyWrapper from "./components/BodyWrapper";

class App extends Component {

  state = {
    characters
  };

  alert = {
    inital: "Click an image to begin!",
    win: "Success! You passed!",
    lose: "You have already clicked this image!"
  };

  score = {
    initial: 0,
    highest: 0
  }

  clickImage = (id) => {
    const characters = this.state.characters.filter((character) => character.id !== id);
    this.setState({ characters });
  };

  render() {
    return (
      <Wrapper>
          <Nav
            title="Clicky Game"
            alertText={this.alert.inital}
            score={this.score.initial}
            highest={this.score.highest}
          ></Nav>
        <BodyWrapper>
          {this.state.characters.map((character) => (
            <ImageCard
              clickImage = {this.clickImage}
              id = {character.id}
              key = {character.id}
              name = {character.name}
              image = {character.image}
            />
          ))}
        </BodyWrapper>
      </Wrapper>
    );
  }
}

export default App;
