import { derivativesMetadata } from '../../../lib/metadata';
export const metadata = derivativesMetadata;
import DerivativesContent from '@/app/components/ui/derivatives/DerivativesContent';


export default function Page() {
    return(
        <>
        <DerivativesContent />
        </>
    )
}

