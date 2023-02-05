import catalyst from './Catalyst/aggregate';
import charge from './Charge/aggregate';
import chronicle from './Chronicle/aggregate';
import clutch from './Clutch/aggregate';
import concrete from './Concrete/aggregate';
import create from './Create/aggregate';
import credit from './Credit/aggregate';
import crypt from './Crypt/aggregate';
import { meets } from '../meets';
import { fur } from '../further';
export const gmeets = meets;
export const furContent = fur;

export const constant = {
	catalyst,
	charge,
	chronicle,
	clutch,
	concrete,
	create,
	credit,
	crypt,
};

export const sigNames = [
	{
		name: 'catalyst',
		id: 1,
		logo: 'https://iste.nitk.ac.in/api/media/sig_pictures/None_catalyst.png',
	},
	{
		name: 'charge',
		id: 2,
		logo: 'https://iste.nitk.ac.in/api/media/sig_pictures/None_Charge.png',
	},
	{
		name: 'chronicle',
		id: 3,
		logo: 'https://iste.nitk.ac.in/api/media/sig_pictures/None_chronicle.png',
	},
	{
		name: 'clutch',
		id: 4,
		logo: 'https://iste.nitk.ac.in/api/media/sig_pictures/None_Clutch.png',
	},
	{
		name: 'concrete',
		id: 5,
		logo: 'https://iste.nitk.ac.in/api/media/sig_pictures/None_concrete.png',
	},
	{
		name: 'create',
		id: 6,
		logo: 'https://iste.nitk.ac.in/api/media/sig_pictures/None_Create.png',
	},
	{
		name: 'credit',
		id: 7,
		logo: 'https://iste.nitk.ac.in/api/media/sig_pictures/None_Credit.png',
	},
	{
		name: 'crypt',
		id: 8,
		logo:
			'https://iste.nitk.ac.in/api/media/sig_pictures/None_crypt_PMPCp2W.png',
	},
];
export const offsetCoefficient = -4 / 8;
