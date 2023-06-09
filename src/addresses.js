export const BSC = 56
export const ARBITRUM = 41
export const AVALANCHE = 43114

export const addresses = {
    [BSC]: {
        Vault: "0xc73A8DcAc88498FD4b4B1b2AaA37b0a2614Ff67B",
        Router: "0xD46B23D042E976F8666F554E928e0Dc7478a8E1f",
        USDG: "0x85E76cbf4893c1fbcB34dCF1239A91CE2A4CF5a7",
        Stabilize: "0x82C4841728fBd5e08A77A95cA3192BcE1F645Ee9",
        WardenSwapRouter: "0x7A1Decf6c24232060F4D76A33a317157549C2093",
        OneInchRouter: "0x11111112542D85B3EF69AE05771c2dCCff4fAa26",
        DodoexRouter: "0x8F8Dd7DB1bDA5eD3da8C9daf3bfa471c12d58486",
        MetamaskRouter: "0x1a1ec25DC08e98e5E93F1104B5e5cdD298707d31"
    },

    [ARBITRUM]: {
        GMX: '0x47A7adA688B63486af82626Ed08648c57Ae0deD9',
        BTC: '0xA9F175d3eEB1483d8Ad31D38b5673C951720C49a',
        ETH: '0x2433D3c00128d1B5C2D241bFAA61aFD6b22810D6',
        TLOS: '0xaE85Bf723A9e74d6c663dd226996AC1b8d075AA9',
        UNI: '0xaE85Bf723A9e74d6c663dd226996AC1b8d075AA9',
        DAI: '0x7456Dd35C2FD863C7Aa917E6A46dBF9192ca6B70',
        RewardReader: '0xcd15D5333e4bdD4C38E9AF3D745440B23420d51B',
        GLP: '0x9cD3aDfF9620707a47eAe6881fd886998cf61172',
        GlpManager: '0x00CD1C6a053cd8EE9377159EB6F8083B3e5fef3A'
    },

    [AVALANCHE]: {
        GMX: '0xfc5a1a6eb076a2c7ad06ed22c90d7e710e35ad0a',
        AVAX: '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7',
        ETH: '0x49d5c2bdffac6ce2bfdb6640f4f80f226bc10bab',
        BTC: '0x50b7545627a5162f82a992c33b87adc75187b218',
        RewardReader: '0x04Fc11Bd28763872d143637a7c768bD96E44c1b6',
        GLP: '0x01234181085565ed162a948b6a5e88758CD7c7b8',
        GlpManager: '0xe1ae4d4b06A5Fe1fc288f6B4CD72f9F8323B107F'
    }
}

export function getAddress(chainId, key) {
    if (!(chainId) in addresses) {
        throw new Error(`Unknown chain ${chainId}`)
    }
    if (!(key in addresses[chainId])) {
        throw new Error(`Unknown address key ${key}`)
    }
    return addresses[chainId][key]
}
