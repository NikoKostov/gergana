import React from 'react';
import './App.css';
import Landing from './Components/Landing'
import Bulgaarse from './Components/Bulgaarse'
import Engels from './Components/Engels'
import { AnimatePresence } from 'framer-motion';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      visible: 'landing'
     }
     this.handlerBG = this.handlerBG.bind(this)
     this.handlerUK = this.handlerUK.bind(this)
  }
 
  handlerBG() {
    this.setState({
      visible: 'bg' 
    })
  }
  handlerUK() {
    this.setState({
      visible: 'uk' 
    })
  }
  
  
  render() {
    return (
      <AnimatePresence exitBeforeEnter>
      {(() => {
        switch (this.state.visible) {
          case "landing":   return <Landing key= {this.state.visible} handlerbg = {this.handlerBG} handleruk = {this.handlerUK}/>;
          case "bg": return <Bulgaarse key= {this.state.visible}/> ;
          case "uk":  return <Engels key= {this.state.visible}/>;
          default:      return "#FFFFFF";
        }
      })()}
      </AnimatePresence>
     );
  }
}
 
export default App;
