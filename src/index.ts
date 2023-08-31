import express from 'express';
import type { Express, Request, Response } from 'express';

const app: Express = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
    return res.send('This is test.');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});