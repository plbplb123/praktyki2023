const MultipleAsync = (x,y) =>
{
    return new Promise((resolve,reject) =>{
    if(typeof x != 'number'|| typeof y != 'number' ) 
    {
        reject(new Error('Znalazlem liczbe >:('));
    }
    else
    {
        var result = x*y;
        resolve(result);
    }   
});
}
MultipleAsync(1, 2)
  .then((result) => 
  {
    console.log(result);
  })
  .catch((error) => 
  {
    console.error(error);
  });

MultipleAsync('a', 2)
  .then((result) => 
  {
    console.log(result);
  })
  .catch((error) => 
  {
    console.log(error);
  });