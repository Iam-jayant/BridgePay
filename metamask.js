// Check if MetaMask is installed
async function connectMetaMask() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();

            // Request wallet connection
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            const account = accounts[0]; // Get the first connected account

            console.log('Connected account:', account);
            document.getElementById("walletAddress").innerText = "Wallet Connected: " + account;
        } catch (error) {
            console.error('User denied account access:', error);
        }
    } else {
        alert('Please install MetaMask to use this feature.');
    }
}
