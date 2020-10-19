import React, {Component}from 'react';
import axios from 'axios';

class Home extends Component {

    state = {
        post: []
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then( response => {
            this.setState({
                post: response.data.slice(0,10)
            })
            console.log (typeof(this.state.post))
        })
    }
    render () {
        
        return (
            <div className='container'>
                <h4 className='center'>Home</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero beatae incidunt. Optio, eos. Dolore vel repellendus itaque numquam provident non distinctio, libero sunt cum perspiciatis dolorem commodi facilis quod. </p>
            </div>
    
        )
    }
  
}

export default Home;