import emailjs from "@emailjs/browser";





/**
 * Sends mail to developers account.
 * @param {message} Array - Transpile message that is send by service default: null
 * @returns {Promise} resolves to success message, rejects with error message 
 */

const email = async (message = null) => {
  if (message !== null) {
    message = message.toString();
  } else {
    throw new Error('Message cannot be null');
  }
  const serviceID = "service_7m5e0k5";
  const templateID = "template_wq818mc";
  const userID = "2QQB2rGvQ3ERvrf63";

  try {
    const response = await emailjs.send(
      serviceID,
      templateID,
      {
        message: message,
      },
      userID
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export default email;
