import React, { Component } from "react";
import Splash from './splash';

class Home extends Component {
  render() {
    return (
      <div>
        <Splash/>
        <h2> Ready to start Coding?</h2>
        <p> Welcome to Richmond Hill Software Engineering Pathway.This pathway allows students to learn and develop many different skills of cumputing data science with various sites.</p>
        <p>The purpose of this pathway is to inspire learning and motivation in the field of Engineering and Engineering Technology. Students in the Engineering Pathway will use technology, hands on projects and real world experiences to expand their imagination, maximize learning potential and develop skills and talents for a career in Engineering or Engineering.</p>
        <h1>Who Are Engineers?</h1>
        <p>Movies show spaceships and robots; mechanical engineers make them. Architects draw skyscrapers and bridges; structural engineers build them. Sports stars perform incredible athletic feats; software engineers transfer them to the computer screen. Doctors dream of replacing damaged hearts and lungs; biomedical engineers create them. Engineers use skills in science and math to transform dreams into reality. Engineers are problems solvers; they answer the questions “how?” and “why?” The marvels of the modern age from I phones to microwaves to artificial legs were created and refined by engineers. Engineers are professionals; licensed to design structures and devices that lives can depend on. Whether it’s old school engineering such as bridge building or cutting edge engineering like replacing a lost eye, engineers follow the same process: set goals, identify obstacles, create a model, perfect the design. Without engineers, we’d still be riding horses to travel and living in caves. Engineers made the world of today and will make the world of tomorrow.</p>
      </div>
    );
  }
}

export default Home; 