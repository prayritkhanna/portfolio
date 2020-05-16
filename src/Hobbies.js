import React, { Component } from 'react';
import './Hobbies.css';

class Hobbies extends Component{
    render(){
        return ( 
            <div className="hobbies">
                <h2>Hobbies</h2>
                <div className="row">
                    <Icons myIcon={iconObj[0].icon} myTitle={iconObj[0].title} myDescription={iconObj[0].description}/>
                    <Icons myIcon={iconObj[1].icon} myTitle={iconObj[1].title} myDescription={iconObj[1].description}/>
                    <Icons myIcon={iconObj[2].icon} myTitle={iconObj[2].title} myDescription={iconObj[2].description}/>
                    <Icons myIcon={iconObj[3].icon} myTitle={iconObj[3].title} myDescription={iconObj[3].description}/>
                    <Icons myIcon={iconObj[4].icon} myTitle={iconObj[4].title} myDescription={iconObj[4].description}/>
                </div>
            </div>
        );
    }
}
 
const iconObj = [
    {
        icon: <img src={ require('./img/food-and-restaurant.png') } alt="I like to Cook"/>,
        title: 'Cooking',
        description: <p1>public class Hobbies</p1>

        

    },
    {
        icon:  <img src={ require('./img/travel.png') } alt="I like to Travel"/>,
        title: 'Travelling',
        description: 'Looks Great!'
    },
    {
        icon: <img src={ require('./img/disc.png') } alt="I like Music"/>,
        title: 'Listening & Playing Music',
        description: 'Looks Great!'
    },
    {
        icon: <img src={ require('./img/game.png') } alt="I like to Game"/>,
        title: 'Video Games',
        description: 'Looks Great!'    
    },
    {
        icon: <img src={ require('./img/music-and-multimedia.png') } alt="I like Movies"/>,
        title: 'Watching Movies',
        description: "I love a good Paul Rudd movie" 
    }
];

class Icons extends Component{
    render(){
        return ( 
            <div>
                <span>
                    {this.props.myIcon}
                </span>
                <h3>{this.props.myTitle}</h3>
                <p>{this.props.myDescription}</p>
            </div>
        );
    }
        
}

export default Hobbies;

