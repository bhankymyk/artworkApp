import React from 'react';

const Spinner = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[500px] h-[500px] border-t-4 border-b-4 border-gray-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
