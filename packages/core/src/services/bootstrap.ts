let config: { url: string; apiKey: string } = { url: '', apiKey: '' };

export const setConfig = (incomingConfig: { url: string; apiKey: string }) => {
	config = incomingConfig;
};

export const getConfig = () => config;
