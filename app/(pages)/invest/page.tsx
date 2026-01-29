import { investMetadata } from '../../../lib/metadata';
export const metadata = investMetadata;


import InvestContent from '@/app/components/ui/invest/InvestContent';

export default function Page() {
    return(
        <>
        <InvestContent />
        </>
    )
}

