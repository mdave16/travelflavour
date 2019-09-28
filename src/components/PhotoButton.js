import React from 'react'

export default function PhotoButton (props) {
     return <img onClick={props.action} src={props.src} alt={props.alt}/>
}
