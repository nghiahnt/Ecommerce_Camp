import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from './components/GlobalStyles';
import Modal from 'react-modal';
import store from './redux/store';
import { Provider } from 'react-redux';

Modal.setAppElement('#root');
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <GlobalStyles>
            <Provider store={store}>
                <App />
            </Provider>
        </GlobalStyles>
    </React.StrictMode>,
);
