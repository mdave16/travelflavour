import React, {Component} from 'react'
import PhotoButton from './PhotoButton'

class ImageCheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {selected: false}
		this.select = this.select.bind(this)
  }

	select () {
		this.setState({
			selected: !this.state.selected
		})
	}

  render() {
		return (
      <PhotoButton action={this.select} src={this.props.src} alt={this.props.alt} />
		)
  }
}

export default ImageCheckBox
