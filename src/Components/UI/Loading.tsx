import React from 'react';
import { Oval } from  'react-loader-spinner';

export const Loading = () => {
  return (
    <div>
      <h1>
        Loading...
      </h1>
      <Oval
        height={40}
        width={40}
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass="pizzas__oval"
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};

