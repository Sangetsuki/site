import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();
app.use(express.json());
app.use(express.static("../client/build"));
const PORT = 8000;
let internalCount = 0;
let pkmn: any[] = [];

app.get('/api', (req, res) => {
	res.json({ pokemons: pkmn, count: internalCount });
});

app.post('/api', (req, res) => {
	console.log(`recebi: `);
	console.log(req.body);
	internalCount = pkmn.push(req.body);
	res.json({ teste: true });
});

app.get('*', (req, res) => {
	res.sendFile(path.resolve("../client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`[server]: https://localhost:${PORT}`);
});
