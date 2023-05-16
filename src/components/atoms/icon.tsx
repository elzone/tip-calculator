import { FC } from 'react';
import { IconType } from '../../models/types/types';

const Icon: FC<IconType> = ({src}) => {
  return <img src={src}/>
}

export {Icon}
