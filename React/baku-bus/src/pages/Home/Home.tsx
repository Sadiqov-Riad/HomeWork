import TopSearch from '../../components/TopSearch'
import Services from '../Services'
import Hero from './Hero'

const Home = () => {
  return (
    <div className='w-full space-y-16 min-h-screen pb-16'>
      <Hero />

      <Services />

      <TopSearch />
    </div>
  )
}

export default Home
