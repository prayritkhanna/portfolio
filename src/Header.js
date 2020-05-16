import React, { Component } from 'react';
//import './App.css';
import './Navigation.css';
import './index';
//Creating the variable headerimage by importing the file.
import headerimage from './img/header.png'
import './Header.css'; 
import TextLoop from "react-text-loop";

const headImage = {
    //calling the background file via headerimage. Since that is the variable for it's location
    backgroundImage: `url( ${headerimage} )`,
    height:'85vh',
    backgroundSize: 'cover'
};

/*
? Should the navigation bar have a circular photo in it?
*/ 

class Header extends Component{
    render(){
        return (
            //Calling headImage which is the constant initiated above.
            <header style={headImage}>
                <TextLoop className="rotatingWords" springConfig={{stiffness: 10, damping: 7}}
                children={["Hello World!", "नमस्ते दुनिया!", "Hola Mundo!", "你好，世界！", "Hallo Welt!", "హలో వరల్డ్!"]} 
                interval={2500} mask={false} style={{textAlign: 'center', marginTop: 200}}/>
            </header>
        );
    }
}
   

export default Header;