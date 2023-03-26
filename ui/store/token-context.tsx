import React from 'react';
import { IToken } from '../interfaces/TokenInterface';

const TokenContext = React.createContext({
	tokens: [] as IToken[],
	activeToken: {} as IToken
});

export default TokenContext;
