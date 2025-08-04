import React from 'react'

interface ServiceCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, desc }) => {
  return (
    <div className='w-full sm:w-[45%] lg:w-[30%] bg-neutral-200 hover:bg-neutral-100 rounded-xl p-6 flex flex-col items-center text-center cursor-pointer transition duration-300'>
      <div className="w-14 h-14 mb-4 rounded-xl bg-neutral-400/40 flex items-center justify-center">
        <Icon className="w-7 h-7 text-neutral-800" />
      </div>
      <h2 className="text-xl font-semibold text-neutral-800 mb-2">{title}</h2>
      <p className="text-neutral-600 text-sm">{desc}</p>
    </div>
  )
}

export default ServiceCard
