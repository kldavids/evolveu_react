import React from 'react';
import ReactDOM from 'react-dom';
import AccountEditComp from './AccountEditComp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AccountEditComp />, div);
  ReactDOM.unmountComponentAtNode(div);
});