import React from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

const images = [
    {id: 'kosher', src: 'https://www.gravatar.com/avatar/cb7811690d295df620e222d0abd460ed', title: 'Kosher'},
    {id: 'halal', src: 'https://www.gravatar.com/avatar/cb7811690d295df620e222d0abd460ed', title: 'Halal'}
]
class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            restaurants: [{name:'something', city:'london'}],
            lifestyle: {kosher:false, halal:false},
            images: images
        }
        this.onImageClick = this.onImageClick.bind(this)
    }

    onImageClick(id) {
        this.setState(prevState => ({lifestyle: {...prevState.lifestyle, [id]: !prevState.lifestyle[id]}}))
    }

    render() {
        return (
            <div className="App">
                <Header />
                <Main images={this.state.images}
                      lifestyle={this.state.lifestyle}
                      restaurants={this.state.restaurants}
                      onImageClick={this.onImageClick}
                />
                <Footer />
            </div>
        )
    }
}

export default App;
