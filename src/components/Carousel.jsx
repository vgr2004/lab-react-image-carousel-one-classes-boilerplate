import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
    state={
        index:0
    }
    renderImages=(images)=>{
        return (
            images.map((item,i)=>(               
           [ <div key={i} className="container">
                <h1>{item.title}</h1>
                {/* <img src={item.img} alt="" /> */}
                <h3>{item.subtitle}</h3>
            </div>]))
        )
    }
    handleNext=()=>{
        this.setState(prevState=>({
            index:(prevState.index+1)%3
        }))
    }
    handlePrevious=()=>{
        this.setState(prevState=>({
            index:(prevState.index+2)%3
        }))
    }

  render(){
    let image=this.renderImages(images);
    const { index } = this.state
    return(
        <div className="carousel-container" style={{backgroundImage:`url(${images[index].img})`}}>
        <div id="left-arrow" onClick={this.handlePrevious}><ArrowBackIosIcon/></div>
        <div className="container">
            {/* {this.renderImages(images)} */}
            {image[index]}
        </div>
        <div id="right-arrow" onClick={this.handleNext}><ArrowForwardIosIcon/></div>
        </div>
    )
  }
}

export default Carousel;