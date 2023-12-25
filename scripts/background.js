chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "translateText") {
    const text = request.text;
    const src = request.src;
    const dest = request.dest;
    const apiUrl = "http://127.0.0.1:8000/api/translate-text";  // Substitua pela URL real da sua API

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: text,
        src: src,
        dest: dest
      }),
    })
    .then((response) => response.json())
    .then((data) => {
      const translatedText = data.translatedText;
      sendResponse({ translatedText });
    })
    .catch((error) => {
      console.error("Error translating text:", error);
      sendResponse({ error: `Error translating text: ${error}` });
    });

    return true;
  }
});