import React from 'react';
import { Preloader, Placeholder } from 'react-preloading-screen';
import Render from '../components/view/render';
//import { Preloader, Placeholder } from 'react-preloading-screen'
import NoSSR from 'react-no-ssr'

export default () => (
    <NoSSR>
        <Preloader>
            <Placeholder>
                <div className="preloader">
                    <div className="spinner"></div>
                </div>
            </Placeholder>
            <Render style={{height:"100%" ,width:"100%" }}>

            </Render>
        </Preloader>
    </NoSSR>
)