document.getElementById('dataForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const value = document.getElementById('value').value;

    const response = await fetch('/insertar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, value })
    });

    const result = await response.json();
    document.getElementById('response').innerText = JSON.stringify(result, null, 2);
});

document.getElementById('mongo').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const formdata = new FormData(document.getElementById('mongo'));

    const data = new FormData();

    for (const [key, value] of formdata.entries()) {
        data.append(key, value);
    }
    

    const response = await fetch('/insertarm', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(data))
    });

    const result = await response.json();
    document.getElementById('response').innerText = JSON.stringify(result, null, 2);
});