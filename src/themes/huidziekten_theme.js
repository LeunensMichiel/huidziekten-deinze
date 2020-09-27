const huidziektenTheme = {
  colors: {
    white: "#FBFBFB",
    accent: "#EBDFC7",
    accentRich: "#CDA65A",
    accentLight: "#F2F0ED",
    black: "#595755",
  },
  shadows: {
    button: "0px 4px 4px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.05)",
    container:
      "0px 4px 10px rgba(0, 0, 0, 0.1), 0px 2px 25px rgba(0, 0, 0, 0.1)",
  },
  borderRadius: "2px",
  fonts: {
    heading:
      '"Playfair Display", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
    body:
      'Nunito, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
  },
  fontSizes: ["12px", "14px", "18px", "24px", "36px"],
  lineHeights: {
    body: 1.5625,
    heading: 1,
  },
  space: ["6px", "8px", "14px", "20px", "32px", "36px", "64px", "96px"],
  mq: {
    mobileS: `(max-width: 374px)`,
    mobileSLandscape: `(max-width: 750px) and (max-height: 500px) and (orientation: landscape)`,
    mobileM: `(max-width: 767px)`,
    mobileMLandscape: `(max-width: 890px) and (max-height: 500px) and (orientation: landscape)`,
    tablet: `(max-width: 1024px)`,
    tabletland: `(max-width: 1024px) and (orientation: landscape)`,
    tabletPortrait: `(max-width: 1024px) and (orientation: portrait)`,
    ipadProPortrait: `(min-width: 1024px) 
       and (max-height: 1366px) 
       and (orientation: portrait) 
       and (-webkit-min-device-pixel-ratio: 1.5)`,
    laptop: `(max-width: 1440px)`,
    desktop: `(min-width: 1680px)`,
  },
}

export default huidziektenTheme
