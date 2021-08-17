export const validation: () => boolean = () => {

    console.log("gggggg", localStorage.getItem("Token"))
    if (!!localStorage.getItem("Token")) {
        return true;
    }

    return false;

    // try {
    //     const res = await fetch("https://hyper-engage-staging.herokuapp.com/signup",
    //         {
    //             // credentials: "same-origin",
    //             // mode: 'cors'
    //             headers: {
    //                 "credentials": "include",
    //                 'Access-Control-Allow-Origin': '*',
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/json',
    //                 'Access-Control-Allow-Credentials': "true",
    //             },
    //             method: "POST",
    //             body: JSON.stringify({ secret_token: localStorage.getItem("Token") })
    //         })

    //     console.log({ res })
    //     return (res.json())
    // }
    // catch (err) {
    //     console.log("Sign Up error =>", err)
    //     return (err)


    // }


}