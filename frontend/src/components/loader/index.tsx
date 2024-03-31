import { FC } from 'react';
import { BeatLoader } from 'react-spinners';

interface LoaderProps {
  color?: string;
  size?: number;
}

export const Loader: FC<LoaderProps> = ({ color = '#F9CC2E', size = 50 }) => (
  <div className="flex justify-center items-center h-96">
    <BeatLoader size={size} color={color} />
  </div>
);
