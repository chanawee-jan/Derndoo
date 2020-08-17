import React from 'react'
import OwlCarousel from 'react-owl-carousel3'
import * as Icon from 'react-feather'
import Link from 'next/link'
import Upload from './Upload'
import AuthService from "../../services/auth.service";
import { useForm } from "react-hook-form";

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

export default function MainBanner()  {

    const { register, handleSubmit , errors } = useForm();
    const onSubmit = data => {
        console.log(data);
        AuthService.register(data.username, data.email, data.password, data.title, data.firstname, data.lastname,  data.mobile, data.natid, data.address).then(
            (response) => {
                console.log(response);
                // setMessage(response.data.message);
                // setSuccessful(true);
              },
              (error) => {
                const resMessage =
                  (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                  error.message ||
                  error.toString();
                    
                console.log("Unsuccessful");
                console.log(resMessage);
                // setMessage(resMessage);
                // setSuccessful(false);
              }
            );
    }  


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
                                            <h2> Guide Register </h2>
                                        </div>
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <div className="form-group">
                                                <label>Username</label>
                                                <input type="text" className="form-control" placeholder="Enter username" name="username" ref={register({ required: true, maxLength: 20 })}/>
                                                {errors.username && "Username is required"}
                                            </div>
                                            
                                            <div className="form-group">
                                                <label>Email</label>
                                                <input type="email" className="form-control" placeholder="Enter your email" name="email" ref={register({ required: true, maxLength: 40 })}/>
                                                {errors.username && "Username is required"}
                                            </div>

                                            <div className="form-group">
                                                <label>Password</label>
                                                <input type="password" className="form-control" placeholder="Create a password" name="password" ref={register({ required: true, maxLength: 20 })}/>
                                                {errors.username && "Username is required"}
                                            </div>
                                            
                                            {/* <div className="form-group">
                                                <label>Re-Password</label>
                                                <input type="password" className="form-control" placeholder="Re-enter a password" name="username" ref={register({ required: true, maxLength: 20 })}/>
                                                {errors.username && "Username is required"}
                                            </div> */}

                                            <div className="form-group" >
                                                <label>Title</label>
                                                <input type="title" className="form-control" placeholder="Create a title" name="title" ref={register({ required: true, maxLength: 20 })}/>
                                                {errors.username && "Username is required"}
                                            </div>

                                            <div className="form-group">
                                                <label>First Name</label>
                                                <input type="firstname" className="form-control" placeholder="Enter your first name" name="firstname" ref={register({ required: true, maxLength: 20 })}/>
                                                {errors.username && "Username is required"}
                                            </div>

                                            <div className="form-group">
                                                <label>Last Name</label>
                                                <input type="lastname" className="form-control" placeholder="Enter your last name" name="lastname" ref={register({ required: true, maxLength: 20 })}/>
                                                {errors.username && "Username is required"}
                                            </div>

                                            <div className="form-group">
                                                <label>Mobile</label>
                                                <input type="mobile" className="form-control" placeholder="Enter your mobile number" name="mobile" ref={register({ required: true, maxLength: 20 })}/>
                                                {errors.username && "Username is required"}
                                            </div>

                                            <div className="form-group">
                                                <label>National ID</label>
                                                <input type="natid" className="form-control" placeholder="Enter your national id" name="natid" ref={register({ required: true, maxLength: 20 })}/>
                                                {errors.username && "Username is required"}
                                            </div>

                                            <div className="form-group">
                                                <label>Address</label>
                                                <input type="address" className="form-control" placeholder="Enter your address" name="address" ref={register({ required: true, maxLength: 20 })}/>
                                                {errors.username && "Username is required"}
                                            </div>

                                            {/* <div className="form-group">
                                                <label>Province</label>
                                                <input type="province" className="form-control" placeholder="Enter your province" />
                                            </div>

                                            <div className="form-group">
                                                <label>Zipcode</label>
                                                <input type="zipcode" className="form-control" placeholder="Enter your zipcode" />
                                            </div>

                                            <div className="form-group">
                                                <label>Bank Name</label>
                                                <input type="bankname" className="form-control" placeholder="Enter your bank name" />
                                            </div>

                                            <div className="form-group">
                                                <label>Bank Account</label>
                                                <input type="bankaccount" className="form-control" placeholder="Enter your bank account" />
                                            </div>

                                            <div className="form-group">
                                                <label>Upload your image</label>
                                                <Upload></Upload>
                                            </div> */}

                                            <button type="submit" className="btn btn-primary">Register Now</button>
                                        </form>
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

