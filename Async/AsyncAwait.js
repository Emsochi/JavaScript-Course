function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // Expected output: "resolved"
  }
  
  asyncCall().finally(() => {
    console.log("finally")
  })
  console.log("Hello world!");

  async function resolveAfter3Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 3000);
    });
  }

  async function doTasksWithoutWaiting() {
    return await Promise.all([resolveAfter2Seconds, resolveAfter3Seconds])
  }


console.log(doTasksWithoutWaiting());


async function basicAsync() {
    return await Promise.resolve(123); // Da nam 123 jako dane
}

async function asyncWaitAll() {
    return await Promise.all([basicAsync]) // Zwróci nam tablice kadego wyniku, np "123"
}

asyncCall() // wywołujemy funkcje




