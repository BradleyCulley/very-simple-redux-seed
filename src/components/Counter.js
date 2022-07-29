import React from 'react';
import {connect} from 'react-redux';

const Counter = (props) => (
    <div>
        <div>Current count: {props.count}</div>
        <button onClick={props.doIncrement}>Increment</button>
    </div>
);

const mapStateToProps = (state) => {
    return {
        count: state.count
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        doIncrement: () => dispatch({
            type: 'INCREMENT'
        })
    }
};

export const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);
