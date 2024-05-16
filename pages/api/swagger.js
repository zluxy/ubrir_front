import swaggerSpec from '../../config/swagger';

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(swaggerSpec);
  } else {
    res.status(405).send('Method Not Allowed');
  }
}