import React, { Component } from "react";
import Field from "../Common/Field";
import { withFormik } from "formik";

const fields = {
  sections: [
    [
      {
        name: "name",
        elementName: "input",
        type: "text",
        placeholder: "Your name*",
      },
      {
        name: "email",
        elementName: "input",
        type: "text",
        placeholder: "Your email*",
      },
      {
        name: "phone",
        elementName: "input",
        type: "text",
        placeholder: "Your phone number*",
      },
    ],
    [
      {
        name: "message",
        elementName: "textarea",
        type: "text",
        placeholder: "Type your message*",
      },
    ],
  ],
};

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };
  }
  submitForm = (e) => {
    e.preventDefault();
    alert("Message has been sent, Thank you.");
  };
  render() {
    return (
      <>
        <section className="page-section" id="contact">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">Contact Us</h2>
              <h3 className="section-subheading text-muted">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
            <form id="contactForm" data-sb-form-api-token="API_TOKEN">
              <div className="form-group">
                {fields.sections.map((sections, sectionIndex) => {
                  console.log(
                    "Rendering Section",
                    sectionIndex,
                    "with",
                    sections
                  );
                  return (
                    <div className="cold-md-6" key={sectionIndex}>
                      {sections.map((field, index) => {
                        return (
                          <Field
                            {...field}
                            key={index}
                            value={this.state[field.name]}
                            onChange={(e) =>
                              this.setState({
                                [field.name]: e.target.value,
                              })
                            }
                          />
                        );
                      })}
                    </div>
                  );
                })}
              </div>

              <div className="d-none" id="submitSuccessMessage">
                <div className="text-center text-white mb-3">
                  <div className="fw-bolder">Form submission successful!</div>
                  To activate this form, sign up at
                  <br />
                  <a href="https://startbootstrap.com/solution/contact-forms">
                    https://startbootstrap.com/solution/contact-forms
                  </a>
                </div>
              </div>

              <div className="d-none" id="submitErrorMessage">
                <div className="text-center text-danger mb-3">
                  Error sending message!
                </div>
              </div>

              <div className="text-center">
                <button
                  className="btn btn-primary btn-xl text-uppercase"
                  type="submit"
                  onClick={(e) => this.submitForm(e)}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>
      </>
    );
  }
}

export default withFormik({
  mapPropsToValues: () => ({
    name: "",
    email: "",
    phone: "",
    message: "",
  }),
  validate: (values) => {
    const errors = {};

    Object.keys(values).map((v) => {
      if (!values[v]) {
        errors[v] = "Required";
      }
    });
    return errors;
  },
  handleSubmit: (values, { setSubmitting }) => {
    alert("You've submitted the form.");
  },
})(Contact);
