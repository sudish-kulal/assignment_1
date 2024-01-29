function displayMessage(message) {
  //   //in simple form
  //   return Promise.resolve(message)

  return new Promise((resolve, reject) => {
    try {
    // //if delay needed
    // setTimeout(()=>resolve(message),2000)

      resolve(message);
    } catch (error) {
      reject(error);
    }
  });
}

displayMessage("hello world").then(console.log).catch(console.log);
