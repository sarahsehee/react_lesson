import React from 'react'
import styled from 'styled-components'

const List = styled.li`
    font-weight: 600;
    font-family: sans-serif;
    margin: 1rem 0;
`

class BucketList extends React.Component {
    render(){
        const ArrayA = this.props.list;
        const ArrayItem = ArrayA.map((number) =>
        <List>{number}</List>
      );
    return <ul>
        {ArrayItem}
        </ul>
    }
}

export default BucketList;