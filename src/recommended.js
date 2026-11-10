import xmlPlugin from '@prettier/plugin-xml';

import baseConfig from './base.js';

export default Object.freeze({
    ...baseConfig,
    plugins: Object.freeze([...baseConfig.plugins, xmlPlugin]),
    xmlQuoteAttributes: 'double',
    xmlSelfClosingSpace: true,
    xmlSortAttributesByKey: false,
    xmlWhitespaceSensitivity: 'strict',
});
