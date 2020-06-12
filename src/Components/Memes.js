import React, {Component} from "react";
import {Link} from 'react-router-dom'
import axios from 'axios'
import Meme from './Meme'

class Memes extends Component {
    constructor(props){
        super(props)
        this.state = {
            memes: []
        }
        this.reRender = this.reRender.bind(this)
    }

    componentDidMount(){
        this.reRender()
    }

    reRender = () => {
        axios.get('/api/memes')
        .then(res => 
            this.setState({
            memes: res.data
        }))
    }

    render(){
        console.log(this.state.memes)
        return (
            <div className='meme-dashboard'>
                <Link to='/form' className='add-meme-link'>Add A Meme</Link>
                <div className='memes-container'>
                    {this.state.memes.map(element => {
                        return <Meme 
                                    key={element.id}
                                    memeInfo={element}
                                />
                    })}
                </div>
            </div>
        )
    }
}

export default Memes;
