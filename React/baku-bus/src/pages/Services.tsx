import { RiRefund2Line, RiSecurePaymentLine } from 'react-icons/ri'
import { PiHeadsetFill } from 'react-icons/pi'
import ServiceCard from '../components/ServiceCard'
import RootLayout from '../layout/RootLayout'
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();

  return (
    <RootLayout>
      <section className="py-12 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-neutral-800 mb-10">
          {t('services.title')} <span className='text-red-500'>{t('services.title')}</span>
        </h1>

        <div className="flex flex-wrap gap-6 justify-center">
          <ServiceCard
            icon={RiSecurePaymentLine}
            title={t('services.securePayment.title')}
            desc={t('services.securePayment.description')}
          />
          <ServiceCard
            icon={RiRefund2Line}
            title={t('services.refundPolicy.title')}
            desc={t('services.refundPolicy.description')}
          />
          <ServiceCard
            icon={PiHeadsetFill}
            title={t('services.support.title')}
            desc={t('services.support.description')}
          />
        </div>
      </section>
    </RootLayout>
  )
}

export default Services
