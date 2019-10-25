import React from 'react';
import { Card, Icon } from 'semantic-ui-react'

const Quote = (props) => {
    return (
      
        <Card fluid color = 'green'>
            <Card.Content>
                <Card.Description>
                "{props.quote}"
                </Card.Description>
                <Card.Header>
                    — Ron Swanson (Nick Offerman)
                </Card.Header>
                <Card.Meta>
                    <span className='date'>Parks and Recreation</span>
                </Card.Meta>
            </Card.Content>
            <Card.Content extra>
                <a href = ''>
                  <Icon name='like' />
                  200
                </a>
                <div>
                <a href = ''>
                  <Icon name='facebook' />
                </a>
                <a href = ''>
                  <Icon name='twitter' />
                </a>
                </div>
            </Card.Content>
        </Card>
   
    )
}

export default Quote;