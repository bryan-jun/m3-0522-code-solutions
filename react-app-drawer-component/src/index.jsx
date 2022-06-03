import React from 'react';
import ReactDOM from 'react-dom/client';
import AppDrawer from './app-drawer';

const element = <AppDrawer />;

const container = document.querySelector('#root');

const root = ReactDOM.createRoot(container);

root.render(element);
