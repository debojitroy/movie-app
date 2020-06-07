import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer, Persistor } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import movieAppRootReducer from '@reducers/index';

let movieAppStore: any;

let persistor: Persistor;

export const getStore = () => movieAppStore;

export const getPersistor = () => persistor;

const persistConfig = {
	key: 'root',
	storage: storageSession,
};

const persistedReducer = persistReducer(persistConfig, movieAppRootReducer);

export default () => {
	let composeEnhancers = compose;

	if ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
		composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
	}

	const combinedMiddleware = [thunk];

	movieAppStore = createStore(
		persistedReducer,
		{},
		composeEnhancers(applyMiddleware(...combinedMiddleware))
	);

	persistor = persistStore(movieAppStore);

	// Enable HMR
	if (process.env.NODE_ENV === 'development' && (module as any).hot) {
		(module as any).hot.accept('@reducers/index', () => {
			// This fetch the new state of the above reducers.
			const nextRootReducer = require('@reducers/index').default;
			movieAppStore.replaceReducer(
				persistReducer(persistConfig, nextRootReducer)
			);
		});
	}
};
