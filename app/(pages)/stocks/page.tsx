import { stocksMetadata } from '../../../lib/metadata';
export const metadata = stocksMetadata;

import StocksContent from '@/app/components/ui/stocks/StocksContent';


export default function Page() {
  return (
    <>
      <StocksContent />
    </>
  )
}

