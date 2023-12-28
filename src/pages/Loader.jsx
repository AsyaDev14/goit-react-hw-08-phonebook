import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div className='loader'>
      <InfinitySpin
        visible={true}
        width="200"
        color="#252dc6"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
};