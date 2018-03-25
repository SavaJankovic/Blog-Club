import React from "react";
import { Link, Route } from "react-router-dom";
import { service } from "./../services/fetchService";
import "./Main.css"

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }


  fetchPosts = () => {
    service.fetchPost() 
      .then(postObj => {
        this.setState({
          posts: postObj

        })
      })
  }

  componentDidMount() {
    this.fetchPosts();
  }

  renderPost = (post) => {
    return (
      <div className="col s12 m12 center ">
        <div className="card #26a69a teal lighten-1  ">

          <Link to={`/posts/${post.id}`} className="card-content white-text " key={post.id}>
          <br/>
           <i className="medium material-icons">fingerprint</i> 
           <br/>
            <span className="card-title">"{post.title}"</span>
            <h5>Description: </h5>

            <h5>{post.body}</h5>

          </Link>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="  container " >
        <div className="row">


          {this.state.posts.map((post) => this.renderPost(post))}

        </div>
      </div>
    )
  }

}

export default Main;