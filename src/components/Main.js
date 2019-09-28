import React from 'react'
import ImageCheckBox from "./ImageCheckBox";
import './Main.css'

export default function Main(props) {
    return (
        <div>
            <p>Hello Gator</p>
            <h3 className='Main-component-h4'>Select your lifestyle requirements</h3>
            <ImageCheckBox {...props} />
        </div>
    )
}
