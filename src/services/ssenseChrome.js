/**
 * ssenseChrome — mounts the SSENSE editorial chrome only when the SSENSE theme
 * is active. Everything visual lives in src/style/ssense.js scoped under
 * `body.ssense`; this module just toggles that class.
 */

export const SSENSE_LABEL = "SSENSE";

export const isSsenseTheme = (theme) => theme?.label === SSENSE_LABEL;

export const applySsenseBodyClass = (theme) => {
  if (typeof document === "undefined") return;
  document.body.classList.toggle("ssense", isSsenseTheme(theme));
};
