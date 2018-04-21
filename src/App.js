import React, { Component } from "react";
import ClickyCard from "./components/ClickyCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cards from "./clicky.json";
import "./App.css";

class App extends Component {

  // Setting this.state.cards to the cards json array
  state = {
    cards,
    score: 0,
    topScore: 0,
    message: "",
    pickedCards: []
  };


    shuffleCards = (id) => { 

      console.log('shuffle: clicked ID:', id);
  // 
  // this.setState((state) => ({x: state.x + 1}));
      let topScoreNew = 0;
      // card not picked yet
      if ( this.state.pickedCards.indexOf(id) < 0 )
      {
        let pickedCardsNew = [...this.state.pickedCards];
        // save the picked card
        pickedCardsNew.push(id);

        console.log("shuffle: push in card list "+id+" message "+this.state.message);

         //shuffle cards
        const cardsNew = this.state.cards.sort( (a, b) => {
            return 0.5 - Math.random();
        });

        topScoreNew = this.state.score;

        // set the new state values
        this.setState({ 
          message: " Great Guess!", 
          score: this.state.score+1, 
          pickedCards: pickedCardsNew,
          cards: cardsNew
        });
      }
      else
      {
        // save highest score
        if ( this.state.score > this.state.topScore )
          topScoreNew = this.state.score
        else
          topScoreNew = this.state.topScore;
                //console.log("shuffle: duplicate "+id)
        this.setState({ 
          message: " OOPs...",
          score: 0 ,
          topScore: topScoreNew,
          pickedCards: []
        });
        console.log("shuffle: duplicate "+id+" message "+this.state.message)
      }    
  }

  logit() {
      console.log('shuffle: score ', this.state.score);
      console.log('shuffle: picked ', this.state.pickedCards);
      console.log('shuffle: message ', this.state.message);
      console.log('shuffle: topScore ', this.state.topScore);
      //console.log('shuffle: clicked ID:', id);
  
  }
  componentDidMount() {
    console.log("componentDidMount: current cards")
    for (let i=0; i < cards.length; i++)
      console.log(JSON.stringify(cards[i]))
  }

  // Map over this.state.cards and render a ClickyCard component 
  // for each card object
  render() {
        console.log('Rendering')
        this.logit();
    return (
      <Wrapper>
        <Title>Clicky Card Game</Title>
        <h2><span id="instructions">Click on an image to earn points. Don't click on any more than once!</span></h2>
        <h1><span id="gameMessage">{this.state.message}</span><span id="gameScore">Score: {this.state.score}</span><span id="gameTopScore">    Top Score: {this.state.topScore}</span></h1>
        {this.state.cards.map(card => (
          <ClickyCard
            shuffleCards={this.shuffleCards}
            id={card.id}
            key={card.id}
            name={card.name}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
