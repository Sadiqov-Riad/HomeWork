import { Link } from 'react-router-dom'
import RootLayout from '../../layout/RootLayout'
import { FaInstagram, FaXTwitter } from 'react-icons/fa6'
import { FaFacebook, FaYoutube } from 'react-icons/fa'
import { useTranslation } from 'react-i18next';
import MasterCardImg from '../../assets/mastercard.png'
import CreditCardImg from '../../assets/creditcard.png'
import PaypalImg from '../../assets/paypal.png'

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className='w-full h-auto bg-neutral-950 py-8 sm:py-12'>
      
      <RootLayout className='space-y-8 sm:space-y-10'>

        {/* Footer other content */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8">
            
            {/* Logo and Description Section */}
            <div className="col-span-1 sm:col-span-2 xl:col-span-2 space-y-6 sm:space-y-8">
                <div className="space-y-4 sm:space-y-3">
                    {/* Logo */}
                    <Link to="/">
                        <img src="src\assets\Logo.png" alt="Baku Bus Logo" className="h-10 sm:h-12 w-auto" />
                    </Link>

                    {/* Description */}
                    <p className='pt-4 text-sm text-neutral-500 font-normal leading-relaxed xl:pr-10'>
                        {t('footer.description')}
                    </p>

                    {/* Social links */}
                    <div className="w-full flex items-center gap-x-3 sm:gap-x-5">
                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-neutral-800/40 hover:bg-red-500 flex items-center justify-center cursor-pointer transition-colors ease-in-out duration-500">
                            <FaInstagram className='w-4 h-4 sm:w-5 sm:h-5 text-neutral-50' />
                        </div>

                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-neutral-800/40 hover:bg-red-500 flex items-center justify-center cursor-pointer transition-colors ease-in-out duration-500">
                            <FaFacebook className='w-4 h-4 sm:w-5 sm:h-5 text-neutral-50' />
                        </div>

                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-neutral-800/40 hover:bg-red-500 flex items-center justify-center cursor-pointer transition-colors ease-in-out duration-500">
                            <FaYoutube className='w-4 h-4 sm:w-5 sm:h-5 text-neutral-50' />
                        </div>

                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-neutral-800/40 hover:bg-red-500 flex items-center justify-center cursor-pointer transition-colors ease-in-out duration-500">
                            <FaXTwitter className='w-4 h-4 sm:w-5 sm:h-5 text-neutral-50' />
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Links */}
            <div className="col-span-1 space-y-4 sm:space-y-5">
                <h1 className="text-base sm:text-lg text-neutral-100 font-semibold">
                    {t('footer.quickLinks')}
                </h1>

                <div className="space-y-2">
                    <Link to="/" className='block text-sm sm:text-base text-neutral-500 hover:text-neutral-300 font-normal transition-colors ease-in-out duration-300'>
                        {t('footer.aboutUs')}
                    </Link>

                    <Link to="/" className='block text-sm sm:text-base text-neutral-500 hover:text-neutral-300 font-normal transition-colors ease-in-out duration-300'>
                        {t('footer.myAccount')}
                    </Link>

                    <Link to="/" className='block text-sm sm:text-base text-neutral-500 hover:text-neutral-300 font-normal transition-colors ease-in-out duration-300'>
                        {t('footer.reserveTicket')}
                    </Link>              

                    <Link to="/" className='block text-sm sm:text-base text-neutral-500 hover:text-neutral-300 font-normal transition-colors ease-in-out duration-300'>
                        {t('footer.createAccount')}
                    </Link>
                </div>
            </div>

            {/* Top Routes */}
            <div className="col-span-1 space-y-4 sm:space-y-5">
                <h1 className="text-base sm:text-lg text-neutral-100 font-semibold">
                    {t('footer.topRoutes')}
                </h1>

                <div className="space-y-2">
                    <Link to="/" className='block text-sm sm:text-base text-neutral-500 hover:text-neutral-300 font-normal transition-colors ease-in-out duration-300'>
                        {t('footer.bakuSumqayit')}
                    </Link>

                    <Link to="/" className='block text-sm sm:text-base text-neutral-500 hover:text-neutral-300 font-normal transition-colors ease-in-out duration-300'>
                        {t('footer.ganjaMingachevir')}
                    </Link>

                    <Link to="/" className='block text-sm sm:text-base text-neutral-500 hover:text-neutral-300 font-normal transition-colors ease-in-out duration-300'>
                        {t('footer.bakuGanja')}
                    </Link>              

                    <Link to="/" className='block text-sm sm:text-base text-neutral-500 hover:text-neutral-300 font-normal transition-colors ease-in-out duration-300'>
                        {t('footer.ganjaSumqayit')}
                    </Link>
                </div>
            </div>

            {/* Support Links */}
            <div className="col-span-1 space-y-4 sm:space-y-5">
                <h1 className="text-base sm:text-lg text-neutral-100 font-semibold">
                    {t('footer.supportLinks')}
                </h1>

                <div className="space-y-2">
                    <Link to="/" className='block text-sm sm:text-base text-neutral-500 hover:text-neutral-300 font-normal transition-colors ease-in-out duration-300'>
                        {t('footer.privacyPolicy')}
                    </Link>

                    <Link to="/" className='block text-sm sm:text-base text-neutral-500 hover:text-neutral-300 font-normal transition-colors ease-in-out duration-300'>
                        {t('footer.termsConditions')}
                    </Link>

                    <Link to="/" className='block text-sm sm:text-base text-neutral-500 hover:text-neutral-300 font-normal transition-colors ease-in-out duration-300'>
                        {t('footer.helpSupport')}
                    </Link>              

                    <Link to="/" className='block text-sm sm:text-base text-neutral-500 hover:text-neutral-300 font-normal transition-colors ease-in-out duration-300'>
                        {t('footer.faqs')}
                    </Link>
                </div>
            </div>

        </div>

        {/* Separator */}
        <div className="w-full h-px bg-neutral-800" />

        {/* Copyright */}
        <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
            <p className="text-xs sm:text-sm text-neutral-600 font-normal">
                {t('footer.copyright')}
            </p>

            <div className="flex items-center gap-x-2">
                <div>
                    <img src={MasterCardImg} alt="MasterCard" className="w-auto h-7 sm:h-9 object-contain object-center" />
                </div>

                <div>
                    <img src={CreditCardImg} alt="Credit Card" className="w-auto h-7 sm:h-9 object-contain object-center" />
                </div>

                <div>
                    <img src={PaypalImg} alt="PayPal" className="w-auto h-7 sm:h-9 object-contain object-center" />
                </div>
            </div>
        </div>

      </RootLayout>

    </div>
  )
}

export default Footer