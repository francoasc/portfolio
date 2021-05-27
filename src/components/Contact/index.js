import React from "react";
import { StyledContact } from "../../styles/contact-styles";
import { openLinkHandler } from "../About/index";
import Fade from "react-reveal/Fade";
function Contact() {
  return (
    <StyledContact>
      <Fade bottom duration={1500}>
        <div>
          <h2>Get In Touch</h2>
          <p>
            I'm currently looking new opportunities, do not hesitate to contact
            me for possible queries, collaborations, projects or anything else,
            my inbox is always open.
          </p>
          <button
            onClick={() =>
              openLinkHandler(
                "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=francoascarate349@gmail.com"
              )
            }
          >
            Send Message
          </button>
        </div>
      </Fade>
    </StyledContact>
  );
}

export default Contact;
