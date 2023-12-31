import { ReactNode } from 'react'
import { CardContainer } from './styles'

interface ICardProps {
  title: string
  subtitle: string
  description: string
  price: string
  foodImg: string
  icon: ReactNode
}
export const Card = ({
  foodImg,
  title,
  subtitle,
  price,
  icon,
  description,
}: ICardProps) => {
  return (
    <CardContainer>
      <picture>
        <img src={foodImg} alt="" />
      </picture>
      <div className="product-information">
        <div className="information">
          <h3>{title}</h3>
          <span>{subtitle}</span>
        </div>
        <span>{price}</span>
      </div>
      <p>{description}</p>
      <div className="card-avaliation">
        <span>{icon}</span>
        <button>+</button>
      </div>
    </CardContainer>
  )
}
