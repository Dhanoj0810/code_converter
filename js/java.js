
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
  }
  const secretLanguageMap = {
    'a': '@',
    'b': '#',
    'c': '&',
    'd': '$',
    'e': '%',
    'f': '!',
    'g': '^',
    'h': '*',
    'i': '(',
    'j': ')',
    'k': '-',
    'l': '+',
    'm': '=',
    'n': '[',
    'o': ']',
    'p': '{',
    'q': '}',
    'r': '/',
    's': '\\',
    't': '|',
    'u': '<',
    'v': '>',
    'w': ':',
    'x': ';',
    'y': ',',
    'z': '.'
  };

  // Function to encode a message
  function encodeMessage(message) {
    return message
      .toLowerCase() // Convert message to lowercase
      .split('') // Convert the message into an array of characters
      .map(char => secretLanguageMap[char] || char) // Replace characters with secret language characters
      .join(''); // Convert the array back to a string
  }

  // Function to handle the form submission
  function encode() {
    const messageInput = document.getElementById('message');
    const resultContainer = document.getElementById('result');
    const message = messageInput.value;
    const encodedMessage = encodeMessage(message);
    resultContainer.textContent = `Encoded Message: ${encodedMessage}`;
  }
  const secretlanguageMap = {
    '@': 'a',
    '#': 'b',
    '&': 'c',
    '$': 'd',
    '%': 'e',
    '!': 'f',
    '^': 'g',
    '*': 'h',
    '(': 'i',
    ')': 'j',
    '-': 'k',
    '+': 'l',
    '=': 'm',
    '[': 'n',
    ']': 'o',
    '{': 'p',
    '}': 'q',
    '/': 'r',
    '\\': 's',
    '|': 't',
    '<': 'u',
    '>': 'v',
    ':': 'w',
    ';': 'x',
    ',': 'y',
    '.': 'z'
  };

  // Function to decode a message
  function decodeMessage(encodedMessage) {
    return encodedMessage
      .split('') // Convert the encoded message into an array of characters
      .map(char => secretlanguageMap[char] || char) // Replace characters with their original values
      .join(''); // Convert the array back to a string
  }
  function decode() {
    const encodedMessageInput = document.getElementById('encodedMessage');
    const resultContainer = document.getElementById('result');
    const encodedMessage = encodedMessageInput.value;
    const decodedMessage = decodeMessage(encodedMessage);
    resultContainer.textContent = `Decoded Message: ${decodedMessage}`;
  }
  