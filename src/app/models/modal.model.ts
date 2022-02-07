import { ImageModel } from '@models'

export interface ModalModel {
  image?: ImageModel
  text?: string
  title: string
  url?: string
}
