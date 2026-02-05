import { partnershipMetadata } from '../../../lib/metadata';
export const metadata = partnershipMetadata;

import PartnershipContent from '../../components/ui/partnership/PartnershipContent';

export default function Page() {
    return(
        <>
        <PartnershipContent />
        </>
    )
}

