import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'fluid-core',
  taskQueue: 'async',
  sourceMap: true,
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: '@fluid/fluid-core',
      proxiesFile:
        '../../../libs/react/src/lib/stencil-generated/components.ts',
      includeDefineCustomElements: true,
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null,
    },
  ],
  extras: {
    experimentalImportInjection: true,
  },
};
