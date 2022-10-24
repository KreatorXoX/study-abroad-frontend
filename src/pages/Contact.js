import React from "react";
import Input from "../shared/components/Form-Elements/Input";
import Button from "../shared/components/Form-Elements/Button";
import { VALIDATOR_EMAIL, VALIDATOR_REQUIRE } from "../shared/utils/validators";
import styles from "./Contact.module.css";
const Contact = () => {
  return (
    <div className="container">
      <div className={styles.content}>
        <div className={styles.topBar} />
        <div className={styles.sideBar}>
          <div className={styles.contactInfo}>
            <h3>Direct Email</h3>
            <strong>asd@info.com</strong>
          </div>
          <div className={styles.contactInfo}>
            <h3>Phone Number</h3>
            <strong>+321321321</strong>
          </div>
        </div>
        <div className={styles.form}>
          <form>
            <h3 className={styles.formTitle}>Contact Us</h3>
            <div>
              <Input
                id="email"
                type="email"
                //label="Email"
                placeholder="Email : ex@example.com"
                v
                errorText="Enter a valid email"
                onInputChange={() => {}}
                validators={[VALIDATOR_EMAIL()]}
              />
            </div>
            <div>
              <Input
                id="fullname"
                type="text"
                // label="Password"
                placeholder="Full Name"
                errorText="Enter a valid name"
                onInputChange={() => {}}
                validators={[VALIDATOR_REQUIRE()]}
              />
            </div>
            <div>
              <Input
                id="message"
                type="text"
                element="textarea"
                // label="Password"
                placeholder="Enter your message here"
                errorText="Please don't leave this section empty."
                onInputChange={() => {}}
                validators={[VALIDATOR_REQUIRE()]}
              />
            </div>
            <div className={styles.formAction}>
              <Button type="submit" success mid>
                Send
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
