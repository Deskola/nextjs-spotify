import fetcher from "./fetcher";

//signup endpoint
export const signup = (body: { name: string, email: string, password: string }) => {
    
    return fetcher('/signup', body);
}

//signin endpoint
export const signin = (body: {email: string, password: string }) => {

    return fetcher('/signin', body);
}