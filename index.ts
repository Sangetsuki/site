import express from "express";
import path from 'path';
import router from "./src/router";

const app = express();
app.use('/api', router);
app.use(express.json());
app.use(express.static("./client/build"));
const PORT = 8000;

app.get('*', (req: any, res: any) => {
	res.sendFile(path.resolve("./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`[server]: localhost:${PORT}`);
});
