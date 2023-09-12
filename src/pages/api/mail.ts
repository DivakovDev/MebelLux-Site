import mail from '@sendgrid/mail';
import { NextApiRequest, NextApiResponse } from 'next';
process.env.SENDGRID_API_KEY && mail.setApiKey(process.env.SENDGRID_API_KEY)

type ResponseData = {
  status?: string;
  message?: string;
};




const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  let response: ResponseData = {};
  const body = JSON.parse(req.body)

  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Phone: ${body.phone}\r\n
    Message: ${body.message}
  `

  const data = {
    to: 'mebelluxm78@gmail.com',
    from: 'mebelluxm78@gmail.com',
    subject: 'New message from contact form',
    text: message,
    html: message.replace(/\r\n/g, '<br>')
  }
//Your message was sent. I'll be in contact shortly
  await mail.send(data).then(() => {
    response = {
      status: 'success',
      message: "Вашето съобщение беше изпратено успешно. Ще се свържем с Вас възможно най-скоро.",
    };
  })
  .catch((error) => {
    response = {
      status: 'error',
      message: `Съобщението не се изпрати заради грешка в сървъра, ${error}`,
    };
  });

  res.status(200).json(response)
}
  

export default sendEmail