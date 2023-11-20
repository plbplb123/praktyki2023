let myPromise = new Promise(function(myResolve, myReject) {
    
      setTimeout(() => {
          myResolve();
      },5000);
    });
    myPromise.then( (value) => {console.log("Udalo sie!");})
