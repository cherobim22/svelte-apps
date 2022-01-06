import cookie from 'cookie';
import { v4 as uuid } from '@lukeed/uuid';

export const handle = async ({ request, resolve }) => {
// console.log(request);
return resolve(request)
};


export const getSession = (request) => {
	return{
		user:{
			id:'123',
			name:'lucas'
		}
	}
}