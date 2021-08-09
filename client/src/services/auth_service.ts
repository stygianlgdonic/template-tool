export const userAuthenticationService =
{
    signupUser,
    loginUser,

}

function signupUser(email: string, password: string) {
    new Promise((resolve, reject) => {
        try {
            const res = fetch("https://52cb497b0b4f.ngrok.io/signup",
                {
                    // credentials: "include",
                    // mode: 'cors',
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify({ email, password })
                })

            console.log({ res })
            resolve(res)
        }
        catch (err) {
            console.log("Sign Up error =>", err)
            reject(err)
        }
    }
    )
}

async function loginUser(email: string, password: string) {
    new Promise((resolve, reject) => {
        try {
            const res = fetch("http://localhost:5000/login",
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify({ email, password })
                })

            resolve(res)
        }
        catch (err) {
            reject(err)
        }
    }
    )

}