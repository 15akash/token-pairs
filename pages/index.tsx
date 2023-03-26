import Header from '@/ui/sections/Header';
import Content from '@/ui/sections/Content';
import TokenProvider from '@/ui/store/TokenProvider';

export default function Home() {
	return (
		<TokenProvider>
			<Header />
			<Content />
		</TokenProvider>
	);
}
