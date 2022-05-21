// Lazy Loading Views
const Gallery = () => (import(/* webpackChunkName: "picsum" */ '@/views/Gallery.vue'));

const routes = [
  {
    path: 'sample-gallery',
    name: 'Gallery',
    component: Gallery,
  },
  {
    path: 'sample-gallery/:id',
    name: 'GalleryDetails',
  },
];

export default routes;
