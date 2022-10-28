import React from 'react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

export default function Spinner() {
    return (
        <>
            <Segment className='spinner-bg'>
                <Dimmer active inverted>
                    <Loader inverted content='Loading' />
                </Dimmer>
            </Segment>
        </>

    )
}



