import {
  BLACK,
  BLUE,
  BLUE_HIGHLIGHT,
  DARK_GRAY_LINES,
  GRAY_LINES,
  GRAY,
  LIGHT,
  LIME,
  LIME_40,
  PURPLE,
  RED,
  RED_40,
  SILVER,
  WHITE,
  PURPLE_HIGHLIGHT,
  PURPLE_DISABLED,
  PURPLE_LIGHT,
  RED_LIGHT,
  BLUE_HIGHLIGHT_LIGHT,
} from '../colors/main';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  accent: {
    alert: '#F6540B',
    cyan: '#65E3FF',
    cyanTransparent: 'rgba(101, 227, 255, 0.12)',
    info: '#00ABFF',
    infoTransparent: 'rgba(0, 171, 255, 0.5)',
    negative: '#FF1E59',
    negativeTransparent: 'rgba(255, 30, 89, 0.3)',
    positive: '#00A81A',
    primaryTransparent: 'rgb(155, 108, 167, 0.5)',
    warning: '#DD9900',
    warningTransparent: 'rgba(221, 153, 0, 0.5)',
  },
  background: {
    dark: GRAY,
    header: SILVER,
    muted: SILVER,
    navigation: '#EDEDED',
    negative: RED_40,
    page: WHITE,
    positive: LIME_40,
    row: LIGHT,
  },
  brand: {
    earth100: '#C6EEDB',
    earth200: '#9DDFBF',
    earth300: '#6BBF96',
    earth400: '#37A46F',
    earth400Transparent: 'rgba(55, 164, 111, 0.4)',
    earth500: '#00954C',
    energy100: '#FFF4BA',
    energy200: '#FFED92',
    energy300: '#FFE662',
    energy400: '#FFDA19',
    energy400Transparent: 'rgba(255, 218, 25, 0.04)',
    energy500: '#F6C000',
    fire100: '#FFD7E0',
    fire200: '#FFA3B9',
    fire300: '#FF547D',
    fire400: '#FF144D',
    fire400Transparent: 'rgba(255, 20, 77, 0.4)',
    fire500: '#EB0032',
    stone100: '#F3E6D7',
    stone200: '#E3D4C2',
    stone400: '#BFA78B',
    stone500: '#AF8859',
    water100: '#BDCEFF',
    water200: '#81A1FF',
    water300: '#517DFF',
    water400: '#2A60FE',
    water400Transparent: 'rgba(42, 96, 254, 0.4)',
    water500: '#0F4CFF',
    wind100: '#EEEAFF',
    wind200: '#CCC1F4',
    wind300: '#A698DD',
    wind400: '#6B50D7',
    wind400SuperTransparent: 'rgba(107, 80, 215, 0.12)',
    wind400Transparent: 'rgba(107, 80, 215, 0.4)',
    wind500: '#4E32BC',
  },
  chart: {
    backgroundPrimary: PURPLE_LIGHT,
    backgroundSecondary: RED_LIGHT,
    backgroundTertiary: BLUE_HIGHLIGHT_LIGHT, 
    lines: '#9B6CA7',
    primary: PURPLE,
    secondary: RED,
    tertiary: BLUE_HIGHLIGHT,
  },
  content: {
    active: BLACK,
    default: WHITE,
    disabled: GRAY_LINES,
    muted: GRAY,
  },
  elevation: {
    visualizationAccent: '#996CFF',
    visualizationAccentAlt: '#C1ACF7',
  },
  feature: {
    active: PURPLE_HIGHLIGHT,
    disabled: PURPLE_DISABLED,
  },
  interactive: {
    activeBorder: BLACK,
    dangerBorder: RED,
    defaultBorder: GRAY_LINES,
    disabledBorder: GRAY,
    focusBackground: GRAY,
    focusBorder: BLUE_HIGHLIGHT,
    hoverBackground: SILVER,
    hoverBorder: DARK_GRAY_LINES,
    linkPrimary: BLUE,
    linkSecondary: PURPLE,
    linkSecondaryDisabled: PURPLE_LIGHT,
  },
  loader: {
    color: '#EB0032',
  },
  monotone: {
    black: BLACK,
    blackTransparent: 'rgba(0, 0, 0, 0.6)',
    gray: GRAY,
    grey100: '#F2F2F2',
    grey200: '#D5D7DC',
    grey300: '#B4B8C0',
    grey400: '#70747C',
    grey500: '#28292C',
    purple: PURPLE,
    white: WHITE,
  },
  neutral: {
    n100: '#E7E8EA',
    n200: '#D8DADE',
    n300: '#CBCCD0',
    n400: '#BCBEC4',
    n500: '#AEB0B6',
  },
  percentage: {
    negative: RED,
    positive: LIME,
  },
  progress: {
    negative: RED,
    positive: PURPLE,
  },

  shadow: {
    base: '12px 40px 120px rgba(106, 117, 139, 0.4)',
    menu: '4px 10px 20px rgba(6, 6, 6, 0.12)',
    popup: '10px 20px 40px rgba(0, 0, 0, 0.2)',
  },
};

