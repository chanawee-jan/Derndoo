import React, { Component } from 'react';
import * as Icon from 'react-feather';
import ReactWOW from 'react-wow'

class About extends Component {
    render() {
        return (
            <section className="repair-about-area ptb-20" style={{backgroundColor: '#f9f6f6'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                        </div>
                        <div className="col-lg-9">
                            <div className="repair-about-content">
                                <h2>Unwanted rooms</h2>
                                <ul>
                                    <li><span><Icon.ArrowUp /> Swimming pool</span></li>
                                    <li><span><Icon.ArrowUp /> Room3</span></li>
                                    <li><span><Icon.ArrowUp /> Parking Lot</span></li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;
