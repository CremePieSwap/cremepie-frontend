import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'CremePieSwap',
  description:
    'The most popular AMM on Polygon by user count! Earn CPIE through yield farming or win it in the Lottery, then stake it in Cream Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by CremePieSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://cremepieswapfinance.com/token-sale-timeline.jpg',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('CremePieSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('CremePieSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('CremePieSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('CremePieSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('CremePieSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('CremePieSwap')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('CremePieSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('CremePieSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('CremePieSwap')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('CremePieSwap')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('CremePieSwap')}`,
      }
    default:
      return null
  }
}
