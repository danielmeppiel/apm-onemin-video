// APM Showcase — Design tokens & timing constants
// Styled after VS Code dark theme for Microsoft branding consistency
// Optimized for 1080×1080 (1:1 square — LinkedIn feed native)

export const COLORS = {
  // VS Code Dark Theme
  bg: "#1E1E1E",
  terminalBg: "#1E1E1E",
  terminalBar: "#333333",
  sidebarBg: "#252526",
  trafficRed: "#ff5f57",
  trafficYellow: "#febc2e",
  trafficGreen: "#28c840",

  // Text
  white: "#CCCCCC",
  dimWhite: "#858585",
  brightWhite: "#FFFFFF",

  // VS Code syntax colors (Dark+)
  green: "#6A9955",
  cyan: "#4EC9B0",
  yellow: "#DCDCAA",
  red: "#F44747",
  blue: "#569CD6",
  purple: "#C586C0",
  orange: "#CE9178",
  gray: "#404040",
  lightGreen: "#B5CEA8",

  // Accent
  vscodeBlue: "#007ACC",

  // Microsoft brand
  msRed: "#F25022",
  msGreen: "#7FBA00",
  msBlue: "#00A4EF",
  msYellow: "#FFB900",
};

export const TIMING = {
  CHAR_DELAY: 2,
  LINE_DELAY: 3,
  COMMAND_PAUSE: 15,
  FADE_DURATION: 12,
  TRANSITION_FRAMES: 20,
};

export const FONT = {
  mono: "'Cascadia Code', 'Cascadia Mono', 'Menlo', 'Monaco', 'Courier New', monospace",
  sans: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif",
};

export const VIDEO = {
  width: 1080,
  height: 1080,
  fps: 30,
};
