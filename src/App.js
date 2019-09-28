import React from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import ImageCheckBox from './components/ImageCheckBox'


class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            restaurants: [{name:'something', city:'london'}]
        }
    }

    render() {
        return (
            <div className="App">
                <Header />
                <Main props={this.state} />
                <ImageCheckBox src={'https://www.gravatar.com/avatar/cb7811690d295df620e222d0abd460ed'} alt='My gravatar'/>
                <Footer />
            </div>
        )
    }
}

export default App;
