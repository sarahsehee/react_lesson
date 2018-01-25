import React from 'react'
import styled, {keyframes} from 'styled-components'

const rotate = keyframes`
100% { transform: rotate(360deg); }
`
const bounce = keyframes`
    0%, 100% { 
      transform: scale(0.0);
    } 50% { 
      transform: scale(1.0);
    }
`

const Wrapper = styled.div`
margin: 100px auto;
width: 40px;
height: 40px;
position: relative;
text-align: center;
animation: ${rotate} 2.0s infinite linear;
`

const Dot = styled.div`
width: 60%;
height: 60%;
display: inline-block;
position: absolute;
top: 0;
background-color: ${(props) => props.background};
border-radius: 100%;
animation: ${bounce} 2.0s infinite ease-in-out;
`

const Dot2 = Dot.extend`
top: auto;
bottom: 0;
animation-delay: -1.0s;
`

const Spinner = (props) => {
    return (
        <Wrapper>
            <Dot background={props.background} />
            <Dot2 background={props.background}/>
        </Wrapper>
    )
}

export default Spinner