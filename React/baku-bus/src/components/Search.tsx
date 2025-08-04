import { easeOut, motion } from 'framer-motion'
import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa'
import { TbArrowsExchange } from 'react-icons/tb'
import { useTranslation } from 'react-i18next';

const Search = () => {
  const { t } = useTranslation();

  return (
    <div className='w-full'>
      <motion.div
        className='bg-neutral-50/20 border-2 border-neutral-300 shadow-lg rounded-xl p-3 sm:p-5'
        initial={{ opacity: 0, y: -800 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -800 }}
        transition={{ duration: 1.2, ease: easeOut }}
      >
        <div className="w-full flex flex-col lg:flex-row items-center gap-3 sm:gap-5 justify-between">
          {/* From and to input section */}
          <div className="w-full lg:w-[60%] flex flex-col sm:flex-row items-center gap-3 sm:gap-5 relative">
            {/* From */}
            <div className='w-full sm:w-1/2 h-12 sm:h-14 border border-neutral-300 bg-white/70 text-sm sm:text-base text-neutral-700 font-medium px-3 sm:px-5 flex items-center gap-x-1 rounded-lg'>
              <input
                type="text"
                placeholder={t('search.from')}
                className='flex-1 h-full border-none bg-transparent focus:outline-none text-sm sm:text-base'
              />
              <div className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-400">
                <FaMapMarkerAlt className='w-full h-full'/>
              </div>
            </div>
           
            {/* To */}
            <div className='w-full sm:w-1/2 h-12 sm:h-14 border border-neutral-300 bg-white/70 text-sm sm:text-base text-neutral-700 font-medium px-3 sm:px-5 flex items-center gap-x-1 rounded-lg'>
              <input
                type="text"
                placeholder={t('search.to')}
                className='flex-1 h-full border-none bg-transparent focus:outline-none text-sm sm:text-base'
              />
              <div className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-400">
                <FaMapMarkerAlt className='w-full h-full'/>
              </div>
            </div>
           
            {/* Exchange button */}
            <button className="absolute w-8 h-8 sm:w-11 sm:h-6 top-1/2 left-1/2 sm:top-1/2 sm:left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center bg-red-500 hover:bg-red-600 transition-colors duration-200 sm:rotate-0 rotate-90">
              <TbArrowsExchange className='w-4 h-4 sm:w-6 sm:h-6 text-neutral-50'/>
            </button>
          </div>
         
          {/* Date and button section */}
          <div className='w-full lg:flex-1 sm:h-14 flex flex-col sm:flex-row items-center gap-3 sm:gap-5'>
            {/* Date */}
            <div className='w-full sm:flex-1 h-full border border-neutral-300 bg-white/70 text-sm sm:text-base text-neutral-700 font-medium px-3 p-2 sm:px-5 flex items-center gap-x-1 rounded-lg'>
              <input
                type="date"
                className='flex-1 h-full border-none bg-transparent focus:outline-none text-sm sm:text-base'
              />
            </div>
           
            {/* Search button */}
            <button className="w-full sm:w-fit h-full px-4 p-2 sm:px-5 bg-red-500 hover:bg-transparent border-2 border-red-500 hover:border-red-500 rounded-xl text-sm sm:text-base font-medium text-neutral-50 flex items-center justify-center gap-x-2 hover:text-red-500 ease-in-out duration-300">
              <FaSearch className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>{t('search.search')}</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
export default Search