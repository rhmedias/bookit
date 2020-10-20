import React, { Component } from 'react'
import Herobox from '../components/home/Herobox'
import Partners from '../components/home/Partners'


class Home extends Component {
    state = {  }
    render() { 
        return ( <div>
            
            <Herobox/>
            <Partners/>
            
        </div> );
    }
}
 
export default Home;