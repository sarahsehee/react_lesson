import React from "react";
import styled from "styled-components";

const Hwbutton = styled.button`
  margin-right: 8px;
  margin-bottom: 12px;
  color: ${(props) => props.textcolor};
  background-color: ${(props) => props.background};
  line-height: 1.5;
  display: inline-block;
  font-weight: 400;
  border: 1px solid transparent;
  padding: 0 15px;
  font-size: 14px;
  border-radius: 4px;
  height: 32px;
`;

class Button extends React.Component {
  render() {
    let color = ''
        if (this.props.type === 'danger') {
            color = '#f5222d'
        } else if (this.props.type === 'primary') {
            color = 'white'
        } else {
            color = 'green'
        }
    let back = ''
        if (this.props.type === 'danger') {
            back = '#f5f5f5'
        } else if (this.props.type === 'primary'){
            back = '#1890ff'
        } else {
            back = 'white'
        }

    return (
      <Hwbutton onClick={this.handleClick} textcolor={color} background={back}>
        {this.props.children}
      </Hwbutton>
    );
  }
}

export default Button;
