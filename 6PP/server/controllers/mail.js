const sendMail = require("../utils/mailSender")

exports.contact = async (req, res) => {
    try {
      const { name, email, message } = req.body;
  
      const userMessage = `Hey, I am ${name}. My email is ${email}. My message is ${message} .`;
  
      await sendMail(userMessage);
  
      return res.status(200).json({
        success: true,
        message: "Message Sent Successfully",
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };