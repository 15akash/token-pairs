import TokenContext from './token-context';
import data from '../data.json';

const TokenProvider = (props: any) => {
	// console.log('TokenProvider props: ', data);
	const tokenContext = {
		tokens: data.tokensData,
		activeToken: data.tokensData[0]
	};

	return <TokenContext.Provider value={tokenContext}>{props.children}</TokenContext.Provider>;
};

export default TokenProvider;
