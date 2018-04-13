import React from "react";
import { Link } from "react-router-dom";
import { createHashHistory } from 'history';

class NewPost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newTitle: "",
      newBody: ""
    }

    this.browserHistory = createHashHistory();
  }


  handleChangeTitle = (e) => {
    console.log(e.target.value);
    this.setState({
      newTitle: e.target.value,
    })
  }

  handleChangeBody = (e) => {
    console.log(e.target.value);
    this.setState({
      newBody: e.target.value
    })
  }

  fetchPost = (e) => {
    e.preventDefault()

    return fetch('http://localhost:3000/posts', {
      method: "POST",
      body: JSON.stringify({
        title: this.state.newTitle,
        body: this.state.newBody,
        userId: 9
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(() => {
        this.browserHistory.push('/posts')
        // window.location.href = "#/posts";
      })
  }

  render() {

    return (

      <div className="row container" >
        <form className="col s12 ">
          <h1>NEW POST</h1>
          <div className="row">
            <div className="input-field col s6">
              <input placeholder="Title" type="text" name="newTitle" value={this.state.newTitle} onChange={this.handleChangeTitle} />
              <label htmlFor="first_name"></label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <textarea name="newBody" value={this.state.newBody} onChange={this.handleChangeBody} id="textarea2" placeholder="Content" className="materialize-textarea" data-length="120" ></textarea>
              <label htmlFor="textarea2"></label>
            </div>
          </div>

          <Link to="/" className="waves-effect #bdbdbd grey lighten-1 waves-light btn-large" ><i className="material-icons left">cancel</i>cancel</Link>
          {/* <button className="waves-effect waves-light btn-large"><i className="material-icons right">cancel</i>cancel</button> */}
          <button className="waves-effect #bdbdbd grey lighten-1 waves-light btn-large" onClick={this.fetchPost}><i className="material-icons right">save</i>save</button>


          {/* <Link to="/" className="waves-effect waves-light btn-large" onClick={this.fetchPost}><i className="material-icons right">save</i>save</Link> */}
        </form>
      </div>


    )
  }
}

export default NewPost;