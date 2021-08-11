import express, { Router, Request, Response } from 'express';

const router = Router();
router.use(express.json());

let internalCount = 0;
let pkmn: any[] = [];

router.get('/', (req: any, res: any) => {
	res.json({ pokemons: pkmn, count: internalCount });
});

router.post('/', (req: any, res: any) => {
	console.log(`recebi: `);
	console.log(req.body);
	internalCount = pkmn.push(req.body);
	res.json({ teste: true });
});


export default router;
