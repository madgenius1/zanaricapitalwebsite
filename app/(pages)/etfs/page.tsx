import { etfsMetadata } from '../../../lib/metadata';
export const metadata = etfsMetadata;

import ETFContent from '@/app/components/ui/etfs/ETFContent';


export default function Page() {
    return(
        <>
        <ETFContent />
        </>
    )
}

