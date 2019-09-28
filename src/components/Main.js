import React, {Fragment} from 'react'

export default function Main({props}) {

    return (
        <Fragment>
            <p>Hello {props.restaurants[0].name}</p>
        </Fragment>
)
}
