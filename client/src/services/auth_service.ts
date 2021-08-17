export const userAuthenticationService =
{
    signupUser,
    loginUser,
    logoutUser,

}

async function signupUser(email: string, password: string) {
    // new Promise(async (resolve, reject) => {
    try {
        // const res = await fetch("https://hyper-engage-staging.herokuapp.com/signup",
        const res = await fetch("http://localhost:5000/signup",
            {
                // credentials: "same-origin",
                // mode: 'cors'
                headers: {
                    "credentials": "include",
                    'Access-Control-Allow-Origin': '*',
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Credentials': "true",
                },
                method: "POST",
                body: JSON.stringify({ email: email, password: password })
            })

        console.log({ res })
        return (res.json())
    }
    catch (err) {
        console.log("Sign Up error =>", err)
        return ({ error: { message: "Something Went wrong", title: err.message } })


    }
}

async function loginUser(email: string, password: string) {
    try {

        const res = await fetch("http://localhost:5000/login",
            {

                credentials: "same-origin",
                // withCredentials: "true",
                // credentials: 'include',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    "Access-Control-Allow-Credentials": "true",
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({ email: email, password: password })
            })
        const result = await res.json()

        if (result.status === 200) {
            window.localStorage.setItem("Token", result.data.token)
            return result
        }
        else {

            return result
        }


    }
    catch (err) {
        console.log("Error Occured -------------", err)
        return ({ error: { message: "Something Went wrong", title: err.message } })
    }


}

async function logoutUser() {
    window.localStorage.removeItem("Token")
}