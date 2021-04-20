type NavItem = NavContainerItem

type NavContainerItem = {
  readonly title: string,
  readonly items: NavItem[],
}

type NavEndpointItem = {
  readonly title: string,
  readonly link: string,
}

type Icon = {
  readonly icon: any
  readonly link: string
}

type HeaderData = {
  readonly navItems: NavItem[]
}

type FooterData = {
  readonly navItems: NavItem[]
  readonly icons: Icon[]
}

export type Nav = {
  readonly header: NavData;
  readonly footer: FooterData;
}
