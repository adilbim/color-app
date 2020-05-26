import React, {Component} from 'react';
import "./ColorBox.css";
import {CopyToClipboard} from 'react-copy-to-clipboard';

class ColorBox extends Component{
   constructor(props){
       super(props);
       this.state = { copied: false}
       this.handleCopy = this.handleCopy.bind(this);
   }
    
   handleCopy(){
      this.setState({copied: true}, ()=>{
          setTimeout(()=>{
              this.setState({copied: false});
          },1500)
      });
   }

    render(){
        const {hex, name} = this.props;
        const {copied} = this.state;
        return (
            <CopyToClipboard text={hex} onCopy={this.handleCopy}>
            <div style={{ background: hex }} className='ColorBox'>
                <div style={{background: hex}} className={`copy-overlay ${copied && "show"}`} />
                <div className={`copy-mssg ${copied && "show"}`} >
                    <h1>Copied!</h1>
                    <p>{hex}</p>
                </div>
                <div className='copy-container'>
                    <div className='box-content'>
                      <span>{name}</span>
                    </div>
                    <button className='copy-button'>Copy</button>
                </div>
            <span className='see-more'>More</span>
           </div>
           </CopyToClipboard>
        );
    }
}


export default ColorBox ;