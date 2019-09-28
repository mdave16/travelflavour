import React from 'react'
import './PhotoButton.css'

export default function PhotoButton (props) {
     return <img className='img-button' onClick={props.action} src={props.src} alt={props.alt}/>
}
