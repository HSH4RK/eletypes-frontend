/**
 * Regression tests for the SSENSE editorial theme (style PR).
 *
 * Guarantees:
 *  - the SSENSE theme is registered and defines every key the app reads
 *  - the chrome helper only activates for the SSENSE label
 *  - ALL chrome overrides are scoped under `body.ssense`, so no other
 *    theme can ever be affected by the editorial restyle
 *
 * Run with: npm test (Node 20 built-in test runner, no extra dependencies).
 */

import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { themesOptions, ssenseTheme } from "../src/style/theme.js";
import { isSsenseTheme, SSENSE_LABEL } from "../src/services/ssenseChrome.js";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

// Every key the app reads off a theme object (grep theme.<key> in src/).
const REQUIRED_THEME_KEYS = [
  "label",
  "background",
  "text",
  "gradient",
  "title",
  "textTypeBox",
  "stats",
  "fontFamily",
];

describe("ssense theme", () => {
  it("is registered in the theme picker", () => {
    const entry = themesOptions.find((o) => o.label === "SSENSE");
    assert.ok(entry, "SSENSE missing from themesOptions");
    assert.equal(entry.value.label, "SSENSE");
  });

  it("defines every key the app reads from a theme", () => {
    for (const k of REQUIRED_THEME_KEYS) {
      assert.ok(
        ssenseTheme[k] !== undefined && ssenseTheme[k] !== "",
        `ssenseTheme.${k} is missing`
      );
    }
  });

  it("uses the editorial palette (paper / ink / accent)", () => {
    assert.equal(ssenseTheme.background, "#fafaf7");
    assert.equal(ssenseTheme.text, "#111111");
    assert.equal(ssenseTheme.stats, "#ff3b00");
    assert.ok(
      ssenseTheme.fontFamily.includes("Helvetica"),
      "editorial grotesque stack missing"
    );
  });

  it("chrome helper activates only for the SSENSE label", () => {
    assert.equal(SSENSE_LABEL, "SSENSE");
    assert.equal(isSsenseTheme(ssenseTheme), true);
    assert.equal(isSsenseTheme({ label: "Dark" }), false);
    assert.equal(isSsenseTheme({ label: "ssense" }), false); // case-sensitive
    assert.equal(isSsenseTheme(null), false);
    assert.equal(isSsenseTheme(undefined), false);
  });

  it("every chrome override is scoped under body.ssense", () => {
    const src = readFileSync(join(ROOT, "src/style/ssense.js"), "utf8");
    const code = src.replace(/\/\*[\s\S]*?\*\//g, ""); // strip comments
    for (const sel of [
      ".logo-title",
      ".nav-item",
      ".nav-mode",
      ".submit-score-btn",
      ".modal-content",
      ".select",
      ".words",
      ".stats",
      ".rank-card",
    ]) {
      const unscoped = new RegExp(`(^|\\n)\\s*\\${sel} \\{`);
      assert.ok(
        !unscoped.test(code),
        `${sel} has an unscoped rule — it would leak into other themes`
      );
    }
    const scopedCount = (code.match(/body\.ssense/g) || []).length;
    assert.ok(scopedCount >= 20, `expected 20+ scoped selectors, got ${scopedCount}`);
  });

  it("the three app shells mount the editorial styles conditionally", () => {
    for (const f of ["src/App.jsx", "src/pages/KeyboardLabPage.jsx", "src/pages/MarkdownPage.jsx"]) {
      const src = readFileSync(join(ROOT, f), "utf8");
      assert.ok(src.includes("SsenseStyles"), `${f}: SsenseStyles not mounted`);
      assert.ok(
        src.includes("isSsenseTheme(theme) && <SsenseStyles />"),
        `${f}: SsenseStyles not conditional on the theme`
      );
      assert.ok(src.includes("applySsenseBodyClass(theme)"), `${f}: body class not toggled`);
    }
  });
});
