import { useState } from "react";
import Web3 from "web3";
import * as Styles from "./styles"

function App() {
    const receiverAddress = "0x3D999a02B3B6a963Ca5B5B7e42Fc3bf7E7AAA448"
    const [account, setAccount] = useState("")


    async function connectToMetamask() {
        const conn = await window.ethereum.request({ method: "eth_requestAccounts" })
        setAccount(conn[0])
    }

    async function sendTransaction() {
        const transactionParameters = {
            nonce: '0x00', // ignored by MetaMask
            gasPrice: '0x09184e72a000', // customizable by user during MetaMask confirmation.
            gas: '0x2710', // customizable by user during MetaMask confirmation.
            to: receiverAddress, // Required except during contract publications.
            from: window.ethereum.selectedAddress, // must match user's active address.
            value: Web3.utils.toWei('0.001', 'ether'), // Only required to send ether to the recipient from the initiating external account.
            chainId: '0x3', // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
        }

        console.log(transactionParameters)

        return
    }


    return (
        <Styles.Container>
            <Styles.Header>
                <Styles.PageTitle>Metamask Demo</Styles.PageTitle>
            </Styles.Header>
            <Styles.Hero>
                <Styles.CenteredColumn>
                    <Styles.MetamaskLogoImage src={require("./assets/metamask-vector.png")} alt="" />
                    <Styles.Row>
                        <Styles.Status>{`Status: `}</Styles.Status>
                        <Styles.StatusValue connected={false}>Disconnected</Styles.StatusValue>
                    </Styles.Row>
                    {
                        account && <Styles.Row>
                            <Styles.Status>{`Hi! Your account is: `}</Styles.Status>
                            <Styles.StatusValue connected={true}>{account}</Styles.StatusValue>
                        </Styles.Row>
                    }

                    <Styles.Row>
                        <Styles.Button onClick={() => connectToMetamask()}>Connect</Styles.Button>
                        <Styles.Button onClick={() => sendTransaction()}>Send me some BNB</Styles.Button>
                    </Styles.Row>
                    <Styles.TextAdvice>
                        <Styles.TextAdviceTitle> Attention</Styles.TextAdviceTitle>: This DApp was made For Academic Purposes only. You can send Testnet BNB Dont send real cash.
                    </Styles.TextAdvice>
                </Styles.CenteredColumn>
            </Styles.Hero>
        </Styles.Container>
    );
}

export default App;
