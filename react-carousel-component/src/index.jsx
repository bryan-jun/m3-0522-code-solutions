import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';

const pictures = [
  { number: '1', address: 'https://beta.api.solanalysis.com/images/400x400/filters:frames(,0)/https://dl.airtable.com/.attachments/ec43a1e86456ac3060ba197a6b626713/d1167734/banner_ME.png' },
  { number: '2', address: 'https://beta.api.solanalysis.com/images/400x400/filters:frames(,0)/https://storage.googleapis.com/hs-crypto-public/1/5-31-2022/trippy_stoned_frogz_pfp_1653955129686.jpeg' },
  { number: '3', address: 'https://beta.api.solanalysis.com/images/400x400/filters:frames(,0)/https://dl.airtable.com/.attachments/926c9898c81dcc19b344ad597d266665/0d95fede/nii.jpg' },
  { number: '4', address: 'https://beta.api.solanalysis.com/images/400x400/filters:frames(,0)/https://dl.airtable.com/.attachments/954eeb488ff029e89205ff8683fd3579/665f01ee/Pic_1.png' },
  { number: '5', address: 'https://beta.api.solanalysis.com/images/400x400/filters:frames(,0)/https://storage.googleapis.com/hs-crypto-public/5000_lY_HbphV.jpg' }
];

const element = <Carousel source = {pictures} />;

const container = document.querySelector('#root');

const root = ReactDOM.createRoot(container);

root.render(element);
