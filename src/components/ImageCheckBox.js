import React, {Component} from 'react'
import PhotoButton from './PhotoButton'

class ImageCheckBox extends Component {
    constructor(props) {
        super(props);
        this.state = {selected: false}
        this.onSelect = this.onSelect.bind(this)
    }

    onSelect(id) {
        this.setState({selected: !this.state.selected})
        this.props.onImageClick(id)
    }

    render() {
        console.log(this.props)
        const {images} = this.props
        return (
            <React.Fragment>
                {
                    images.map(({id, src, title}) => (
                        <PhotoButton id={id} action={() => this.onSelect(id)} src={src} alt={title} />
                    ))
                }
            </React.Fragment>
        )
    }
}

export default ImageCheckBox
