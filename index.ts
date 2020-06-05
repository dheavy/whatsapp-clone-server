import express from 'express';
import cors from 'cors';
import {chats} from './db';

const app = express();
app.use(cors());

app.get('/_heartbeat', (req, res) => {
  res.send('*bip bip*');
});

app.get('/chats', (req, res) => {
  res.json(chats);
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
