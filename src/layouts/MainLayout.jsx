import React, { Component } from 'react'
import Footer from '../components/home/Footer'
import Navbar from '../components/home/Navbar'

class MainLayout extends Component {
    
    render() { 
        return ( <div>
            <Navbar/>
            {this.props.children}
            <Footer/>
        </div> );
    }
}
 
export default MainLayout;