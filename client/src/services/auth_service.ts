export const userAuthenticationService =
{
    signupUser,
    loginUser,

}

async function signupUser(email: string, password: string) {
    // new Promise(async (resolve, reject) => {
    try {
        const res = await fetch("https://hyper-engage-staging.herokuapp.com/signup",
            {
                credentials: "same-origin",
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                method: "POST",
                body: JSON.stringify({ email: email, password: password })
            })

        console.log({ res })
        return (res.json())
    }
    catch (err) {
        console.log("Sign Up error =>", err)


    }
}

async function loginUser(email: string, password: string) {
    try {
        const res = await fetch("https://hyper-engage-staging.herokuapp.com/login",
            {
                credentials: "same-origin",
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    "Access-Control-Allow-Credentials": "true",
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({ email: email, password: password })
            })

        // console.log("--->", res.json())

        return res.json()
    }
    catch (err) {
        console.log("Error Occured", err)
        return (err)
    }


}