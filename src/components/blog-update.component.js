import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class BlogUpdate extends Component {
  constructor(props) {
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeArticle = this.onChangeArticle.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
    this.onChangeVideo = this.onChangeVideo.bind(this);
    this.onChangeAuthor = this.onChangeAuthor.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        title: '',
        article: '',
        image: '',
        video: '',
        author: '',
        date: new Date(),
        blogs: []
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
          date: new Date(response.data.date)
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://localhost:5000/blog.route/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            blogs: response.data.map(blog => blog.title),
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    })
  }

  onChangeArticle(e) {
    this.setState({
      article: e.target.value
    })
  }

  onChangeImage(e) {
    this.setState({
      image: e.target.value
    })
  }

  onChangeVideo(e) {
    this.setState({
      video: e.target.value
    })
  }

  onChangeAuthor(e) {
    this.setState({
      author: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const blog = {
      title: this.state.title,
      article: this.state.article,
      image: this.state.image,
      video: this.state.video,
      author: this.state.author,
      date: this.state.date
    }

    console.log(blog);

    axios.post('http://localhost:5000/blog.route/update/' + this.props.match.params.id, blog)
      .then(res => console.log(res.data));

    window.location = '/blog';
  }

  render() {
    return (
    <div>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Titre</label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.title}
              onChange={this.onChangeTitle}
              />
        </div>
        <div className="form-group"> 
          <label>Article</label>
            <textarea 
            class="form-control" 
            rows="3"
            value={this.state.article}
            onChange={this.onChangeArticle}
          >
          </textarea>
        </div>
        <div className="form-group">
          <label>Image Url</label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.image}
              onChange={this.onChangeImage}
              />
        </div>
        <div className="form-group">
          <label>Video Url</label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.video}
              onChange={this.onChangeVideo}
              />
        </div>
        <div className="form-group">
          <label>Auteur</label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.author}
              onChange={this.onChangeAuthor}
              />
        </div>
        <div className="form-group">
          <label>Date</label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Modifier" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}