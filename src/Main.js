import React from 'react';
import RenderRoutes from './components/RenderRoutes';
import { Web3ReactProvider } from '@web3-react/core'
import Layout from './layouts/Layout';
import routes from './routes';
import Web3 from 'web3'
import './styles/Main.scss';

const getLibrary = (provider) => new Web3(provider);
window.web3 = new Web3(window.ethereum);

const Main = () => (
    <Web3ReactProvider getLibrary={getLibrary}>
        <Layout>
            <RenderRoutes routes={routes}/>
        </Layout>
    </Web3ReactProvider>
);

export default Main;