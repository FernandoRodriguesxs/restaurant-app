import { Header } from './components/Header'
import { Hero } from './App.styles'
import { ButtonSecondary } from './components/Button'
import heroImg from './assets/img-hero.png'

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero>
          <div className="hero-left">
            <h1>
              Your Favourite Food <br /> Delivered Hot & <br /> Fresh
            </h1>
            <p>
              Healthy switcher do all the prep work, like peeding,
              <br />
              chopping & marinating, so you can coock a fresh food.
            </p>
            <ButtonSecondary>Order Now</ButtonSecondary>
          </div>
          <picture className="hero-right">
            <img src={heroImg} alt="img do hero" />
          </picture>
        </Hero>
      </main>
    </>
  )
}
