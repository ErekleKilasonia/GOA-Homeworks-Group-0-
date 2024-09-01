const send = fetch("https://fakestoreapi.com/products");
send.then(resp => resp.json()).then(data =>{
    console.log(data);
})

