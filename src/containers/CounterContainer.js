import {
    connect
} from 'react-redux';

import Counter from '../components/Counter';
import { actionIncrement, actionDecrement, actionReset } from '../actions';

// Describe how to translate redux state into react props
function mapStateToProps(state) {
    return {
        count: state.count
    }
}

// Describe how to translate redux dispatch into react props
function mapDispatchToProps(dispatch) {
    return {
        handleIncrement: ()=>{
            dispatch(actionIncrement())
        },
        handleDecrement: ()=>{
            dispatch(actionDecrement())
        },
        handleReset: ()=>{
            dispatch(actionReset())
        }
    }
}