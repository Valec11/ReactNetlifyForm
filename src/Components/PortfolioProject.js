import React, { Component } from "react";
import Form from './Form';

export default class classComponent extends Component {
    render() {
        const { projects } = this.props;
        const projectLists = projects.map((project) => {
            return (


                <div className="col" key={project.id}>

                    <div className="card">
                        <div className="card-image">
                            <img src={project.link} alt="{project.title}" />
                            <div className="card-des">
                                <span className="card-title">{project.title}</span>
                                <p>{project.desc}</p>
                            </div>
                        </div>
                        {/* <div className="card-content">
              <p>{post.desc}</p>
            </div> */}
                    </div>
                </div>
            );
            //: null;
        });

        return <div >

            <div id="home" class="active section home" data-tab-content>
                <div class="content-cont">
                    <h1>Home</h1>
                    <p>
                        2020 Farmingdale state college Graduate with a Bachelor's degree
                        in Computer Programming and information systems, I have a great
                        focus and passion for developing web applications , I trully enjoy
                        the process of creating and implementing ideas.
            </p>
                    <button class="vw-btn"> View Resume</button>
                </div>
            </div>


            <div id="skills" class="section" data-tab-content>
                <h1>Transmission</h1>
                <p>
                    The 840Ci (4.0/4.4 L V8) models were equipped with a 5-speed
                    automatic transmission or a 6-speed manual transmission. The
                    850i/850Ci (V12) models each use either a 4-speed automatic
                    transmission or a 6-speed manual transmission, a 5-speed automatic
                    transmission was fitted from mid-1994. The high performance 850CSi
                    model only came with a 6-speed manual transmission.
          </p>

            </div>
            <div className="row" id="projects"><h1>Projects</h1>{projectLists}
            </div>
        </div>;
    }
}