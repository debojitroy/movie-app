import axios from 'axios';
import { searchMovie } from '../searchMovie';

jest.mock('axios');

const emptyResponse = {
	page: 1,
	total_pages: 1,
	total_results: 0,
	results: [],
};

const validResponse = {
	page: 1,
	total_pages: 1,
	total_results: 1,
	results: [
		{
			id: 1,
			name: 'Dark Knight',
		},
	],
};

describe('search movie', () => {
	test('should return empty response when payload is undefined', async () => {
		const response = await searchMovie();
		expect(response).toEqual(emptyResponse);
	});

	test('should return empty response when payload is empty', async () => {
		const response = await searchMovie('');
		expect(response).toEqual(emptyResponse);
	});

	test('should return results when search query is valid', async () => {
		(axios.get as any).mockResolvedValue({ data: validResponse });
		const response = await searchMovie('dark');
		expect(response).toEqual(validResponse);
	});
});
