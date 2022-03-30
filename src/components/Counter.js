import React from 'react';
import {connect} from 'react-redux';

const Counter = (props) => (
  <div>
    <div>Current count: {props.count}</div>
    <button onClick={props.onClick}>Increment</button>
  </div>
);

const mapStateToProps = (state) => ({
    count: state.count
});

const mapDispatchToProps = (dispatch) => ({
    onClick: () => dispatch({
        type: 'INCREMENT'
    })
});

export const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
