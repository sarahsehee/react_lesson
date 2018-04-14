import React from 'react';

class Switch extends React.Component {
    constructor(props){
        super(props);
        this.state = { clicked:false };
    }

    handleClick = () => {
         this.setState({clicked:!this.state.clicked})
    }

    render(){
        return <div> toggled: {this.state.clicked.toString()} 
        <button onClick = {this.handleClick}></button> </div> 
    }
}

export default Switch