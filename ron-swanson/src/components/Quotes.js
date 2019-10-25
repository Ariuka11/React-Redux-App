import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchingData} from '../actions/action'
import Quote from './Quote'
import { Card } from 'semantic-ui-react'
import image from './image/ron.png'

const Quotes = (props) => {

    useEffect(() => {
        props.fetchingData()
    }, [])
    
    return (
        <div className = 'quote'>
            <header>
                <h1>Ron Swanson's Famous Quotes </h1>
                <img src ={image}/>
            </header>
        <Card.Group itemsPerRow={2}>
            {props.quotes.map(quote => {
                return <Quote
                    key = {quote}   
                    quote = {quote}
                />
            })}
        </Card.Group>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        quotes : state.quotes
    }
}

export default connect(mapStateToProps, {fetchingData})(Quotes);