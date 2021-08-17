export const validation: () => boolean = () => {

    if (!!localStorage.getItem("Token")) {
        return true;
    }

    return false;



}