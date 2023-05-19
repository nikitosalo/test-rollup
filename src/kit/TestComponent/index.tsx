import React, { FC } from 'react';
// import { ITestComponent } from './types';

export const TestComponent: FC = ({ text }) => {
  return <div>{text || 'Test Component'}</div>;
};
