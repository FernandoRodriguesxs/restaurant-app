import { Header } from './components/Header'
import { Wrapper, Hero, InformaticonSection, AboutSection } from './App.styles'
import { ButtonSecondary, ButtonThree } from './components/Button'
import heroImg from './assets/img-hero.png'
import aboutImg from './assets/img-header.png'
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
        <Wrapper>
          <AboutSection>
            <picture className="about-left">
              <img src={aboutImg} alt="#" />
            </picture>
            <div className="about-right">
              <p className="about-orange">About</p>
              <h2>
                Food Is An important Part <br />
                Of a Balanced Diet
              </h2>
              <p>
                They actually assured me over and over that take <br />
                little time off and come back and work.Fast <br />
                forward tow weeks after <br />
                we are going for a new project <br />
                <br />
                I wrote to let them know ready to come back they <br />
                kicked <br />
                me of the their team slack all of us are make company <br />
                email
              </p>
              <div className="button-group">
                <ButtonSecondary>Order Now</ButtonSecondary>
                <ButtonThree>Watch Video</ButtonThree>
              </div>
            </div>
          </AboutSection>
        </Wrapper>
      </main>
    </>
  )
}
