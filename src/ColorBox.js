import React, {Component} from 'react';
import "./ColorBox.css";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Link} from 'react-router-dom';
import chroma from 'chroma-js';

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
        const {name, url, showLink} = this.props;
        const hex = this.props.color;
        const {copied} = this.state;
        const isLight = chroma(hex).luminance() >= 0.6;
        const isDark  = chroma(hex).luminance() <= 0.06;
        return (
            <CopyToClipboard text={hex} onCopy={this.handleCopy}>
            <div style={{ background: hex }} className='ColorBox'>
                <div style={{background: hex}} className={`copy-overlay ${copied && "show"}`} />
                <div className={`copy-mssg ${copied && "show"}`} >
                    <h1>Copied!</h1>
                    <p className={isLight && 'isLight'}>{hex}</p>
                </div>
                <div className='copy-container'>
                    <div className={`box-content ${isDark && 'isDark'}`}>
                      <span>{name + ' ' + chroma(hex).luminance()}</span>
                    </div>
                    <button className={`copy-button ${isLight && 'isLight'}`}>Copy</button>
                </div>
                {showLink && (
            <Link to={url} onClick={e => e.stopPropagation()}>    
                <span className={`see-more ${isLight && 'isLight'}`}>More</span>
            </Link>    
                )}
           </div>
           </CopyToClipboard>
        );
    }
}


export default ColorBox ;