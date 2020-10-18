import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Blog = props => (
  <div className="col-md-12 margin" style={{ marginBottom: '20px'}}>
            <div className="row block">
                <div className="col-md-5">
                    <h4>{props.blog.title}</h4>
                    <p>{props.blog.article}</p>
                </div>
                <div className="col-md-3">
                    <p style={{ marginTop: '10px' }}>Ecrit par : {props.blog.author}</p>

                    <p>Publié le : {props.blog.date.substring(0,10)}</p>

                    <p>

                      <Link to={"/update/"+props.blog._id} style={{ textDecoration: 'none'}}>Modifier</Link> | <a href="#" onClick={() => { props.deleteBlog(props.blog._id) }}style={{ textDecoration: 'none'}}>Supprimer</a>
                      
                    </p>

                </div> 
                <div className="col-md-4">
                    <img src={props.blog.image} style={{ width: '100%', marginTop: '10px' }}/>
                </div>
                        
            </div>
        </div>

)

export default class BlogList extends Component {
  constructor(props) {
    super(props);

    this.deleteBlog = this.deleteBlog.bind(this)

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

  deleteBlog(id) {
    axios.delete('http://localhost:5000/blog.route/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      blogs: this.state.blogs.filter(el => el._id !== id)
    })
  }

  blogList() {
    return this.state.blogs.map(currentblog => {
      return <Blog blog={currentblog} deleteBlog={this.deleteBlog} key={currentblog._id}/>;
    })
  }

  render() {
    return (
      <div>
        
            { this.blogList() }
         
      </div>
    )
  }
}