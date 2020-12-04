import React, { Component } from 'react'
import axios from 'axios';
import phone from '../assets/icons/phone.png'
import email from '../assets/icons/mail.png'
import location from '../assets/icons/location.png'
import '../css/contact.css'

export default class CreateMail extends Component {
    constructor(props) {  
        super(props); 
        
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmailAddress = this.onChangeEmailAddress.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);    

        this.state = {  
          firstname: '',  
          lastname: '',  
          emailaddress: '',  
          description: '',  
          mail: []
        }  
      }

    componentDidMount() {
        this.setState({
            mail: ['test mail'],
        })
    }

    onChangeFirstName(e) {
        this.setState({
            firstname: e.target.value
        });
    }
    
    onChangeLastName(e) {
        this.setState({
            lastname: e.target.value
        });
    }

    onChangeEmailAddress(e) {
        this.setState({
            emailaddress: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const mail = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            emailaddress: this.state.emailaddress,
            description: this.state.description
        }

        console.log(mail);

        axios.post('http://localhost:5000/mail/add', mail)
            .then(res => console.log(res.data));
            

        // window.location = '/';
    }

    render() {
        return (
            <div>
                <div className="contact-header-container container" id="container">
                <div className="line"></div>
                    <h1 className="text-center mb-5">
                        Questions?
                        <br/>
                        <span>Contact Us</span>
                    </h1>
                    <p className="text-center mb-5 mt-5">Aliqua occaecat ea laborum culpa deserunt Lorem sint.</p>
                    <div className="row mb-5 text-center">
                        <div className="col">
                            <img className="mr-2" style={{width:'3rem'}}src={phone}/>
                            <h4 style={{display: 'inline-block'}}>1-800-555-3692</h4>
                        </div>
                        <div className="col">
                            <img className="mr-2" style={{width:'3rem'}}src={email}/>
                            <h4 style={{display: 'inline-block'}}>Explorecincy@explore.com</h4>
                        </div>
                        <div className="col">
                            <img className="mr-2" style={{width:'3rem'}}src={location}/>
                            <h4 style={{display: 'inline-block'}}>Cincinnati, Ohio</h4>
                        </div>
                    </div>
                    <div className="formBackground"></div>
                    <div className="formOutline mr-5 pt-4 float-right">
                        <form className="contactForm" onSubmit={this.onSubmit}>
                            <div className="form-group"> 
                                <div className="row">
                                    <div className="col">
                                        <input  type="text"
                                        required
                                        className="form-control"
                                        placeholder="First Name"
                                        value={this.state.firstname}
                                        onChange={this.onChangeFirstName}
                                        />
                                    </div>
                                    <div className="col">
                                        <input  type="text"
                                        required
                                        className="form-control"
                                        placeholder="Last Name"
                                        value={this.state.lastname}
                                        onChange={this.onChangeLastName}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control"
                                    placeholder="Email Address"
                                    value={this.state.emailaddress}
                                    onChange={this.onChangeEmailAddress}
                                    />
                            </div>
                            <div className="form-group">
                                <textarea 
                                    type="text" 
                                    className="form-control form-description"
                                    placeholder="Description"
                                    value={this.state.description}
                                    onChange={this.onChangeDescription}
                                />
                            </div>
                    
                            <div className="form-group text-center">
                                <input type="submit" value="Submit" className="btn w-50 contactSubmit" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="map-section">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198060.24152220497!2d-84.68048565378399!3d39.13625621321902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884051b1de3821f9%3A0x69fb7e8be4c09317!2sCincinnati%2C%20OH!5e0!3m2!1sen!2sus!4v1607029001270!5m2!1sen!2sus" width="100%" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
            </div>
        )
    }
}
