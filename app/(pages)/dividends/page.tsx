
import { dividendsMetadata } from '../../../lib/metadata';
export const metadata = dividendsMetadata;

import DividendsContent from '@/app/components/ui/dividends/DividendsContent';



export default function Page() {
    return(
        <>
        <DividendsContent />
        </>
    )
}

