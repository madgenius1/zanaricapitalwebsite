import { portfolioMetadata } from '../../../lib/metadata';
export const metadata = portfolioMetadata;

import PortfolioContent from '@/app/components/ui/portfolio/PortfolioContent';

export default function Page() {
    return(
        <>
        <PortfolioContent />
        </>
    )
}

