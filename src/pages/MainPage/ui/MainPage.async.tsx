import {lazy} from 'react';

export const MainPageAsync = lazy(() => new Promise(resolve => {
  //@ts-ignore
  // Искусственная задержка
  setTimeout(() => resolve(import('./MainPage')), 1500)
}));
