import React from 'react'
import Link from 'next/link'
import * as Icon from 'react-feather'
import Upload from './Upload'

export default class PlaceBody extends React.Component {

    state = {
        comments: [
            { id: null, name: 'Meeting with Aaron Rossi', comment: 'Meeting with Aaron Rossi' }
        ],
        name: '',
        comment: ''
    };

    onHandleSubmit = (e) => {
        e.preventDefault();
        if (!this.state.name.length) {
            return;
        }

        const newComment = {
            name: this.state.name,
            comment: this.state.comment,
            id: Date.now()
        };

        this.setState(state => ({
            comments: state.comments.concat(newComment),
            name: '',
            comment: ''
        }));

        // console.log(this.state.comments)
    }

    render() {
        return (
            <section className="blog-details-area ptb-20">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 offset-lg-2">          
                            <div className="leave-a-reply">
                                <h3>Fill tour information</h3>
                                <form onSubmit={this.onHandleSubmit}>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    placeholder="Tour name" 
                                                    value={this.state.name}
                                                    onChange={e => this.setState({name: e.target.value})}
                                                />
                                            </div>
                                        </div>                        
                                        
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <textarea 
                                                    name="comment" 
                                                    cols="30" 
                                                    rows="5" 
                                                    className="form-control" 
                                                    placeholder="Tour description" 
                                                    value={this.state.comment}
                                                    onChange={e => this.setState({comment: e.target.value})}
                                                />
                                            </div>
                                        </div>
                                                                                                                      
                                        <div className="col-lg-12 col-md-12">
                                            <button type="submit" className="btn btn-primary">Start tour!</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
    