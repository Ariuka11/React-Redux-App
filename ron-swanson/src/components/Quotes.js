import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchingData} from '../actions/action'
import Quote from './Quote'
const Quotes = (props) => {

    useEffect(() => {
        props.fetchingData()
    }, [])
    
    return (
        <div>
            {props.quotes.map(quote => {
                return <Quote
                    key = {quote}   
                    quote = {quote}
                />
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        quotes : state.quotes
    }
}

export default connect(mapStateToProps, {fetchingData})(Quotes);