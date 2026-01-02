function fetchData(){
    return new Promise((resolve , rejected)=> {
        setTimeout(() => {
            let sucess=true;
            if(sucess){
                resolve("data fetch sucessfully")
            }else{
                rejected("error fetching data")
            }
        }, 3000);
    })
}

fetchData()
        .then((data)=>console.log(data))
        .catch((error)=>console.error(error))
