console.log("transfer.js loaded and running!");

document.getElementById("sendForm").addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevent page reload

    console.log("sendForm submitted!"); // Debugging log

    if (typeof window.ethereum !== 'undefined') {
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();

            // Get user inputs
            const receiverAddress = document.getElementById("receiver").value;
            const ethAmount = document.getElementById("amount").value;

            console.log("Receiver Address:", receiverAddress); // Debugging log
            console.log("Amount:", ethAmount); // Debugging log

            if (!receiverAddress || !ethAmount) {
                alert("Please enter both receiver address and amount.");
                return;
            }

            // Convert ETH to Wei
            const amountInWei = ethers.utils.parseEther(ethAmount);

            console.log("Amount in Wei:", amountInWei.toString()); // Debugging log

            // Send transaction
            const tx = await signer.sendTransaction({
                to: receiverAddress,
                value: amountInWei
            });

            console.log("Transaction sent:", tx);
            document.getElementById("transactionStatus").innerText = 
                `Transaction sent! Hash: ${tx.hash}`;

        } catch (error) {
            console.error("Transaction failed:", error);
            document.getElementById("transactionStatus").innerText = 
                `Error: ${error.message}`;
        }
    } else {
        alert("Please install MetaMask to use this feature.");
    }
});
