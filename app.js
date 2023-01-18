
import axios from "axios";


const getUser =(user_id) => {
    return new Promise (async (resolve, reject) => {
        const {data} = await axios( "https://jsonplaceholder.typicode.com/users/"+ user_id);
        resolve(data);
        // reject("problem var");
    })
}

const getPost =(user_id) => {
    return new Promise(async(resolve, reject)=> {
        const {data} = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + user_id);
        resolve (data);
        // reject("problem var");
    })
}


async function getData(user_id) {

try {

        const user = await getUser(user_id);
        const post = await getPost (user_id);
        
        const array = [user,post]
        return array ;
}

catch(e){

    console.log(e);

}


}
export default getData;