import React from 'react';
import { IToken } from '../interfaces/TokenInterface';

const TokenContext = React.createContext({
	tokens: [] as IToken[],
	activeToken: {} as IToken,
	tokenPay: {} as IToken,
	tokenReceive: {} as IToken,
	selectToken: (token: IToken, type: string) => {}
});

export default TokenContext;
