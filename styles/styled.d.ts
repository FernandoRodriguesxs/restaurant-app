import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      orange: {
        primary: string
      }
      gray: {
        primary: string
        secondary: string
      }
      white: string
    }
  }
}
