import { ImageModel, ModalModel } from '@models'

export interface ImageGridItemModel {
  image: ImageModel
  modal?: ModalModel
  url?: string
}
