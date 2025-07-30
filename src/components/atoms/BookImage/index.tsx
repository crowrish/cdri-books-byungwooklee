'use client';

import { FC, useState } from 'react';

import Image from 'next/image';

interface BookImageProps {
  src?: string;
  width: number;
  height: number;
  alt: string;
}

const BookImage: FC<BookImageProps> = ({ src, width, height, alt }) => {
  const [imageSrc, setImageSrc] = useState(src || '/book-default.png');

  return (
    <Image
      src={imageSrc}
      onError={() => setImageSrc('/book-default.png')}
      width={width}
      height={height}
      alt={alt}
    />
  );
};

export default BookImage;
