
const getBody = (req) => {
    return new Promise ((resolve,reject) => {
      const data = [];
      req.on("data", (chunk) => {
        data.push(chunk);
      });

      req.on('end', () => {
         const body = Buffer.concat(data).toString();

         if (body){
          try {
            resolve(JSON.parse(body));
          } catch (error) {
            reject(error);
            return;
          }
         }  
         
         else {
          resolve({});
         }

      })

      req.on('error', (err) => {
        reject(err)
      })
    })
}

module.exports = getBody;