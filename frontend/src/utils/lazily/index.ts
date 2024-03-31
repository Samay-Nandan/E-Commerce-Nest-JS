import { lazy, ComponentType } from 'react';
import { Loader } from '@src/components';

const hasNamedComponent = (
  module: unknown,
  componentName: string
): module is { [key: string]: ComponentType } =>
  Boolean(module && typeof module === 'object' && componentName in module);

export const lazily = (
  modulePromise: Promise<unknown>,
  componentName: string
) => {
  return lazy(async () => {
    try {
      const module = await modulePromise;
      if (!hasNamedComponent(module, componentName))
        throw new Error(`Module doesn't contain component ${componentName}`);
      return { default: module[componentName] };
    } catch (error) {
      return { default: Loader };
    }
  });
};
