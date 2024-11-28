import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // App 컴포넌트를 jsx 파일로 변경할 수 있음
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
