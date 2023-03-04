import React from 'react';

export interface HasChildren {
    children: JSX.Element | JSX.Element[]
}

export interface WithAnimattionPropsI extends HasChildren {
    
}

const WithAnimation: React.FC<WithAnimattionPropsI> = ({children}) => {
  return (
    <div>{children}</div>
  )
}

export default WithAnimation