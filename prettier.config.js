import { PrettierConfigBuilder } from './src/index.js';

export default new PrettierConfigBuilder().addXmlPlugin().toConfig();
