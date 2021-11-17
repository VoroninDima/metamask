import React, {useEffect, useState} from 'react';
import { useWeb3React } from '@web3-react/core';
import { injected } from '../../utils/injected'
import UiButton from "../../components/UiButton";

const Home = () => {
    const { active, account, activate, deactivate } = useWeb3React();
    const [balance, setBalance] = useState(null);

    useEffect(() => {
        if (account) {
            window.web3.eth.getBalance(account)
                .then(res => setBalance(window.web3.utils.fromWei(res)))
        }
    }, [account]);

    const connect = async () => {
        try {
            await activate(injected)
        } catch (e) {
            console.log(e)
        }
    };

    const disconnect = async () => {
        try {
            deactivate()
        } catch (e) {
            console.log(e)
        }
    };

    return (
        <div className='home-page'>
            {active ? <UiButton onClick={disconnect}>Disconnect</UiButton> : (
                <UiButton onClick={connect}>Connect</UiButton>
            )}
            {active ? <span className='home-page__connected-message'>Connected with <b>{account}</b></span> : <span>Not connected</span>}
            {balance !== null && <div>Ваш баланс: {balance}</div>}
        </div>
    )
};

export default Home;