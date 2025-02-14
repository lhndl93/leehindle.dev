import { useLayoutEffect, useEffect } from 'react';
export { useWebVitals } from '@/hooks/use-web-vitals';
export { useMediaQuery } from '@/hooks/use-media-query';

// Shared isomorphic layout effect hook
export const useIsomorphicLayoutEffect = 
  typeof window !== 'undefined' ? useLayoutEffect : useEffect; 