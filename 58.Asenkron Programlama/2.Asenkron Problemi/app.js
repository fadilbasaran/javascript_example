
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


function getUserID(callback) {
    setTimeout(() => {
        let userId =1
        callback(userId);
    }, 1000);
}
function getPostByUserId(userId) {
    
    
    setTimeout(() => {

        users.forEach((user) => {
            
            if (user.userId===userId) {
                console.log(user.post);
            }
        });

    }, 500);
}

// getUserID((userID)=>{
//     getPostByUserId(userID); //?1. yol
// });

getUserID(getPostByUserId);//?2. yol
// getPostByUserId(userID);
