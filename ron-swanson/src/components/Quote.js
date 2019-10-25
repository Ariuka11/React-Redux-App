import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import image from '../image/swanson'
const Quote = (props) => {
    return (
        <Card color = 'olive'>
             <Image src = {image} wrapped ui={false} />
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
                <a>
                  <Icon name='facebook' />
                </a>
                <a>
                  <Icon name='twitter' />
                </a>
            </Card.Content>
        </Card>
    )
}

export default Quote;