import swaggerUi from 'swagger-ui-express';
import swaggerSpec from '../../config/swagger';

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.setHeader('Content-Type', 'text/html');
    res.send(swaggerUi.generateHTML(swaggerSpec));
  } else {
    res.status(405).send('Method Not Allowed');
  }
}