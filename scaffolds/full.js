import { PrettierConfigBuilder } from '@tomaschochola/tooling-prettier';

export default new PrettierConfigBuilder().addXmlPlugin().addPugPlugin().toConfig();
