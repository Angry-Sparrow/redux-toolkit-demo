import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import FiveComponent from './features/five/FiveComponent'

/**
 * UI comes from https://my.matterportvr.cn/show/?m=UqaGNrKo9mN
 * */

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <section id="app-container">
          {/* 此处可放错误bar等额外信息 */}
          <main>
              <App />
              <div className="canvas-container">
                  <div id="control-kit-wrapper"></div>
                  <FiveComponent />
              </div>
              <div className="loading-gui"></div>
              <div className="gui">
                  <div className="top-ui"></div>
                  <div className="showcase-ui-overlay">
                      {/* 整屏弹出的信息面板 */}
                      <div className="summary-panel-container"></div>
                      <div className="scene-overlay">
                          <div className="overlay-ui"></div>
                          <div className="tool-overlay">
                              {/* 编辑确认栏目等 */}
                              <div className="overlay-bar"></div>
                              {/* 编辑引导 */}
                              <div className="overlay-message"></div>
                              {/* 编辑工具 */}
                              <div className="overlay-cta"></div>
                          </div>
                          <div className="bottom-ui"></div>
                      </div>
                      <div className="panels"></div>
                  </div>
              </div>
          </main>
      </section>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
