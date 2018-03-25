import React from "react";
import { Link } from "react-router-dom";
import { service } from "./../services/fetchService";
import "./SinglePost.css";


class SinglePost extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      singlePost: {}
    }
  }

  componentDidMount() {
    service.fetchSinglePost(this.props.match.params.id)
      .then(singlePost => {
        console.log(singlePost);

        this.setState({
          singlePost: singlePost
        })
      })
  }
  render() {
    return (

      <div className="container col s12 m6 center  ">
        <Link to="/posts" className="waves-effect waves-light btn-large"><i className="material-icons left">backspace</i>back</Link>
        <div className="card-content">
          <h3><Link to="/posts" >{this.state.singlePost.title}</Link></h3>
          <Link to="/authors/1" className="title">Author Name</Link>
          <p>{this.state.singlePost.body}</p>
          <hr />
        </div>
          <h5>3 more posts from same  author</h5>
        <div className="card-content ">
          <div className="act" id="test4"> <Link to="/posts">title 11 - velit, vulpate</Link></div>
          <div  className="act" id="test5"> <Link to="/posts">title 11 - velit, vulpate</Link></div>
          <div  className="act" id="test6"> <Link to="/posts">title 11 - velit, vulpate</Link></div>
        </div>
      </div>

    )
  }
}

export default SinglePost;

