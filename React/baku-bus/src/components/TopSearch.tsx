import RootLayout from '../layout/RootLayout'
import TopSearchCard from './TopSearchCard'
import { useTranslation } from 'react-i18next';

const TopSearch = () => {
  const { t } = useTranslation();

  return (
    <RootLayout className='space-y-8 sm:space-y-12'>
        <div className="w-full items-center justify-center text-center">
            <h1 className="text-2xl sm:text-3xl text-neutral-800 font-bold">
                {t('topSearch.title')}
            </h1>
        </div>
        
        {/* Responsive Grid Layout */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            <TopSearchCard routeFrom='Baku' routeTo='Sumqayit' timeDuration='40 mins' price='1 AZN'/>
            <TopSearchCard routeFrom='Baku' routeTo='Ganja' timeDuration='4 hrs' price='8 AZN'/>
            <TopSearchCard routeFrom='Sumqayit' routeTo='Quba' timeDuration='2 hrs' price='5 AZN'/>
            <TopSearchCard routeFrom='Ganja' routeTo='Baku' timeDuration='4 hrs' price='1 AZN'/>
            <TopSearchCard routeFrom='Sumqayit' routeTo='Ganja' timeDuration='4 hrs' price='8 AZN'/>
            <TopSearchCard routeFrom='Baku' routeTo='Mingachevir' timeDuration='6 hrs' price='5 AZN'/>
        </div>
    </RootLayout>
  )
}

export default TopSearch