import {
	PersonDetail,
	PERSON_DETAIL_START,
	PERSON_DETAIL_SUCCESS,
	PERSON_DETAIL_NOT_FOUND,
	PERSON_DETAIL_ERROR,
} from '@features/Details/redux/actions/person.detail.action';

export interface PersonRecord {
	isLoading: boolean;
	isError: boolean;
	notFound: boolean;
	lastUpdated: number;
	error?: string;
	detail?: PersonDetail;
}

export interface PersonDetailState {
	[key: number]: PersonRecord;
}

const initState: PersonDetailState = {};

export default (
	state: PersonDetailState = initState,
	action: {
		type: string;
		personId: number;
		notFound?: boolean;
		error?: string;
		detail?: PersonDetail;
	}
) => {
	switch (action.type) {
		case PERSON_DETAIL_START: {
			const person = state[action.personId];
			let newPerson = {};

			if (person) {
				newPerson = {
					...person,
					isLoading: true,
					isError: false,
					error: null,
					notFound: false,
				};
			} else {
				newPerson = {
					isLoading: true,
					isError: false,
					error: null,
					notFound: false,
					lastUpdated: 0,
				};
			}

			return {
				...state,
				[action.personId]: newPerson,
			};
		}
		case PERSON_DETAIL_SUCCESS: {
			const newPerson = {
				isLoading: false,
				isError: false,
				notFound: false,
				error: null,
				detail: action.detail,
				lastUpdated: Date.now(),
			};

			return {
				...state,
				[action.personId]: newPerson,
			};
		}
		case PERSON_DETAIL_NOT_FOUND: {
			const person = state[action.personId];
			let newPerson = {};

			if (person) {
				newPerson = {
					...person,
					isLoading: false,
					isError: false,
					error: null,
					notFound: true,
					lastUpdated: Date.now(),
				};
			} else {
				newPerson = {
					isLoading: false,
					isError: false,
					error: null,
					notFound: true,
					lastUpdated: Date.now(),
				};
			}

			return {
				...state,
				[action.personId]: newPerson,
			};
		}
		case PERSON_DETAIL_ERROR: {
			const person = state[action.personId];
			let newPerson = {};

			if (person) {
				newPerson = {
					...person,
					isLoading: false,
					isError: true,
					error: action.error,
					notFound: false,
					lastUpdated: Date.now(),
				};
			} else {
				newPerson = {
					isLoading: false,
					isError: true,
					error: action.error,
					notFound: false,
					lastUpdated: Date.now(),
				};
			}

			return {
				...state,
				[action.personId]: newPerson,
			};
		}
		default:
			return state;
	}
};
