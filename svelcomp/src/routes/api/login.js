export const post = (request) => {
    const user = JSON.parse(request.body)
 


    if(!user.username === "lucas" && !user.password === "dev123"){
        console.log('not auth user')
        return{};
    }
    return {
       body:{
        user
       }
    }
}