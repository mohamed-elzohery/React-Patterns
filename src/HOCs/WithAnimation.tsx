import React from 'react';

export interface Animatable {
    animate: () => void
}

export interface WithAnimattionPropsI  {
    WrappedElement: React.FC<Partial<Animatable>>
}

const WithAnimation: React.FC<WithAnimattionPropsI> = ({WrappedElement}) => {
    const animate = () => console.log("animated");
  return <WrappedElement animate={animate} />
}

export default WithAnimation