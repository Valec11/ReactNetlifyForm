
import React, { Component } from "react";
import PortfolioProject from "./Components/PortfolioProject";
import Intro from "./Components/Intro";
import "./App.css";

export default class App extends Component {


  state = {
    projects: [
      {
        id: 1,
        title: "Honda",
        desc: "1990 NSX",
        status: 1,
        link:
          "https://storage.googleapis.com/thehundreds/media/2014/09/NSX-FRONT3QUARTER.jpg",
      },
      {
        id: 2,
        title: "BMW",
        desc: "1993 Alpina B12",
        status: 0,
        link:
          "https://drivetribe.imgix.net/EhaAmr7vRWa3VRUb3HpTOQ",
      },
      {
        id: 3,
        title: "Yawn Emoji",
        desc: "Used to express when you are tired or Bored",
        status: 1,
        link:
          "https://i.guim.co.uk/img/media/7b0e02f5ccb2f29505b7ee19cc40147ac3b08b33/2_0_8885_5333/master/8885.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=5eb3582d3b403749354715690999c2ec",
      },
      {
        id: 4,
        title: "Air Jordan",
        desc: "Expensive Sneakers",
        status: 1,
        link:
          "https://di2ponv0v5otw.cloudfront.net/posts/2019/02/23/5c71fad0d6dc52da75a1629a/m_5c71faeaa5d7c68fec4be460.jpg",
      },
      {
        id: 5,
        title: "Air Jordan",
        desc: "Expensive Sneakers",
        status: 1,
        link:
          "https://di2ponv0v5otw.cloudfront.net/posts/2019/02/23/5c71fad0d6dc52da75a1629a/m_5c71faeaa5d7c68fec4be460.jpg",
      },
      {
        id: 6,
        title: "Air Jordan",
        desc: "Expensive Sneakers",
        status: 1,
        link:
          "https://di2ponv0v5otw.cloudfront.net/posts/2019/02/23/5c71fad0d6dc52da75a1629a/m_5c71faeaa5d7c68fec4be460.jpg",
      },
      {
        id: 7,
        title: "Air Jordan",
        desc: "Expensive Sneakers",
        status: 1,
        link:
          "https://di2ponv0v5otw.cloudfront.net/posts/2019/02/23/5c71fad0d6dc52da75a1629a/m_5c71faeaa5d7c68fec4be460.jpg",
      },
    ],
  };






  render() {
    const formStyle = {
      display: 'flex',
      flexDirection: 'column',
      margin: '40px'
    }
    return (
      <div className="App">
        <div className="container">
          <div className="content-container">


            <Intro />

            <div className="scroll">
              <PortfolioProject id="projects" projects={this.state.projects} />
              <form style={formStyle} name="contact" action="/contact" method="POST" data-netlify="true" >
                <input type="hidden" name="form-name" value="contact" />
                <input required type="text" name="name" placeholder="Enter Name" />
                <input required type="email" name="email" placeholder="email" />
                <textarea required id="message" name="message" placeholder="message" />
                <button type="submit" id="submit"  >Submit</button>
              </form>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

