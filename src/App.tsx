import { Header } from './components/Header'
import { Card } from './components/Card'
import {
  Wrapper,
  Hero,
  InformaticonSection,
  AboutSection,
  WorkSection,
  ServicesCard,
  CardSection,
  FeedbackClient,
  QuestionSection,
  Footer,
} from './App.styles'
import { ButtonSecondary, ButtonVideo } from './components/Button'
import heroImg from './assets/img-hero.png'
import aboutImg from './assets/img-header.png'
import cardImg from './assets/card5.jpg'
import snorlax from './assets/snorlax.png'
import LogoImg from './assets/logo.png'
import {
  Clock,
  BowlFood,
  Truck,
  MapPin,
  Phone,
  PlayCircle,
  HandTap,
  Star,
  MetaLogo,
  LinkedinLogo,
  TwitterLogo,
} from '@phosphor-icons/react'

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
            <div className="about-right-container">
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
                  <ButtonVideo>
                    <PlayCircle size={32} />
                    Watch Video
                  </ButtonVideo>
                </div>
              </div>
            </div>
          </AboutSection>
        </Wrapper>
        <Wrapper>
          <WorkSection>
            <div className="work">
              <p className="work-orange">Work</p>
              <h2>How It Works</h2>
              <p>
                its through mistakes that you actually can grow you get rid of.{' '}
                <br />
                everything that is not essential to makihave to get bad
              </p>
            </div>
          </WorkSection>
        </Wrapper>
        <Wrapper>
          <ServicesCard>
            <div className="card-work">
              <Truck size={64} color="#f28202" weight="fill" />
              <h3>Fast Deliveries</h3>
              <p>
                Your freshly prepped 15-min dinner <br />
                kits arrive on your doorstep in a <br />
                refrigerated box
              </p>
            </div>
            <div className="card-work">
              <HandTap size={64} color="#f28202" weight="fill" />
              <h3>Fast Deliveries</h3>
              <p>
                Your freshly prepped 15-min dinner <br />
                kits arrive on your doorstep in a <br />
                refrigerated box
              </p>
            </div>
            <div className="card-work">
              <BowlFood size={64} color="#f28202" weight="fill" />
              <h3>Fast Deliveries</h3>
              <p>
                Your freshly prepped 15-min dinner <br />
                kits arrive on your doorstep in a <br />
                refrigerated box
              </p>
            </div>
          </ServicesCard>
        </Wrapper>
        <Wrapper>
          <WorkSection>
            <div className="work">
              <p className="work-orange">Menu</p>
              <h2>Explore Our Best Menu</h2>
              <p>
                its through mistakes that you actually can grow you get rid of.{' '}
                <br />
                everything that is not essential to makihave to get bad
              </p>
            </div>
          </WorkSection>
        </Wrapper>
        <Wrapper>
          <CardSection>
            <Card
              foodImg={cardImg}
              title="Rose Muffen"
              subtitle="Served with french fries + "
              price="12$"
              description="Choice of Coke, Fanta, Sprite, Fanta, Sprite Sprite, Fanta, Sprite Sprite, Fanta, Sprite Sprite, Fanta, Sprite "
              icon={[<Star size={28} color="#f28202" weight="fill" />]}
            />
            <Card
              foodImg={cardImg}
              title="Rose Muffen"
              subtitle="Served with french fries + "
              price="12$"
              description="Choice of Coke, Fanta, Sprite, Fanta, Sprite Sprite, Fanta, Sprite Sprite, Fanta, Sprite Sprite, Fanta, Sprite "
              icon={[<Star size={28} color="#f28202" weight="fill" />]}
            />
            <Card
              foodImg={cardImg}
              title="Rose Muffen"
              subtitle="Served with french fries + "
              price="12$"
              description="Choice of Coke, Fanta, Sprite, Fanta, Sprite Sprite, Fanta, Sprite Sprite, Fanta, Sprite Sprite, Fanta, Sprite "
              icon={[<Star size={28} color="#f28202" weight="fill" />]}
            />
            <Card
              foodImg={cardImg}
              title="Rose Muffen"
              subtitle="Served with french fries + "
              price="12$"
              description="Choice of Coke, Fanta, Sprite, Fanta, Sprite Sprite, Fanta, Sprite Sprite, Fanta, Sprite Sprite, Fanta, Sprite "
              icon={[<Star size={28} color="#f28202" weight="fill" />]}
            />
            <Card
              foodImg={cardImg}
              title="Rose Muffen"
              subtitle="Served with french fries + "
              price="12$"
              description="Choice of Coke, Fanta, Sprite, Fanta, Sprite Sprite, Fanta, Sprite Sprite, Fanta, Sprite Sprite, Fanta, Sprite "
              icon={[<Star size={28} color="#f28202" weight="fill" />]}
            />
            <Card
              foodImg={cardImg}
              title="Rose Muffen"
              subtitle="Served with french fries + "
              price="12$"
              description="Choice of Coke, Fanta, Sprite, Fanta, Sprite Sprite, Fanta, Sprite Sprite, Fanta, Sprite Sprite, Fanta, Sprite "
              icon={[<Star size={28} color="#f28202" weight="fill" />]}
            />
          </CardSection>
        </Wrapper>
        <Wrapper>
          <WorkSection>
            <div className="work">
              <p className="work-orange">Testimonial</p>
              <h2>What They Are Saying</h2>
              <p>
                its through mistakes that you actually can grow you get rid of{' '}
                <br />
                everything that is not essential to makihave to get bad
              </p>
            </div>
          </WorkSection>
        </Wrapper>
        <Wrapper>
          <FeedbackClient>
            <picture>
              <img src={snorlax} alt="#" />
            </picture>
            <p>
              They are engaged communicators and dedicated problem-salvers{' '}
              <br />
              regardless of time constraints. The team manageprojet them.
            </p>
            <div className="avaliation">
              <Star size={28} color="#f28202" weight="fill" />
              <Star size={28} color="#f28202" weight="fill" />
              <Star size={28} color="#f28202" weight="fill" />
              <Star size={28} color="#f28202" weight="fill" />
              <Star size={28} color="#f28202" weight="fill" />
            </div>
          </FeedbackClient>
        </Wrapper>
        <Wrapper>
          <QuestionSection>
            <h2>
              Have Quest in Mind? <br />
              Let us help you
            </h2>
            <span>
              <ButtonSecondary>Send</ButtonSecondary>
            </span>
          </QuestionSection>
        </Wrapper>
      </main>
      <Wrapper>
        <Footer>
          <div className="logo-footer">
            <div className="logo">
              <img src={LogoImg} alt="" />
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <ul className="social-media">
              <li>
                <MetaLogo size={24} />
              </li>
              <li>
                <TwitterLogo size={24} />
              </li>
              <li>
                <LinkedinLogo size={24} />
              </li>
            </ul>
          </div>
          <div>
            <h2>Company</h2>
            <ul>
              <li>About</li>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>How it Works</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h2>Support</h2>
            <ul>
              <li>Support Carrer</li>
              <li>24h Service</li>
              <li>Quick Chat</li>
            </ul>
          </div>
          <div>
            <h2>Contact</h2>
            <ul>
              <li>WathsApp</li>
              <li>Support 24</li>
            </ul>
          </div>
        </Footer>
      </Wrapper>
    </>
  )
}
