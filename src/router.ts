import express from 'express';

const router = express.Router();

let internalCount = 0;
let pkmn: any[] = [];

router.get('/', (req, res) => {
	res.json({ pokemons: pkmn, count: internalCount });
});

router.post('/', (req, res) => {
	console.log(`recebi: `);
	console.log(req.body);
	internalCount = pkmn.push(req.body);
	res.json({ teste: true });
});


export default router;
