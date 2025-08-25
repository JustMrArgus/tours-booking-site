const nodemailer = require("nodemailer");

module.exports = class Email {
  constructor(user, url) {
    this.to = user.email;
    this.firstName = user.name.split(" ")[0];
    this.url = url;
    this.from = `Oleksandr Rodina <${process.env.EMAIL_FROM}>`;
  }

  newTransport() {
    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  async send(subject, content) {
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      text: content,
    };

    await this.newTransport().sendMail(mailOptions);
  }

  async sendWelcome() {
    await this.send("welcome", "Welcome to our booking portal!");
  }

  async sendPasswordReset() {
    await this.send(
      "passwordReset",
      `Your password reset token (valid for only 10 minutes)\n${this.url}`
    );
  }
};
