import React, { Component } from 'react';
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar"
import Panel from "./components/Panel"
import Footer from "./components/Footer"
import cards from "./cards.json";
import './App.css';

class App extends Component {

  state = {
       data:cards,
       score: 0,
       topScore: 0,
       status: "Click an image to begin!",
   };
   //function to mark it has been clicked
   clicked = (id) =>{
       let tempList = this.state.data
       //get the index of the card clicked in tempList
       let index = tempList.findIndex(x => x.id === id);
       if(tempList[index].clicked === false){
          let newStatus="You guessed correctly";
           //mark the card as clicked
           tempList[index].clicked = true;
           //shuffle tempList
           this.shuffle(tempList);
           //update the score
           let newScore = this.state.score + 1;
           if(newScore > this.state.topScore){
               //update everything in the state
               this.setState({ data:tempList,
                               topScore:newScore,
                               score: newScore,
                               status:newStatus
                              })
           }else {
               //update the state with new shuffled tempList, score, and status
               this.setState({ data:tempList,
                               score:newScore,
                              status:newStatus
                             })
           }
       }else if(tempList[index].clicked === true){
           let newStatus = "You guessed incorrectly";
           let newData = this.state.data.map(card =>
               {let newCard = card;
               newCard.clicked = false
               return newCard})
           this.setState({
             status: newStatus,
             data:newData,
             score:0
           })
       }
   };


   //shuffle tempList
   shuffle = array => (array.sort(()=>(0.5 - Math.random())))

   render(){
       return(
           <div>
               <Navbar
                   score = {this.state.score} topScore = {this.state.topScore} status={this.state.status}
                  />
                <Panel/>
               <Wrapper >
                   {this.state.data.map(card =>(
                       <Card
                           clicked = {this.clicked}
                           id = {card.id}
                           image = {card.image}
                           key = {card.id}
                       />
                   ))}
               </Wrapper>
               <Footer />
           </div>

       )
   }
}

export default App;
