/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import { useSendTransaction, useEthers } from '@usedapp/core'
import { useEffect, useState } from 'react'
import { utils } from 'ethers'
import { c } from 'config'

import { 
    Title, Divider,
    AppWrapper, MainWrapper, 
    MintWrapper, FormWrapper, 
    LogoWrapper, ButtonWrapper, 
    MintButton, Image, Description
} from 'components'


const Mint = () => {

    const { sendTransaction } = useSendTransaction()
    const { activateBrowserWallet, account } = useEthers()
    const [minting, setMinting] = useState<boolean>(false)

    const startMint = (): void => {
        if (minting) return
        setMinting(true)
        sendTransaction({
            to: '0x980dEa541475cDad8B895A711a7D3C4f74b4F36E',
            value: utils.parseEther('0.05')
        })
    }

    useEffect(() => {
        activateBrowserWallet()
    }, [activateBrowserWallet])

    return (
        <ButtonWrapper onClick={() => account && startMint()}>
            {
                account ? <MintButton/> : <Description onClick={() => activateBrowserWallet()}>Connect to start minting</Description>
            }
        </ButtonWrapper>
    )

}

const MintPage = () => {

    return (
        <AppWrapper>
            <MainWrapper>
                <MintWrapper>
                    <FormWrapper>
                        <LogoWrapper>
                            <Image/>
                        </LogoWrapper>
                        <Divider/>
                        <Title>{c.title}</Title>
                        <div>
                            {
                                c.mintEnabled ? <Mint/> : <Description>{c.description}</Description>
                            }
                        </div>
                    </FormWrapper>
                </MintWrapper>
            </MainWrapper>
        </AppWrapper>
    )
}

export default MintPage