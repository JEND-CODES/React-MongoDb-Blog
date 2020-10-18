import React, { Component } from 'react';
import axios from 'axios';

export default class BlogRead extends Component {
  constructor(props) {
    super(props);

    this.state = {
        title: '',
        article: '',
        image: '',
        video: '',
        author: '',
        date: '',
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/blog.route/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          title: response.data.title,
          article: response.data.article,
          image: response.data.image,
          video: response.data.video,
          author: response.data.author,
          date: response.data.date
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

  }

  render() {
    return (
    <div>
      
        <h2>{this.state.title}</h2>

        <img src={this.state.image} style={{ width: '100%', marginBottom: '20px' }}/>

        <p>{this.state.article}</p>

        <p>Lien vidéo : {this.state.video}</p>

        <p>Ecrit par : {this.state.author}</p>
          
        <p>Publié le : {this.state.date.substring(0,10)}</p>
        
    </div>
    )
  }
}