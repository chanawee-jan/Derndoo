import React from 'react'
import FacebookBtn from '../FacebookBtn/Facebook'
import GoogleBtn from '../GoogleBtn/Google'
import OwlCarousel from 'react-owl-carousel3'
import * as Icon from 'react-feather'
import Link from 'next/link'
import Upload from './Upload'

const options = {
    items: 4,
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    responsive: {
        0: {
            items: 1
        },
        786: {
            items: 2
        },
        1200: {
            items: 4
        }
    }
}

export default class MainBanner extends React.Component {

    onFormSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <React.Fragment>
                <div className="main-banner" style={{backgroundImage: "none"}}>
                    <div className="d-table">
                        <div className="d-table-cell">
                            <br/>
                            <br/>
                            <div className="container">
                            
                                <div className="row v-100 justify-content-center align-items-center" style={{margin: "80px 0 50px 0"}}>
                                
                                    <div className="col-lg-5 ">
                                        
                                        <div className="banner-form">
                                            
                                            <div className="section-title">
                                                <h2> User Register </h2>
                                            </div>
                                            <form onSubmit={this.onFormSubmit}>
                                                <div className="form-group">
                                                    <label>Username</label>
                                                    <input type="text" className="form-control" placeholder="Enter username" />
                                                </div>

                                                <div className="form-group">
                                                    <label>Password</label>
                                                    <input type="password" className="form-control" placeholder="Create a password" />
                                                </div>
                                                
                                                <div className="form-group">
                                                    <label>Re-Password</label>
                                                    <input type="password" className="form-control" placeholder="Re-enter a password" />
                                                </div>
                                        
                                                <div className="form-group">
                                                    <label>Email</label>
                                                    <input type="email" className="form-control" placeholder="Enter your email" />
                                                </div>

                                                <button type="submit" className="btn btn-primary">Register Now</button>
                                                
                                            </form>
                                            <FacebookBtn/>
                                            <GoogleBtn/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

