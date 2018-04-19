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
    pickedCards: []
  };

    shuffleCards = (id) => {
                console.log('shuffle: clicked ID:', id);
                console.log('shuffle: score', this.state.score);
                console.log('shuffle: picked', this.state.pickedCards);
      if ( this.state.pickedCards.indexOf(id) < 0 )
      {
        console.log("shuffle: push in card list "+id);
        this.state.pickedCards.push(id);
      }
      else
      {
        console.log("shuffle: duplicate "+id)
      }
      //  console.log('indexOf', this.state.pickedCards.indexOf(id));
    // Filter this.state.friends for friends with an id not equal to the id being removed
     // Set this.state.friends equal to the new friends array
  //event.preventDefault();
// console.log("clicked id "+id)
  }

  componentDidMount() {
    console.log("componentDidMount: current cards")
    for (let i=0; i < cards.length; i++)
      console.log(JSON.stringify(cards[i]))
  }

  // Map over this.state.cards and render a Quickycard component for each card object
  render() {
        console.log('I was triggered during render')
    return (
      <Wrapper>
        <Title>Clicky Card List</Title>
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