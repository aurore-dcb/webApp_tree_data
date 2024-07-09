// .getElementById('btn').addEventListener('click', function() {
//     alert('Button clicked');
//     console.log('Button clicked')
// });

function myFunction() {
    alert('Button clicked');
    console.log('Button clicked')
    
    fetch('http://localhost:8081/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Assurez-vous que cet en-tête est correct
        },
        body: JSON.stringify({
            name: 'User1',
            email: 'user1.test@example.com'
        }),
        credentials: 'include'
    })
    .then(response => response.json())
    .then(data => {
        console.log('Users:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });

    fetch('http://localhost:8081/api/users', {
        credentials: 'include',
    })
    .then(response => response.json())
    .then(data => {
        console.log('Users:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}