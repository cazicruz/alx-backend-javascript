export default function getFullResponseFromAPI(success){
  const promise1 = new promise(function(resolve, reject){
    if (success){
      resolve({status : 200, body :'success'});
    }
    else{
      reject(('The fake API is not working currently'));
    }
  });
}
