import React from 'react'
import styled from 'styled-components'


const Check = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 5px;
    background-color: ${(props)=> props.checked ? "green" : "black"} ;
`


class Checkbox extends React.Component {
    constructor(props){
        super(props);
        this.state = { checked:false };
    }

    handleClick = () => {
        this.setState({checked: !this.state.checked})
    }

    render(){
        return <Check onClick = {this.handleClick} checked = {this.state.checked}> {this.state.checked.toString()} </Check>
    }
}

export default Checkbox

