import React, {useState} from 'react';
import {useWeb3React} from "@web3-react/core";
import UiInput from "../../components/UiInput";
import UiButton from "../../components/UiButton";

const Send = () => {
    const { account } = useWeb3React();
    const [ethAmount, setEthAmount] = useState('');
    const [destinationAddress, setDestinationAddress] = useState('');
    const [error, setError] = useState('');

    const send = (e) => {
        e.preventDefault();

        if (!ethAmount || !destinationAddress) {
            setError('Заполните все поля');
        } else if (account) {
            const wei = window.web3.utils.toWei(ethAmount);

            window.ethereum
                .request({
                    method: 'eth_sendTransaction',
                    params: [
                        {
                            from: account,
                            to: destinationAddress,
                            value: (+wei).toString(16),
                        },
                    ],
                })
                .catch((error) => console.log(error));
        } else {
            setError('Для отправки формы подключитесь к метамаску на главной странице');
        }
    };

    return (
        <div>
            <form onSubmit={send}>
                <UiInput onChange={setEthAmount} type='number' value={ethAmount} placeholder='Введите количество эфира'/>
                <UiInput onChange={setDestinationAddress} value={destinationAddress} placeholder='Введите адрес'/>
                <UiButton type='submit'>Отправить</UiButton>
            </form>
            {error && <p>{error}</p>}
        </div>
    )
};

export default Send;