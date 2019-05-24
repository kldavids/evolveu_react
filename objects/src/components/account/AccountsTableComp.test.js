import React from 'react';
import ReactDOM from 'react-dom';
import AccountsTableComp from './AccountsTableComp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AccountsTableComp />, div);
  ReactDOM.unmountComponentAtNode(div);
});