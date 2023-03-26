export interface IToken {
	id: string;
	name: string;
	about: string;
	circulatingSupply: string;
	marketCap: string;
	allTimeRoi: string;
	marketCapRank: string;
	volume24High: string;
	volume24Low: string;
	high24Hour: string;
	currentPrice: string;
	imageUrl?: string;
}

export interface ITokenData {
	tokensData: IToken[];
}