import React from 'react'
import styled from 'styled-components'

const List = styled.li`
    font-weight: 600;
    font-family: sans-serif;
    margin: 1rem 0;
    color: ${(props)=>props.clicked ? "lime" : "black" };
`
const numbers = [1, 2, 3, 4, 5];

const ArrayItem = numbers.map((item) => 
    <List>{item}</List>);

class BucketList extends React.Component {
    render(){
        return <ul> 
            {ArrayItem}
        </ul>
    }
}

export default BucketList