// Use a Promise to write out something

new Promise((resolve) => setTimeout(() => resolve("Hello world"), 1000)).then(hello => console.log(hello)); // "Hello World"

// OK