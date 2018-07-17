import React from 'react'
import styled from 'styled-components'

const CounterText = styled.div`
    color: ${(props)=>props.color};
`

class Counter extends React.Component {
    constructor(props){
        super(props);
        this.state = { counter:props.defaultValue };
    }
    
    handleClickPlus = () => {
        this.setState({counter: this.state.counter + 1 })
    }

    handleClickMinus = () => {
        if (this.state.counter > 0){
        this.setState({counter: this.state.counter - 1 })
        }
    }

    render(){
        return (<div>
            <button onClick={this.handleClickMinus}> - </button>
            <button onClick={this.handleClickPlus}> + </button>
            <CounterText color={(this.state.counter > 10) ? 'red'  : 'black'}> {this.state.counter} </CounterText>
            </div>)
    }
}

export default Counter;