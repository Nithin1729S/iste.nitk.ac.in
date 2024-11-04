import axios from 'axios';

export const baseUrl = 'https://iste.nitk.ac.in/api/';
//* the line below is used to test the local database with the current front-end.
//* uncomment the line below and comment the line with baseURL if you want to test the backend that is in dev mode
// export const baseUrl = 'http://localhost:8000';


export const baseRequest = axios.create({
	baseURL: baseUrl,
});

export const enableRecs = false;
export const enableExpo = true;
export const enableSMP = false;
export const enableSHE = true;
export const enableClutchMB = false;
export const enableLeaderboard = true;
