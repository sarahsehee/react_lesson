import React from 'react'
import styled from 'styled-components'



const Hwbutton = styled.button`
margin-right: 8px;
margin-bottom: 12px;
color: #1890ff;
line-height: 1.5;
display: inline-block;
font-weight:400;
cursor: pointer;
border: 1px solid transparent;
padding: 0 15px;
font-size: 14px;
border-radius: 4px;
height: 32px;
`


const Button = (props) => {
    return (
        <Hwbutton type={props.type}/>
    )
}


export default Button