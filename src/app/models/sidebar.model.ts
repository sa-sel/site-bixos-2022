export interface SidebarItemModel {
  title: string
  link: {
    url: string
    fragment?: string
  }
  subitems?: {
    title: string
    url: string
  }[]
}
