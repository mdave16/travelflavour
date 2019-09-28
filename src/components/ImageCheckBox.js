import React, {Component} from 'react'
import PhotoButton from './PhotoButton'
import Button from "@kiwicom/orbit-components/lib/Button";
import './ImageCheckBox.css'

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
        const {images} = this.props
        return (
            <React.Fragment>
                {
                    images.map(({id, src, title}) => (
                        <PhotoButton id={id} action={() => this.onSelect(id)} src={src} alt={title} />
                    ))
                }
                <div className="submit-button">
                    <Button onClick={this.props.onSubmit()} title="Submit" />
                </div>
            </React.Fragment>
        )
    }
}

export default ImageCheckBox
