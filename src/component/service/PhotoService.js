
export const PhotoService = {
    getImages: () => {
      return Promise.resolve([
        {
            itemImageSrc: 'src/imagenes/acostado.jpg',
            thumbnailImageSrc: 'src/imagenes/acostado.jpg',
            alt: 'messi 1',
            title: 'Title 1'
        },
        {
            itemImageSrc: 'src/imagenes/copaYPremioBEst.jpg',
            thumbnailImageSrc: 'src/imagenes/copaYPremioBEst.jpg',
            alt: 'messi festejando',
            title: 'messi 4'
        },
        {
            itemImageSrc: 'src/imagenes/mesiArribaKun.jpg',
            thumbnailImageSrc: 'src/imagenes/mesiArribaKun.jpg',
            alt: 'messi besando la del mundo',
            title: 'messi 2'
        },
        {
            itemImageSrc: 'src/imagenes/llegandoalpais.jpg',
            thumbnailImageSrc: 'src/imagenes/llegandoalpais.jpg',
            alt: 'messi chikito festejando',
            title: 'messi 3'
        },
        {
            itemImageSrc: 'src/imagenes/recibiendolacopa.jpg',
            thumbnailImageSrc: 'src/imagenes/recibiendolacopa.jpg',
            alt: 'messi enojao',
            title: 'messi 5'
        }
      ]);
    }
  };