import React from 'react';
import ReactDOM from 'react-dom/client';
import ValidatedInput from './validated-input';

const element = <ValidatedInput />;

const container = document.querySelector('#root');

const root = ReactDOM.createRoot(container);

root.render(element);
