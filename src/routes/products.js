import { Router } from 'express';


const router = new Router();

router.get('/:name', (request, response) => {
  

  response
    .status(201)
    .json(request.body);
});

router.post('/', (req, res) => {
  res
    .status(201)
    .json(req.body);
});

export default router;
