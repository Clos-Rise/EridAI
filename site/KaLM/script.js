function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    const chatMessages = document.getElementById('chatMessages');

    const userMessage = document.createElement('div');
    userMessage.className = 'message user-message';
    userMessage.innerText = userInput;
    chatMessages.appendChild(userMessage);

    fetch('сюда апи вроде', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: userInput })
    })
    .then(response => response.json())
    .then(data => {
        const botMessage = document.createElement('div');
        botMessage.className = 'message bot-message';
        botMessage.innerText = data.message; 
        chatMessages.appendChild(botMessage);
    })
    .catch(error => console.error('Ошибка:', error));

    document.getElementById('userInput').value = '';
}
