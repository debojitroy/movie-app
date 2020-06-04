import axios from 'axios';
import { getPerson } from '../getPersonDetails';

jest.mock('axios');

const personResponse = {
	id: 1234,
	name: 'Christian Bale',
};

describe('Get Person', () => {
	test('should return results', async () => {
		(axios.get as any).mockResolvedValue({ data: personResponse });
		const response = await getPerson(1234);
		expect(response).toEqual(personResponse);
	});
});
