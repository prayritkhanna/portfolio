import React, { Component } from 'react';
//import './App.css';
import './Navigation.css';
import './index';


class Navigation extends Component{
    render(){
        const sections = ['Home', 'Hobbies', 'Projects', 'Contact'];
        const navLinks = sections.map(section => {
            return (
                //This will loop through all the contents in 'sections' and will give it a href=#{section[0]}, href=#{section[1]}, etc.
                <li><a href={'#' + section}>{section}</a></li>
            )
        });
        return (

            <nav>
                <a href="#Home" ><img id="profilePicture" src={require('./img/try.jpg')} alt="Profile Picture"/></a>
                <h2 className = "myName">Prayrit Khanna</h2>
                <ul className = "nav-links">
                    {navLinks}
                </ul>
            </nav>


            
        );
    }
}


export default Navigation;