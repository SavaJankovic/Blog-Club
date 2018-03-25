import React from "react";
import { Link } from "react-router-dom";
import "./SingleAuthor.css";
import { service } from "./../services/fetchService";

class SingleAuthor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      single: {}
    }

  }


  componentDidMount() {
    service.fetchSingleAuthor(this.props.match.params.id)
      .then(singleAuthor => {
        console.log(singleAuthor);

        this.setState({
          single: singleAuthor
        })
      })
  }

  renderIframe = () => {
    if (!this.state.single.address) {
      return;
    }

    return (
      <React.Fragment>

   <div className="card-stacked">
          <div className="card-content">
            <h5>ADDRESS</h5>
         
            <p>Street: {this.state.single.address.street}</p>
            <p>City: {this.state.single.address.city}</p>
            <p>Zipcode: {this.state.single.address.zipcode}</p>
         
          </div>
        </div>

        <div className="card-image">
          {/* <iframe
            src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11322.276616522473!2d${this.state.single.address.geo.lng}!3d${this.state.single.address.geo.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2srs!4v1521898884474`}
            width="300"
            height="300"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen></iframe> */}
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d176.9090889022772!2d20.46211521305976!3d44.81045201694973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aaf1f73ded9%3A0xded33187d4424d79!2sKralja+Milana+10%2C+Beograd+11000!5e0!3m2!1sen!2srs!4v1521981053776" 
            width="472" 
            height="381" 
            frameBorder="0" 
            style={{border:0}} 
            allowFullScreen>
            </iframe>
        </div>
     
      </React.Fragment>
    )
  }
  renderCompany = () => {
    if (!this.state.single.company) {
      return;
    }

    return (
      <React.Fragment>
        <div className="card-stacked">
          <div className="card-content">
            <h5>Company</h5>
            <p> Name: {this.state.single.company.name}</p>
            <p> Slogan: {this.state.single.company.catchPhrase}</p>
          </div>
        </div>
      </React.Fragment>
    )
  }




  render() {
    const { name } = this.state.single;

    return (

      <div className="container" >
        <Link to="/authors" className="waves-effect waves-light btn-large "><i className="material-icons left">backspace</i>back</Link>
        <div className="col s12 m7">
          <div className="card horizontal">
            <div className="card-image">
              <img src="https://neilpatel-qvjnwj7eutn3.netdna-ssl.com/wp-content/uploads/2018/03/how-writers-improve-blogging-skills.jpg" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h5>{name}</h5>
                <p>Username: {this.state.single.username}</p>
                <p>Email: {this.state.single.email}</p>
                <p>Phone: {this.state.single.phone}</p>

              </div>

            </div>
          </div>
        </div>
        <hr />
        <div className="col s12 m7">
          <div className="card horizontal">

            {this.renderIframe()}

          </div>
          <hr />

          <div className="col s12 m7 guraj">

            <div className="card horizontal">

              {this.renderCompany()}
            </div>
          </div >
          <div className="newAuthor center">
            <Link to="/newpost" className="waves-effect waves-light btn-large "><i className="material-icons right">save</i>New Post</Link>
          </div>

        </div>
      </div>

    )
  }
}
export default SingleAuthor;