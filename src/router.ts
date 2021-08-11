import express, { Router, Request, Response } from 'express';
import database from './database';

const router = Router();
router.use(express.json());
router.use(express.raw());

router.get('/', async (req: any, res: any) => {
	let list: any = await database('pokemons').select('*');
	const itens = list.map((pkmn: any) => {
		return {
			name: pkmn.name,
		}
	});
	res.json(itens);
});

router.post('/', async (req: any, res: any) => {
	let pkmn = {
		name: req.body.nickname,
		file: "./p.pkmn"
	};
	console.log(pkmn);
	await database('pokemons').insert(pkmn);
	res.json(pkmn);
});


export default router;
