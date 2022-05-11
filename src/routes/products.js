import { Router } from 'express';

const router = new Router();

router.get('/:tipo', (request, response) => {
  // response.json(meuObj);
  console.log(request.query.pageSize);
  console.log(request.params.tipo);

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
