const helloPromise = new Promise((resolve) => {
    resolve("Hello, World!");
})

helloPromise.then((message) => {
    console.log(message);
})

const delayedPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Resolved after 2 seconds");
    }, 2000);
})

delayedPromise.then((message) => {
    console.log(message);
})

const firstPromise = new Promise((resolve) => {
    resolve("First");
})

firstPromise.then((message) => {
        return message + " -> Second";
    }).then((newMessage) => {
        console.log(newMessage);
    })

const multiThenPromise = new Promise((resolve) => {
    resolve("1");
})
    
multiThenPromise.then((message) => {
    console.log(message);
    return "2";
}).then((message) => {
    console.log(message);
    return "3";
}).then((message) => {
    console.log(message);
})
    


const rejectPromise = new Promise((_, reject) => {
    setTimeout(() => {
        reject("you are black");
    }, 1000);
})

rejectPromise.catch((error) => {
    console.log(error);
})


function printMessages() {
    setTimeout(() => {
        console.log("One");
        setTimeout(() => {
            console.log("Two");
            setTimeout(() => {
                console.log("Three");
            }, 1000)
        }, 1000)
    }, 1000)
}

printMessages();
const promiseChain = new Promise((resolve) => {
    setTimeout(() => {
        resolve("One");
    }, 1000)
})

promiseChain
    .then((message) => {
        console.log(message);
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("Two");
            }, 1000)
        })
    })
    .then((message) => {
        console.log(message);
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("Three");
            }, 1000)
        })
    })
    .then((message) => {
        console.log(message);
    })


const conditionalPromise = new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;
    setTimeout(() => {
        if (success) {
            resolve("Promise resolved successfully");
        } else {
            reject("Promise rejected with an error");
        }
        }, 1000)
})
    
conditionalPromise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
})
    

const messagePromise = new Promise((resolve) => {
    resolve("This is the resolved message");
})

messagePromise.then((message) => {
    console.log(message);
})

const sequentialPromise = new Promise((resolve) => {
    resolve(2);
})

sequentialPromise
    .then((number) => {
        return number * 2;
    })
    .then((result) => {
        console.log("Intermediate Result:", result); // Should log 4
        return result + 3;
    })
    .then((finalResult) => {
        console.log("Final Result:", finalResult); // Should log 7
    })
