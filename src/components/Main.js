import React, {Fragment} from 'react'
import ImageCheckBox from "./ImageCheckBox";

export default function Main(props) {
    return (
        <Fragment>
            <p>Hello {props.restaurants[0].name}</p>
            <ImageCheckBox {...props} />
        </Fragment>
    )
}
