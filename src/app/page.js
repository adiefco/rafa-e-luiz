import Card from '@/components/Card'
import Footer from '@/components/Footer'
import Image from 'next/image'
import cards from './mocks.json'

import './styles.scss'

export default function Home() {
  return (
    <main>
      <div>
        <Image
          src="/banner.png"
          alt="Banner"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <div></div>
      <div style={{ backgroundColor: '#7b00f0', display: 'flex', alignItems: 'center', flexDirection: 'column', background: 'linear-gradient(180deg, rgba(121,0,255,1) 0%, rgba(3,2,36,1) 100%);' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h1>AGENDA</h1>
        </div>
        {cards.map((card, key) =>
          <Card key={key} date={card.date} city={card.city} place={card.place} isExternal={card.isExternal} buttonText={card.buttonText} />
        )}
      </div>
      <Footer />
    </main>
  )
}
