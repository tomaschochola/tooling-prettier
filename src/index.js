/**
 * @file
 * @author Tomáš Chochola <tomaschochola@tomaschochola.cz>
 * @copyright © 2026 Tomáš Chochola <tomaschochola@tomaschochola.cz>
 *
 * @license CC-BY-ND-4.0
 *
 * @see {@link https://creativecommons.org/licenses/by-nd/4.0/} License
 * @see {@link https://github.com/tomaschochola} GitHub Profile
 * @see {@link https://github.com/sponsors/tomaschochola} GitHub Sponsors
 */

export class Prettier {
  config;

  constructor() {
    this.config = {
      arrowParens: 'always',
      endOfLine: 'lf',
      plugins: [],
      printWidth: 200,
      semi: true,
      singleAttributePerLine: true,
      singleQuote: true,
      tabWidth: 2,
      trailingComma: 'all',
      useTabs: false,
    };
  }

  get NODE_ENV() {
    return process.env.NODE_ENV;
  }

  replaceConfig(config) {
    this.config = { ...config };

    return this;
  }

  pluginPug(options = {}) {
    return this.replaceConfig({
      ...this.config,
      plugins: [...this.config.plugins, '@prettier/plugin-pug'],
      ...options,
    });
  }

  pluginRuby(options = {}) {
    return this.replaceConfig({
      ...this.config,
      plugins: [...this.config.plugins, '@prettier/plugin-ruby'],
      ...options,
    });
  }

  pluginXml(options = {}) {
    return this.replaceConfig({
      ...this.config,
      plugins: [...this.config.plugins, '@prettier/plugin-xml'],
      xmlQuoteAttributes: 'double',
      xmlWhitespaceSensitivity: 'ignore',
      ...options,
    });
  }

  buildConfig() {
    return { ...this.config };
  }
}
