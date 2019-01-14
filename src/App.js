import React, { Component } from 'react';
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Title";
import characters from "./characters.json";
import Jumbotron from "./components/jumbotron";
import BodyWrapper from "./components/BodyWrapper";
import Footer from "./components/Footer";

class App extends Component {

  state = {
    characters,
    alert: 'Click on an image to begin!',
    score: 0,
    highest: 0,
  };

  alert = {
    initial: "Click an image to begin!",
    win: "You guessed correctly!",
    lose: "You have already clicked this image!"
  };

  score = {
    initial: 0,
    highest: 0
  }

  clickImage = (id) => {
    
    for(var i = 0; i < this.state.characters.length; i++) {

      if(this.state.characters[i].id === id) {
        const char = this.state.characters[i];
        
        if(this.state.score >= 12) {
          alert("You got it!");
          this.setScoreZero();
          this.resetImageCards();
        }
        else if (char.click <= 0) {
          this.setState({ alert: this.alert.win });
          char.click++;
          this.setState({char});
          this.increment(id);
        }
        else{
          this.setState({ alert: this.alert.lose });
          this.setScoreZero();
          this.resetImageCards();
          alert("Uh oh, you clicked on the same image...");
        }
      }
    }
    this.shuffleOrder();
  };

  increment = (id) => {
    // change score
    let usrScore = this.state.score;
    usrScore++;
    this.setState({ score: usrScore });
    // change highest score
    let highestScore = this.state.highest;
    console.log(usrScore, highestScore);
    if(usrScore > highestScore) {
      console.log("hi?");
      highestScore = usrScore;
      this.setState({ highest: highestScore });
    }
  }

  setScoreZero = () => {
    this.setState({ score: 0 });
    }

  resetImageCards = () => {
    const characters = this.state.characters;

    for(var i = 0; i < characters.length; i++) {
      characters[i].click = 0;
    };

    this.setState({ characters });
  }

  shuffleOrder = () => {
    const { characters } = this.state;
    let i = characters.length - 1;
    for(; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = characters[i];
      characters[i] = characters[j];
      characters[j] = temp;
    }

    this.setState({ characters });
  };

  render() {
    return (
      <Wrapper>
        <Nav
          title="Clicky Game"
        ></Nav>
        <Jumbotron
          alertText={this.state.alert}
          score={this.state.score}
          highest={this.state.highest}
        ></Jumbotron>
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
        <Footer></Footer>
      </Wrapper>
    );
  }
}

export default App;
