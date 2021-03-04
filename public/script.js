async function fetchPGData() {
    const request = await fetch('/api');
    const data = await request.json();
};

fetchPGData();

