import React from 'react';
import styled from 'styled-components';

const Radio = styled.button`
    background-color: ${(props)=>props.clicked ? "lime" : "white"};
`

class RadioButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {  
            clicked1: false,
            clicked2: false,
            clicked3: false
        };
    }

    handleClicked1 = () => {
        this.setState({
            clicked1: !this.state.clicked1,
            clicked2: false,
            clicked3: false
        })
    }

    handleClicked2 = () => {
        this.setState({
            clicked1: false,
            clicked2: !this.state.clicked2,
            clicked3: false
        })
    }
    
    handleClicked3 = () => {
        this.setState({
            clicked1: false,
            clicked2: false,
            clicked3: !this.state.clicked3
        })
    }

    render() {
        return <div>
        <Radio onClick={this.handleClicked1} clicked={this.state.clicked1}> Button 1 </Radio>
        <Radio onClick={this.handleClicked2} clicked={this.state.clicked2} > Button 2 </Radio>
        <Radio onClick={this.handleClicked3} clicked={this.state.clicked3} > Button 3 </Radio>
        </div>
    }
}


export default RadioButton;