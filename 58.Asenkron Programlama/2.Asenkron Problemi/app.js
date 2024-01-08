
const users = [
    {
        userId: 1,
        post: "Enes Post1"
    },
    {
        userId: 1,
        post: "Enes Post2"
    },
    {
        userId: 1,
        post: "Enes Post3"
    },
    {
        userId: 3,
        post: "Ali Post4"
    },
    {
        userId: 4,
        post: "Ali Post4"
    },
]


function getUserID() {
    setTimeout(() => {
    return 4;
    }, 1000);
}
function getPostByUserId(userId) {
    
    console.log(userId);
    setTimeout(() => {

        users.forEach((user) => {
            
            if (user.userId===userId) {
                console.log(user.post);
            }
        });

    }, 500);
}

let userID= getUserID();
getPostByUserId(userID);
