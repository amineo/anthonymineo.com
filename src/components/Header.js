import Link from 'next/link';
import { MineoLogo, MineoLogoLight, MineoMark } from './Logos';
import PortfolioLinks from '@/components/PortfolioLinks';

export default function Header() {
	return (
		<header className="flex justify-between items-center py-6">
			<div>
				<Link href="/">
					<a aria-label="Home - Anthony Mineo">
						<MineoMark className="h-10 sm:hidden" />
						<MineoLogo className="hidden sm:block h-12 py-1" />
					</a>
				</Link>
			</div>
			<div className="text-base leading-5">
				<PortfolioLinks />
			</div>
		</header>
	);
}
