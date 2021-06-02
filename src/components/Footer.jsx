import React, { Component } from 'react';
import { db } from '../firebase/firebase';
import { Button, Form , InputGroup } from 'react-bootstrap';

class Footer extends Component {
    state = {feedback: ""}

    onSubmit = event => {
        const { feedback } = this.state;
            db.ref('feedbacks').push().set({ feedback: feedback })
            .then(()=> {
                alert("Thank you so much for taking the time to send us your valuable feedback!");
                this.setState({ feedback: "" });
            })
            .catch(e =>{
                alert(e.message);
            });
            event.preventDefault();
    }

    render() {
        const { feedback } = this.state;
        const Invalid = feedback === "";
        return (<div id="ourfooter">
            <br/>
            <footer>
                <div class="container-foot">
                    <section class="ft-main">
                        <div class="ft-main-item">
                        <h2 class="ft-title">ABOUT</h2>
                        <ul>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Customers</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                        </div>
                        <div class="ft-main-item">
                        <h2 class="ft-title">RESOURCES</h2>
                        <ul>
                            <li><a href="#">Docs</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">eBooks</a></li>
                            <li><a href="#">Webinars</a></li>
                        </ul>
                        </div>
                        <div class="ft-main-item">
                        <h2 class="ft-title">CONTACT</h2>
                        <ul>
                            <li><a href="#">Help</a></li>
                            <li><a href="#">Sales</a></li>
                            <li><a href="#">Advertise</a></li>
                        </ul>
                        </div>
                        <div id="ourfeedback" class="ft-main-item">
                            <h2 class="ft-title">FEEDBACK</h2>
                            <p style={{color: "white"}}>Send your valuable feedback</p>
                            <Form onSubmit={this.onSubmit}>
                                <InputGroup style={{width: "75%"}}>
                                    <Form.Control id="feedbackstyletext" type="textarea" name="feedback" placeholder=" Enter your feedback"
                                    value={feedback}
                                    onChange={(e)=> this.setState({feedback: e.target.value})
                                    }/>
                                </InputGroup>
                                <Button id="feedbackstylebutton" type="submit" disabled={Invalid}>Send</Button>
                            </Form>
                        </div>
                    </section>

                    <section class="ft-social">
                        <ul class="ft-social-list">
                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i class="fa fa-github"></i></a></li>
                        <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                        </ul>
                    </section>
                    <section class="ft-legal">
                        <ul class="ft-legal-list">
                        <li><a href="#">Terms &amp; Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li style={{color: "white"}}>&copy; 2021 Copyright Team----------</li>
                        </ul>
                    </section>
                </div>
            </footer>
        </div>);
    }
    
}

export default Footer;