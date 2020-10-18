import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Posts = props => (
        <div className="col-md-12 margin" style={{ marginBottom: '20px'}}>
            <div className="row block">
                <div className="col-md-6">
                    <h4>{props.blog.title}</h4>
                    <p>{props.blog.article}</p>
                    <Link to={"/read/"+props.blog._id}>Lire ce post</Link>
                </div>
                <div className="col-md-6">
                    <img src={props.blog.image} style={{ width: '100%' }}/>
                </div>         
            </div>
        </div>
  )

export default class BlogHome extends Component {
  constructor(props) {
    super(props);

    this.state = {blogs: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/blog.route/')
      .then(response => {
        this.setState({ blogs: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  blogPosts() {
    return this.state.blogs.map(currentblog => {
      return <Posts blog={currentblog} key={currentblog._id}/>;
    })
  }

  render() {
    return (
        <div className="container">
            <div className="row">
                { this.blogPosts() }
            </div>
        </div>
    )
  }
}