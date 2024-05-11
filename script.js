document.getElementById("btn").addEventListener("click", function(event) {
    event.preventDefault();
    if (document.getElementById("age").value == null || document.getElementById("age").value == "" || document.getElementById("name").value == null || document.getElementById("name").value == 0) {
        alert("Please enter valid details");
    }
    const promise = new Promise((resolve, reject) => {
        const age = document.getElementById("age").value;
        const name = document.getElementById("name").value;
        setTimeout(() => {
            if (age > 18) {
                resolve("Welcome, " + name + ". You can vote.")
            } else {
                reject("Oh sorry " + name + ". You aren't old enough.")
            }
        }, 4000)
    });

    promise.then((message) => {
        alert(message);
    }).catch((message) => {
        alert(message);
    });
});
