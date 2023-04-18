import emailjs from "@emailjs/browser";

/**
 * Sends mail to developers account.
 * @param {message} Array - Transpile message that is send by service default: null
 * @returns {boolean} returns info about sendign proccess true or false
 */

const email = (message = null) => {
  if (message !== null) {
    message = message.toString();
  } else {
    return false;
  }

  const serviceID = "service_7m5e0k5";
  const templateID = "template_wq818mc";
  const userID = "2QQB2rGvQ3ERvrf63";

  emailjs
    .send(
      serviceID,
      templateID,
      {
        message: message,
      },
      userID
    )
    .then(
      (response) => {
        console.log("Success", response);
      },
      (err) => {
        console.log("Unknown error! Check proccess", err);
      }
    );
};

export default email;
