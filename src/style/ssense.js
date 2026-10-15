import { createGlobalStyle } from "styled-components";

/**
 * SsenseStyles — SSENSE-style editorial chrome for Eletypes.
 *
 * Mounted only when the "SSENSE" theme is active (see src/services/ssenseChrome.js).
 * Everything is scoped under `body.ssense`, so all other themes are untouched —
 * this is the proposal the user reviews before deciding to migrate.
 *
 * Design language (from the SSENSE brutalist/editorial study):
 *  - Typography-led: grotesque stack, tight display tracking, micro uppercase labels
 *  - Hairline 1px rules instead of shadows / gradients / rounded cards
 *  - Sharp corners everywhere (border-radius: 0)
 *  - One accent (#ff3b00) reserved for stats, caret and active states
 *  - Restraint: decorative icons and pulse animations removed
 */

export const SsenseStyles = createGlobalStyle`
  body.ssense {
    font-family: 'Helvetica Neue', Helvetica, Arial, 'PingFang SC',
      'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    text-shadow: none;
    letter-spacing: 0;
  }

  /* ---------- header / wordmark ---------- */
  body.ssense .logo-title {
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #111111;
    opacity: 1;
  }
  body.ssense .logo-accent {
    font-weight: 700;
  }
  body.ssense .logo-gant {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #686864;
    opacity: 1;
  }
  body.ssense .logo-icon {
    display: none;
  }
  body.ssense .header-banner {
    border-bottom: 1px solid #111111;
  }
  body.ssense .header-banner-prompt,
  body.ssense .header-banner-link {
    font-size: 11px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
  body.ssense .user-greeting {
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #686864;
  }

  /* ---------- config bar / nav ---------- */
  body.ssense .nav-group-label {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.18em;
    color: #686864;
    opacity: 1;
  }
  body.ssense .nav-group-items {
    border-radius: 0;
    border: 1px solid #111111;
    background: transparent;
  }
  body.ssense .nav-group-links .nav-group-items {
    border-color: transparent;
  }
  body.ssense .nav-item,
  body.ssense .nav-mode {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    opacity: 0.55;
  }
  body.ssense .nav-item:hover,
  body.ssense .nav-mode:hover {
    opacity: 1;
  }
  body.ssense .nav-item-active,
  body.ssense .nav-mode-active {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #111111;
    opacity: 1;
    text-decoration: underline;
    text-underline-offset: 5px;
    text-decoration-thickness: 1px;
  }

  /* ---------- typing surface ---------- */
  body.ssense .words {
    font-weight: 400;
    letter-spacing: -0.01em;
  }
  body.ssense .stats,
  body.ssense .keyboard-stats {
    font-variant-numeric: tabular-nums;
  }

  /* ---------- buttons / inputs ---------- */
  body.ssense .submit-score-btn {
    border-radius: 0;
    border: 1px solid #111111;
    color: #111111;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    padding: 12px 22px;
    animation: none;
    box-shadow: none;
  }
  body.ssense .submit-score-btn:hover {
    background: #111111;
    color: #fafaf7;
    transform: none;
    animation: none;
    box-shadow: none;
  }
  body.ssense .restart-button button {
    border-radius: 0;
  }
  body.ssense .restart-button button:hover {
    transform: none;
  }
  body.ssense .select {
    border-radius: 0;
    border: 1px solid #111111;
    font-size: 12px;
    box-shadow: none;
  }
  body.ssense button {
    border-radius: 0;
  }

  /* ---------- overlays / cards ---------- */
  body.ssense .modal-content {
    border-radius: 0;
    border: 1px solid #111111;
    box-shadow: none;
  }
  body.ssense .modal-title {
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }
  body.ssense .rank-card,
  body.ssense .badge-item,
  body.ssense .namecard {
    border-radius: 0;
    box-shadow: none;
    border: 1px solid #e2ded4;
  }
  body.ssense .profile-section-label,
  body.ssense .badge-category-title {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }
  body.ssense .profile-bracket {
    color: #686864;
  }

  /* ---------- footer ---------- */
  body.ssense .bottomBar {
    border-top: 1px solid #111111;
    padding-top: 12px;
  }
  body.ssense .profile-btn {
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }
`;
