document.addEventListener('DOMContentLoaded', () => {
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
    const modelSelect = document.getElementById('model-select');

    sendButton.addEventListener('click', async () => {
        const message = userInput.value;
        if (message.trim() !== '') {
            sendButton.classList.add('sending');
            setTimeout(() => {
                sendButton.classList.remove('sending');
            }, 300);

            addMessage('user', message);
            userInput.value = '';

            const response = await getModelResponse(message);
            addMessage('bot', response);
        }
    });

    async function getModelResponse(message) {
        const selectedModel = modelSelect.value;
        const response = await fetch(`http://localhost:3000/api/model/${selectedModel}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message })
        });
        const data = await response.json();
        return data.response;
    }

    function addMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender);

        const senderElement = document.createElement('span');
        senderElement.classList.add('message-sender');
        senderElement.textContent = sender === 'user' ? 'You' : 'Bot';

        const textElement = document.createElement('span');
        textElement.classList.add('message-text');
        textElement.textContent = message;

        messageElement.appendChild(senderElement);
        messageElement.appendChild(textElement);

        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});
