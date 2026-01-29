import { contactMetadata } from '../../../lib/metadata';
export const metadata = contactMetadata;

import ContactContent from '@/app/components/ui/contact/ContactContent';


export default function Page() {
    return(
        <>
        <ContactContent />
        </>
    )
}

