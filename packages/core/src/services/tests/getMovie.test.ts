import axios from 'axios';
import { getMovie } from '../getMovieDetails';

jest.mock('axios');

const movieResponse = {
	id: 1234,
	name: 'The Dark Knight',
};

describe('Get Movie', () => {
	test('should return results', async () => {
		(axios.get as any).mockResolvedValue({ data: movieResponse });
		const response = await getMovie(1234);
		expect(response).toEqual(movieResponse);
	});
});
