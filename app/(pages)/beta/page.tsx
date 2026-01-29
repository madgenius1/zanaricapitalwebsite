import { betaMetadata } from '../../../lib/metadata';
export const metadata = betaMetadata;

import BetaContent from '@/app/components/ui/beta/BetaContent';


export default function Page() {
    return(
        <>
        <BetaContent />
        </>
    )
}

