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
    text: "Click an image to begin!",
    initial: "Click an image to begin!",
    win: "Success! You passed!",
    lose: "You have already clicked this image!"
  };

  score = {
    initial: 0,
    highest: 0
  }

  clickImage = (id) => {
    // console.log(this.state.characters); //but why this shows up as changed?? asynchronous?
    
    for(var i = 0; i < this.state.characters.length; i++) {
      // console.log(id);
      if(this.state.characters[i].id === id) {
        const char = this.state.characters[i];
        
        if(char.click <= 0) {
          char.click++;
          this.setState({char});
          this.increment(id);
          // console.log(this.state.characters);
        }
        else{
          const alert = this.alert.lose;
          this.alert.text = alert;
          // console.log(alert);
          this.setState({ alert }); // how does it know which one?????
          this.shuffleOrder();
        }
      }
    }
  };

  increment = (id) => {
    // change score
    let score = this.score.initial;
    score++;
    this.score.initial = score;
    this.setState({ score }); // how does it know which one?????
    // change highest score
    let highestScore = this.score.highest;
    if(score > highestScore) {
      this.score.highest = score;
      this.setState({ score });
    }
  }

  shuffleOrder = () => {
    
  };

  render() {
    return (
      <Wrapper>
        <Nav
          title="Clicky Game"
          alertText={this.alert.text}
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
              click = {character.click}
            />
          ))}
        </BodyWrapper>
      </Wrapper>
    );
  }
}

export default App;
