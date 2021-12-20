console.log("index.js: loaded");

function fetchUserInfo(userId){
    fetch(`https://api.github.com/users/${encodeURIComponent(userId)}`)
        .then(response => {
            console.log(response.status); // => 200
            // 400,500番台のエラー
            if (!response.ok){
                console.error("エラーレスポンス",response)

            }else{
                return response.json().then(userInfo => {
                    // JSONパースされたオブジェクトが渡される
                    console.log(userInfo); // => {...}
                });
            }
            // ネットワークエラー
        }).catch(error => {
        console.error(error);
    });
}
