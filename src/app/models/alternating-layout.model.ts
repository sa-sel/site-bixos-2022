import { ImageModel } from '@models'

export interface AlternatingLayoutModel {
  image?: ImageModel
  text?: string
  imageOnLeft?: boolean
  title?: string
  subtitle?: boolean
}
