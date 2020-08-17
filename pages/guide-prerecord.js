import React from 'react'
import { Preloader, Placeholder } from 'react-preloading-screen'
import Header from '../components/Layouts/Header'
//import Footer from '../components/Layouts/Footer'
import GoTop from '../components/Layouts/GoTop'
//import PageTitle from '../components/services/PageTitle'
import AddplaceoneContent from '../components/guide-prerecord/AddplaceoneContent'
import DetailsBody from '../components/guide-prerecord/DetailsBody'
import Trash from '../components/guide-prerecord/Trash'


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
                <Trash/>
                <DetailsBody/>
                
                <GoTop scrollStepInPx="50" delayInMs="16.66" />
            </Preloader>
        )
    }
}

export default Addplaceone