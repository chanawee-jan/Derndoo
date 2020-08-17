import React from 'react'
import FacebookBtn from '../FacebookBtn/Facebook'
import GoogleBtn from '../GoogleBtn/Google'
import { useForm } from "react-hook-form";

import AuthService from "../../services/auth.service";
import { ErrorMessage } from 'formik';
import { useRouter } from 'next/router'
// import OwlCarousel from 'react-owl-carousel3'
// import * as Icon from 'react-feather'
//import Link from 'next/link'
//import Upload from './Upload'


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

export default function App() {
    const router = useRouter()
    const { register, handleSubmit , errors } = useForm();
    //const onSubmit = (data,e) => console.log(data,e);
    const onSubmit = data => {
        console.log(data)
        AuthService.login(data.username, data.password).then(
          () => {
            router.push("/profile");
            window.location.reload();
          },
          error => {
            const resMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
                
            console.log("Wrong username or password");
            // setState({
            //   loading: false,
            //   message: resMessage
            // });
          }
        );
    } ;
    // else {
    // this.setState({
    //     loading: false
    // });
    // }
    


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
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <div className="form-group">
                                                {/* <label>Username</label> */}
                                                <input type="text" className="form-control" placeholder="Username" name="username" ref={register({ required: true, maxLength: 20 })}/>
                                                {errors.username && "Username is required"}
                                            </div>
                                            

                                            <div className="form-group">
                                                {/* <label>Password</label> */}
                                                <input type="password" className="form-control" placeholder="Password" name="password" ref={register({ required: true, maxLength: 20 })} />
                                                {errors.password && "Password is required"}
                                            </div>
                                                                                    
                                            <button type="submit" className="btn btn-primary">Login</button>
                                            
                                        </form>
                                        <div className="row">
                                            <div className="col-6">
                                                <FacebookBtn/>
                                            </div>
                                            <div className="col-6">
                                                <GoogleBtn/>
                                            </div>
                                        </div>                       
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

