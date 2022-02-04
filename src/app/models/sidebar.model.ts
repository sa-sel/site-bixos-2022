interface LinkModel {
  url: string
  fragment?: string
}

export interface SidebarItemModel {
  title: string
  icon: string
  link: LinkModel
  subitems?: {
    title: string
    link: LinkModel
  }[]
}
