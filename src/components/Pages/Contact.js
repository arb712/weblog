import React, { Component } from "react";
import Field from "../Common/Field";
import { withFormik } from "formik";
import * as Yup from "yup";

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
            <form
              id="contactForm"
              onSubmit={this.props.handleSubmit}
              data-sb-form-api-token="API_TOKEN"
            >
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
                            value={this.props.values[field.name]}
                            name={field.name}
                            onChange={this.props.handleChange}
                            onBlur={this.props.handleBlur}
                            touched={this.props.touched[field.name]}
                            errors={this.props.errors[field.name]}
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
                  // onClick={(e) => this.submitForm(e)}
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
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(3, "Name must be longer than 3 word.")
      .required("You must give us your name."),
    email: Yup.string()
      .email("You must give use a valid email.")
      .required("Email is required"),
    phone: Yup.string()
      .typeError("That doesn't look like a phone number.")
      .min(10, "Phone number must be more than or equal to 10")
      .max(15, "Phone number must be less than or equal to 15")
      .required("Phone number is required"),
    message: Yup.string()
      .min(50, "You need provide us more detailed information")
      .required("Your message is required."),
  }),
  handleSubmit: (values, { setSubmitting }) => {
    console.log("Values", values);
    alert("You've submitted the form.", JSON.stringify(values));
  },
})(Contact);
