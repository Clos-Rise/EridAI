function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    const chatMessages = document.getElementById('chatMessages');

    const userMessage = document.createElement('div');
    userMessage.className = 'message user-message';
    userMessage.innerText = userInput;
    chatMessages.appendChild(userMessage);

    fetch('https://dc9f7f28-189d-4688-b19f-b540bd0d57f1.tunnel4.com', {
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
