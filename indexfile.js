function started(){
    const BtnId = document.getElementById('btnmain');
    const Showtext = document.getElementById('show');
    
    
    BtnId.addEventListener('click' , () => {
        const data = fetch("https://sum-server.100xdevs.com/sum?a=1&b=2").then(res => {
            console.log('ans -',res.text());
        })
    })
}


started();