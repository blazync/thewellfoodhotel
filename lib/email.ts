import transporter from '../config/nodemailer';

interface EmailData {
    to: string;
    subject: string;
    data: {
        name: string;
        email: string;
        phone: string;
        message: string;
    };
}

async function sendEmail({ to, subject, data }: EmailData) {
    const emailTemplate = `
        <html>
            <body style="text-align: center;">
                <img src="/wellfoodtransparent.png" alt="Client Logo" style="display: block; margin: 0 auto; max-width: 200px;">
                <h1>${subject}</h1>
                <p>
                    Hi, User<br>
                    ${data.message}
                </p>
                <h2>Customer Data:</h2>
                <p>
                    Name: ${data.name}<br>
                    Email: ${data.email}<br>
                    Phone: ${data.phone}
                </p>
            </body>
        </html>
    `;


    const mailOptions = {
        from: process.env.ZOHO_EMAIL,
        to: to,
        subject: subject,
        html: emailTemplate,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        return true;
    } catch (error) {
        console.error('Error sending email:', error);
        return false;
    }
}

export default sendEmail;
