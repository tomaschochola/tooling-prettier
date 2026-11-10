import assert from 'node:assert/strict';
import test from 'node:test';

import defaultConfig, { PrettierConfigBuilder, baseConfig, recommendedConfig } from '@tomaschochola/tooling-prettier';

test('baseConfig is a frozen plain object', () => {
    assert.equal(typeof baseConfig, 'object');
    assert.equal(Object.getPrototypeOf(baseConfig), Object.prototype);
    assert.equal(Object.isFrozen(baseConfig), true);
});

test('recommendedConfig is a frozen plain object', () => {
    assert.equal(typeof recommendedConfig, 'object');
    assert.equal(Object.getPrototypeOf(recommendedConfig), Object.prototype);
    assert.equal(Object.isFrozen(recommendedConfig), true);
});

test('default export is a frozen plain object', () => {
    assert.equal(typeof defaultConfig, 'object');
    assert.equal(Object.getPrototypeOf(defaultConfig), Object.prototype);
    assert.equal(Object.isFrozen(defaultConfig), true);
});

test('PrettierConfigBuilder is a class constructor', () => {
    assert.equal(typeof PrettierConfigBuilder, 'function');

    const builder = new PrettierConfigBuilder();

    assert.ok(builder instanceof PrettierConfigBuilder);
});
