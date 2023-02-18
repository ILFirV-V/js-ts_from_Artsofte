export const promisify = (acceptedCallback) =>  function (...args) {
        return new Promise((resolve, reject) => {
            acceptedCallback(...args, (error, result) => {
                if (error) {
                    reject(error);
                }
                else{
                    resolve(result);
                }
            });
        });
}