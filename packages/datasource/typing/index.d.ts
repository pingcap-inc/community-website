import { Nav } from './nav';

type Locale = 'en' | 'zh'
type Env = 'production' | 'development'
type Domain = 'tidb.io' | 'tug.tidb.io' | 'contributor.tidb.io'

type EnvDomainConfig = Record<Env, Record<Domain, string>>

type Data = {
  nav: Nav
}

type GetDataParams = {
  domain: string
  path: string
  locale: Locale
  env?: Env // default is process.env.RUNTIME_ENV
  envDomainConfig?: EnvDomainConfig // default is configured in this package
}

export function getData (params: GetDataParams): Data;
