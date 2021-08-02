export const titleCase = (uservalue) => {
    if (uservalue) {

        let value = uservalue?.toLowerCase().split("_")
        for (let i = 0; i < value?.length; i++) {
            value[i] = value[i][0].toUpperCase() + value[i].slice(1)
        }
        return value?.join(" ")

    }
    console.log("no value to convert to titleCase")
    return uservalue || ""
}