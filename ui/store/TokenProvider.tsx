import React, { useReducer } from 'react';
import TokenContext from './token-context';
import data from '../data.json';
import { IToken, ITokenAction, ITokenState } from '../interfaces/TokenInterface';

const defaultTokenState: ITokenState = {
	tokenPay: {} as IToken,
	tokenReceive: data.tokensData[0] as IToken,
	activeToken: data.tokensData[0] as IToken
};

const tokenReducer = (state: ITokenState, action: ITokenAction) => {
	if (action.type === 'You Pay') {
		if (action.token.id === state.tokenReceive.id) {
			alert('Same token selected. Please select different token');
			return {
				tokenPay: state.tokenPay,
				tokenReceive: state.tokenReceive,
				activeToken: state.activeToken
			};
		}
		return {
			tokenPay: action.token,
			tokenReceive: state.tokenReceive,
			activeToken: state.activeToken
		};
	}
	if (action.type === 'You Receive') {
		if (action.token.id === state.tokenPay.id) {
			alert('Same token selected. Please select different token');
			return {
				tokenPay: state.tokenPay,
				tokenReceive: state.tokenReceive,
				activeToken: state.activeToken
			};
		}
		return {
			tokenPay: state.tokenPay,
			tokenReceive: action.token,
			activeToken: action.token
		};
	}
	return defaultTokenState;
};

const TokenProvider = (props: any) => {
	const [tokenState, dispatchTokenAction] = useReducer(tokenReducer, defaultTokenState);

	const tokenContext = {
		tokens: data.tokensData,
		activeToken: tokenState.activeToken,
		tokenPay: tokenState.tokenPay,
		tokenReceive: tokenState.tokenReceive,
		selectToken: (token: IToken, type: string) => {
			dispatchTokenAction({ token, type });
		}
	};

	return <TokenContext.Provider value={tokenContext}>{props.children}</TokenContext.Provider>;
};

export default TokenProvider;
