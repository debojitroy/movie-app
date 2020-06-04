export type DeepPartial<T> = { [P in keyof T]?: DeepPartial<T[P]> };

export interface Theme {
	name: string;
	isDark: boolean;
	color: {
		backgroundColor: string;
		backgroundWithOpacityHigh: string;
		backgroundWithOpacityMedium: string;
		backgroundWithOpacityLow: string;
		textColor: string;
		primaryColor: string;
		primaryTextColor: string;
		success: string;
		warning: string;
		danger: string;
		grayDarker: string;
		grayDark: string;
		grayLight: string;
		grayLighter: string;
		inputBorder: string;
		inputBorderFocus: string;
		inputBorderShadowFocus: string;
	};
	font: {
		family: string;
		weight: {
			light: number;
			normal: number;
			semiBold: number;
			extraBold: number;
		};
		size: {
			xSmall: string;
			small: string;
			medium: string;
			large: string;
			xLarge: string;
			xxLarge: string;
			xxxLarge: string;
			xxxxLarge: string;
		};
	};
}

export const defaultTheme: Theme = {
	name: 'DEFAULT',
	isDark: false,
	color: {
		backgroundColor: '#fff',
		backgroundWithOpacityHigh: 'rgba(255,255,255, 0.8)',
		backgroundWithOpacityMedium: 'rgba(255,255,255, 0.5)',
		backgroundWithOpacityLow: 'rgba(255,255,255, 0.3)',
		textColor: '#444A47',
		primaryColor: '#000051',
		primaryTextColor: '#fff',
		success: '#00875a',
		warning: '#f7b228',
		danger: '#de2362',
		grayDarker: '#696969',
		grayDark: '#aeb0b5',
		grayLight: '#e4e2e0',
		grayLighter: '#f5f8fa',
		inputBorder: '1px solid #909599',
		inputBorderFocus: '1px solid #0077b3',
		inputBorderShadowFocus: '0 0 0 1px #0077b3',
	},
	font: {
		family: "'Nunito Sans', sans-serif",
		weight: {
			light: 300,
			normal: 400,
			semiBold: 600,
			extraBold: 800,
		},
		size: {
			xSmall: '0.75rem',
			small: '0.875rem',
			medium: '1rem',
			large: '1.25rem',
			xLarge: '1.5rem',
			xxLarge: '2.25rem',
			xxxLarge: '3rem',
			xxxxLarge: '4.5rem',
		},
	},
};
