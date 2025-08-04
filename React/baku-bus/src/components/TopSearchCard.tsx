import { FaWifi } from 'react-icons/fa'
import { GiCharging, GiWaterBottle } from 'react-icons/gi'
import { IoTv } from 'react-icons/io5'
import { useTranslation } from 'react-i18next';

type TopSearchCardProps = {
  routeFrom: string
  routeTo: string
  timeDuration: string
  price: string | number
}

const TopSearchCard = ({ routeFrom, routeTo, timeDuration, price }: TopSearchCardProps) => {
  const { t } = useTranslation();
  return (
    <div className='w-full rounded-xl p-4 sm:p-5 border-2 border-neutral-300 space-y-6 sm:space-y-8 lg:space-y-10'>
       
        <div className="space-y-4 sm:space-y-5 w-full">
            {/* Routes */}
            <div className="space-y-2 sm:space-y-0">
                <div className="w-full flex items-center justify-between">
                    <p className="text-xs text-neutral-400 font-normal">{t('topSearch.from')}</p>
                    <p className="text-xs text-neutral-400 font-normal">{t('topSearch.to')}</p>
                </div>
                <div className="w-full flex items-center justify-between gap-x-2 sm:gap-x-3">
                    {/* From */}
                    <h1 className="text-lg sm:text-xl text-neutral-600 font-semibold flex-shrink-0">
                        {routeFrom}
                    </h1>
                    {/* Time duration */}
                    <div className='flex-1 border border-dashed border-neutral-400 relative min-w-0'>
                        <p className="absolute w-fit px-2 sm:px-3 h-5 sm:h-6 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-neutral-50 rounded-full flex justify-center items-center text-xs sm:text-sm text-neutral-500 font-normal border-dashed border border-neutral-400 whitespace-nowrap">
                            {timeDuration}
                        </p>
                    </div>
                    {/* To */}
                    <h1 className="text-lg sm:text-xl text-neutral-600 font-semibold flex-shrink-0">
                        {routeTo}
                    </h1>
                </div>
            </div>
            
            {/* Facilities */}
            <div className="w-full">
                {/* Mobile: Stacked layout */}
                <div className="flex flex-col gap-2 sm:hidden">
                    <div className="flex items-center gap-x-1">
                        <FaWifi className='w-3 h-3 text-neutral-500' />
                        <p className='text-xs text-neutral-600 font-normal'>
                            {t('topSearch.facilities.internet')}
                        </p>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <GiWaterBottle className='w-3 h-3 text-neutral-500' />
                        <p className='text-xs text-neutral-600 font-normal'>
                            {t('topSearch.facilities.snacks')}
                        </p>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <IoTv className='w-3 h-3 text-neutral-500' />
                        <p className='text-xs text-neutral-600 font-normal'>
                            {t('topSearch.facilities.tv')}
                        </p>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <GiCharging className='w-3 h-3 text-neutral-500' />
                        <p className='text-xs text-neutral-600 font-normal'>
                            {t('topSearch.facilities.mobileCharging')}
                        </p>
                    </div>
                </div>
                
                {/* Tablet and Desktop: Inline layout */}
                <div className="hidden sm:flex items-center gap-4 md:gap-6 flex-wrap">
                    <div className="flex items-center gap-x-1">
                        <FaWifi className='w-3 h-3 text-neutral-500' />
                        <p className='text-xs text-neutral-600 font-normal'>
                            {t('topSearch.facilities.internet')}
                        </p>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <GiWaterBottle className='w-3 h-3 text-neutral-500' />
                        <p className='text-xs text-neutral-600 font-normal'>
                            {t('topSearch.facilities.snacks')}
                        </p>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <IoTv className='w-3 h-3 text-neutral-500' />
                        <p className='text-xs text-neutral-600 font-normal'>
                            {t('topSearch.facilities.tv')}
                        </p>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <GiCharging className='w-3 h-3 text-neutral-500' />
                        <p className='text-xs text-neutral-600 font-normal'>
                            {t('topSearch.facilities.mobileCharging')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
        {/* Price and Button */}
        <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
            <h1 className="text-xl sm:text-2xl text-neutral-700 font-semibold">
                {price}
            </h1>
            <button className="w-full sm:w-auto py-2 sm:py-1.5 px-4 sm:px-5 bg-red-500 hover:bg-transparent border-2 border-red-500 hover:border-red-500 rounded-xl text-sm font-normal text-neutral-50 flex items-center justify-center gap-x-2 hover:text-red-500 transition-all ease-in-out duration-300">
              <span>{t('topSearch.reserveSeat')}</span>
            </button>
        </div>
    </div>
  )
}

export default TopSearchCard