import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Img = ( {src,className,alt} ) => {

  return (
    
        <LazyLoadImage 
            alt={alt}
            src={src}
            effect='blur'
            className={className || '' }
        />
  )
}

export default Img