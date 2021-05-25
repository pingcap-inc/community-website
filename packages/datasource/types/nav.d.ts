type NavItem = NavContainerItem;

type NavContainerItem = {
  readonly title: string;
  readonly items: NavItem[];
};

type NavEndpointItem = {
  readonly title: string;
  readonly link: string;
};

type Icon = {
  readonly icon: any;
  readonly link: string;
};

type HeaderData = {
  readonly navItems: NavItem[];
  readonly homeUrl: string;
};

type FooterData = {
  readonly navItems: NavItem[];
  readonly icons: Icon[];
};

type ActivityData = {
  readonly bannerImage: string;
  readonly buttonImage: string;
  readonly text: string;
  readonly link: string;
};

export type Nav = {
  readonly header: HeaderData;
  readonly footer: FooterData;
  readonly activity: ActivityData;
};
