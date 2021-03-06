import React from 'react'
import * as Icon from 'react-feather'
import ReactWOW from 'react-wow'
import Link from '../common/ActiveLink'

export default function AddplaceoneContent() {
    return (
        <React.Fragment>
            <section className="features-area ptb-80 bg-f9f6f6" style={{paddingTop: 100,height:'900px'}}>
                <div className="container">
                    
                    <div className="section-title" style={{marginBottom: 30}}>
                        
                        <h2>Create a new tour!</h2>
                        <p> Select tours from the list below.</p>
                    </div>
                    
                    <div className="mb-4 d-flex justify-content-end ">
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-secondary" type="submit">Search</button>

                            <ul className="navbar-nav nav ml-auto" >
                                <li className="nav-item cart-wrapper">
                                    <Link href="/cart">
                                        <a className="nav-link">
                                            <Icon.ShoppingCart />
                                            {/* <span>{products.length}</span> */}
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </form>
                    </div>
                    
                    
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-features-places">
                                <div className="icon" style={{width: "100px"}}>
                                    <img  src="http://167.99.66.145/pictures/DemoTour/Cork/Cork_1_T.jpg"/>
                                </div>

                                <h3>บ้านกลาง ท่องเที่ยวชุมชน</h3>
                                <p>ภูมิปัญญาอาชีพประจำถิ่นที่สืบทอดมาจากบรรพบุรุษยาวนานกว่า 100 ปี</p>
                                <a href='https://localhost:3001/Cork_record.html' class="btn btn-secondary-guide">create</a> 
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-features-places">
                                <div className="icon" style={{width: "100px"}}>
                                    <img src="http://167.99.66.145/pictures/DemoTour/JWDArtSpace/JWDArtSpace_1_T.jpg"/>
                                </div>

                                <h3>JWD Art Space</h3>
                                <p>ดูแลงานศิลปะของคุณอย่างมีศิลปะ...</p>
                                <a href='https://localhost:3001/JWDArtSpace_record.html' class="btn btn-secondary-guide">create</a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-features-places">
                                <div className="icon bg-c679e3" style={{width: "100px"}}>
                                    <img src="http://167.99.66.145/pictures/DemoTour/Bizotel/Bizotel_1_T.jpg" />
                                </div>

                                <h3>Bizotel</h3>
                                <p>The new compact design city hotel on Rangnam Road</p>
                                <a href='https://localhost:3001' class="btn btn-secondary-guide">create</a>
                            </div>
                        </div>

                        {/* <div className="col-lg-4 col-md-6">
                            <div className="single-features-places">
                                <div className="icon">
                                    <img src="https://storage.googleapis.com/derndoostorage/images/projects/The-Base-Logo.png"/>
                                </div>

                                <h3>Sansiri - The BASE</h3>
                                <p>โครงการใหม่ จากแสนสิริ บนทำเลเพชรเกษม ใกล้รถไฟฟ้า สถานีบางแค</p>
                                <button type="button" class="btn btn-secondary-guide" > create</button>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-features-places">
                                <div className="icon">
                                    <img src="https://storage.googleapis.com/derndoostorage/images/projects/kawa-haus-logo.png"/>
                                </div>

                                <h3>Sansiri – kawa HAUS</h3>
                                <p>คอนโดสไตล์รีสอร์ทริมน้ำใจกลางสุขุมวิท</p>
                                <button type="button" class="btn btn-secondary-guide" > create</button>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-features-places">
                                <div className="icon bg-c679e3">
                                    <img src="https://storage.googleapis.com/derndoostorage/images/projects/the-line-jatujak-mochit-logo.png" />
                                </div>

                                <h3>Plus Property – The Line</h3>
                                <p>โครงการของแสนสิริตรงข้ามสวนจตุจักร</p>
                                <button type="button" class="btn btn-secondary-guide" > create</button>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-features-places">
                                <div className="icon">
                                    <img src="https://storage.googleapis.com/derndoostorage/images/projects/The-Base-Logo.png"/>
                                </div>

                                <h3>Sansiri - The BASE</h3>
                                <p>โครงการใหม่ จากแสนสิริ บนทำเลเพชรเกษม ใกล้รถไฟฟ้า สถานีบางแค</p>
                                <button type="button" class="btn btn-secondary-guide" > create</button>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-features-places">
                                <div className="icon">
                                    <img src="https://storage.googleapis.com/derndoostorage/images/projects/kawa-haus-logo.png"/>
                                </div>

                                <h3>Sansiri – kawa HAUS</h3>
                                <p>คอนโดสไตล์รีสอร์ทริมน้ำใจกลางสุขุมวิท</p>
                                <button type="button" class="btn btn-secondary-guide" > create</button>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-features-places">
                                <div className="icon bg-c679e3">
                                    <img src="https://storage.googleapis.com/derndoostorage/images/projects/the-line-jatujak-mochit-logo.png" />
                                </div>

                                <h3>Plus Property – The Line</h3>
                                <p>โครงการของแสนสิริตรงข้ามสวนจตุจักร</p>
                                <button type="button" class="btn btn-secondary-guide" > create</button>
                            </div>
                        </div> */}
                    </div>
                </div>
                {/* <div className="col-lg-12 col-md-12">
                    <div className="pagination-area">
                        <nav aria-label="Page navigation">
                            <ul className="pagination justify-content-center">
                            
                                <li className="page-item"><a className="page-link" href="#">Prev</a></li>
                                
                                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                
                                <li className="page-item"><a className="page-link" href="#">Next</a></li>
                            </ul>
                        </nav>
                    </div>
                    
                </div> */}
            </section>
            
            {/* <!-- End Features Area --> */}

            
        </React.Fragment>
    )
}
