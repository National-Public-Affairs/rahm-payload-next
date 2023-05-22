import React from 'react';
import { MediaType, Size } from '../../collections/Media';
import masks from '../graphics/Polygons/masks';
import useStyles from './css';


type Props = MediaType & {
  className?: string
  preferredSize?: Size
  clipMask?: 'one' | 'two';
}

const Media: React.FC<Props> = ({
  className,
  mimeType,
  filename,
  alt,
  preferredSize,
  sizes,
  clipMask,
  url,
}) => {
  const classes = useStyles();

  if (mimeType.includes('video')) {
    return (
      <div className={className}>
        <video
          autoPlay
          muted
          loop
          controls={false}
          className={classes.video}
        >
          <source src={`${process.env.NEXT_PUBLIC_SERVER_URL}/media/${filename}`} />
        </video>
      </div>
    );
  }

  if (clipMask === 'one') {
    return (
      <div className={className}>
        <img
          className={classes.image}
          src={url}
          alt={alt}
          style={{
            clipPath: clipMask === 'one' ? masks.maskOne : masks.maskTwo,
          }}
        />
      </div>
    );
  }

  return (
    <div className={className}>
      <img
        className={classes.image}
        src={url}
        alt={alt}
      />
    </div>
  );
};

export default Media;
