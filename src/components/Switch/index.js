import React from 'react';
import styled from 'styled-components';


const SwitchButton = styled.button`
    width: 200px;
    height: 50px;
    border-radius: 5px;
background-color: ${(props)=> props.switched? "blue" : "red"};
`

class Switch extends React.Component {
    constructor(props){
        super(props);
        this.state = { switched:false };
    }

    handleClick = () => {
         this.setState({switched:!this.state.switched})
    }

    render(){
        return <SwitchButton onClick = {this.handleClick} switched = {this.state.switched}>button</SwitchButton> 
    }
}

export default Switch