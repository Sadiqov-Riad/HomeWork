import { RiRefund2Line, RiSecurePaymentLine } from 'react-icons/ri'
import { PiHeadsetFill } from 'react-icons/pi'
import ServiceCard from '../components/ServiceCard'
import RootLayout from '../layout/RootLayout'

const Services = () => {
  return (
    <RootLayout>
      <section className="py-12 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-neutral-800 mb-10">
          Our <span className='text-red-500'>Services</span>
        </h1>

        <div className="flex flex-wrap gap-6 justify-center">
          <ServiceCard
            icon={RiSecurePaymentLine}
            title="Secure Payment"
            desc="Integrate secure payment gateways for users to pay for their tickets."
          />
          <ServiceCard
            icon={RiRefund2Line}
            title="Refund Policy"
            desc="Offer options for the users to purchase refundable tickets with clear terms."
          />
          <ServiceCard
            icon={PiHeadsetFill}
            title="24/7 Support"
            desc="Get assistance anytime through chat, email, or phone."
          />
        </div>
      </section>
    </RootLayout>
  )
}

export default Services
