import React, { useEffect } from 'react'

const FaceBook = () => {

useEffect(()=>{

    FB.api('oauth/  EAAJAmA3XOIQBAENYCXCQgzFh8eXxZCZCBvkobxLFUFKrjsc0kvgZAkH49HCNCBwymb9T7bqkcxCy4qvuZAgZBhhvZC5imGvlSIVQ9ZBIXufnAXI0UcbQEIYesdWSE57GikrMoqcUkJHZB5aUjeljT82VBdSdZBHQyokl5psiBUKU9DDTpTIy9z4DtqVlwdOxZA7ryDn7al3odJXmx49vVM90EIMVbxMGTrxo0A4qo2hRyErufmq6APlsZC8', {
        client_id: '633971764836484',
        client_secret: 'app_secret',
        grant_type: 'client_credentials'
    }, function (res) {
        if(!res || res.error) {
            console.log(!res ? 'error occurred' : res.error);
            return;
        }
     
        var accessToken = res.'EAAJAmA3XOIQBAENYCXCQgzFh8eXxZCZCBvkobxLFUFKrjsc0kvgZAkH49HCNCBwymb9T7bqkcxCy4qvuZAgZBhhvZC5imGvlSIVQ9ZBIXufnAXI0UcbQEIYesdWSE57GikrMoqcUkJHZB5aUjeljT82VBdSdZBHQyokl5psiBUKU9DDTpTIy9z4DtqVlwdOxZA7ryDn7al3odJXmx49vVM90EIMVbxMGTrxo0A4qo2hRyErufmq6APlsZC';

    });
},[])
  return (
    <div>FaceBook</div>
  )
}

export default FaceBook