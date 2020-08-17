import React from 'react'
import { Preloader, Placeholder } from 'react-preloading-screen'
import Header from '../components/Layouts/Header'
//import Footer from '../components/Layouts/Footer'
import GoTop from '../components/Layouts/GoTop'
//import PageTitle from '../components/services/PageTitle'
import AddplaceoneContent from '../components/addplace-one/AddplaceoneContent'
import PlaceBody from '../components/addplace-one/DetailsBody'

class Addplaceone extends React.Component {
    render() {
        return (
            <Preloader>
                <Placeholder>
                    <div className="preloader">
                        <div className="spinner"></div>
                    </div>
                </Placeholder>
                <Header />
                
                <AddplaceoneContent />
                <PlaceBody/>
                
                <GoTop scrollStepInPx="50" delayInMs="16.66" />
            </Preloader>
        )
    }
}

export default Addplaceone