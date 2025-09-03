/// <reference types="vite/client" />

declare module "swiper/css";
declare module "swiper/css/navigation";
declare module "swiper/css/pagination";
declare module '@splidejs/react-splide/css';
declare module '@splidejs/react-splide/css/core';
declare module '@splidejs/react-splide' {
  import { ComponentType } from 'react';

  export const Splide: ComponentType<any>;
  export const SplideSlide: ComponentType<any>;
}