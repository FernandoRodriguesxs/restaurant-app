import { Header } from './components/Header'
import { Wrapper, Hero, InformaticonSection } from './App.styles'
import { ButtonSecondary } from './components/Button'
import heroImg from './assets/img-hero.png'
import { Clock, MapPin, Phone } from '@phosphor-icons/react'

export const App = () => {
  return (
    <>
      <Wrapper>
        <Header />
      </Wrapper>
      <main>
        <Wrapper>
          <Hero>
            <div className="hero-left">
              <h1>
                Your Favourite Food <br /> Delivered Hot & <br /> Fresh
              </h1>
              <p>
                Healthy switcher do all the prep work, like peeding,
                <br />
                chopping & marinating, so you can cock a fresh food.
              </p>
              <ButtonSecondary>Order Now</ButtonSecondary>
            </div>
            <picture className="hero-right">
              <img src={heroImg} alt="img do hero" />
            </picture>
          </Hero>
        </Wrapper>
        <Wrapper>
          <InformaticonSection>
            <div className="box">
              <Clock size={48} color="#f28202" weight="fill" />
              <strong>Today 10:00 am - 7:00 pm</strong>
              <p>Working hours</p>
            </div>
            <div className="box">
              <MapPin size={48} color="#f28202" weight="fill" />
              <strong>Velyka Vasylkivska 100</strong>
              <p>Get Directions</p>
            </div>
            <div className="box">
              <Phone size={48} color="#f28202" weight="fill" />
              <strong>+38 (063)833 24 15</strong>
              <p>Call Online</p>
            </div>
          </InformaticonSection>
        </Wrapper>
      </main>
    </>
  )
}
