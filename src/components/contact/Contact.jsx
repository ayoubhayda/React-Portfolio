import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import done from "../../assets/animation/done.json";
import contact from "../../assets/animation/contact.json";
import { useEffect, useState } from "react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xeqyglol");
  const [formData, setFormData] = useState({email:'', message:''});
  const hundleInputChange = (e) =>{
    const {name, value} = e.target;
    setFormData({...formData, [name]:value})
  }
  
  useEffect(() => {
    if (state.succeeded) {
      setFormData({ email: "", message: "" });
    }
  }, [state.succeeded]);

  return (
    <section className="contact">
      <div className="contact-header">
        <h2 className="title">
          <i className="icon-mail" />
          <span>Contact us</span>
        </h2>
        <p className="subtitle">
          Contact us for more information and Get notified when I publish
          something new.
        </p>
      </div>
      <div className="contact-body">
        <div className="left-section">
          <form onSubmit={handleSubmit} className="form">
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input
              autoComplete="off"
                required
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                onChange={hundleInputChange}
                value={formData.email}
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="input-field">
            <label htmlFor="message">Message</label>
              <textarea
                required
                name="message"
                id="message"
                rows={6}
                placeholder="Message"
                onChange={hundleInputChange}
                value={formData.message}
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button type="submit" disabled={state.submitting} className="submit">
            {state.submitting ? "Submitting ..." : "Submit"}
          </button>
          </form>
          {state.succeeded && (
            <div
              className="message-sent"
            >
              <Lottie loop={false} className="done" animationData={done} />
              <span>Your message has been sent successfully 👌</span>
            </div>
          )}
        </div>
        <div className="right-section">
          <Lottie className="contact-animation" animationData={contact} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
