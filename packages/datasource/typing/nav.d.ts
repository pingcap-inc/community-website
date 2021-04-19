import { Locale } from './index';

type NavItem = NavContainerItem

type NavContainerItem = {
  readonly title: string,
  readonly items: NavItem[],
}

type NavEndpointItem = {
  readonly title: string,
  readonly link: string,
}

type NavData = Record<Locale, NavItem[]>

export type Nav = {
  readonly header: NavData;
  readonly footer: NavData;
}
