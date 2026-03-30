import { PrettierStack } from '@premierstacks/prettier-stack';

// eslint-disable-next-line no-restricted-exports
export default new PrettierStack()
  .xml()
  .pug()
  .ruby()
  .build();
