import React from 'react';
import ReactDOM from 'react-dom';
import AccountsApp from './AccountsApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AccountsApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});