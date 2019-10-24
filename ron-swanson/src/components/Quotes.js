import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchingData} from '../actions/action'

const Quotes = (props) => {

    useEffect(() => {
        props.fetchingData()
    }, [])
    
    return (
        <div>
            Quotes Here
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        
    }
}

export default connect(mapStateToProps, {fetchingData})(Quotes);