import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";

import {createItemsRouter} from "./routes/items.routes";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api/items', createItemsRouter());

app.listen(port, () => {
  console.log(`run on :${port}`);
}).on('error', (err) => {
  console.error('error:', err);
});
