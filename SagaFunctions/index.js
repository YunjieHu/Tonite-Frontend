
import {AsyncStorage} from 'react-native';

export const fetchTheme = async () =>{
    let newObj;
    try{
        newObj = await AsyncStorage.getItem('light') || true;
    }
    catch (error){
        console.log(error.message);
    }
    return JSON.parse(newObj);
}

export const saveThemeToLocalStorage = async theme =>{
    try{
     await AsyncStorage.setItem('light', JSON.stringify(theme));
    }
    catch (error){
        console.log(error.message);
    }
}


export const toggleTheme = theme =>{
    let prevTheme = theme;
    return !prevTheme;
}

export const fetchSession = async () =>{
    //temporary code, should switch to more complex access token check during production
    let newObj;
    try{
        newObj = await AsyncStorage.getItem('session') || false;
    }
    catch (error){
        console.log(error.message);
    }
    return JSON.parse(newObj);
}


// use this function in conjunction with auth
export const saveSessionToLocalStorage = async session =>{
    try{
     await AsyncStorage.setItem('session', JSON.stringify(session));
    }
    catch (error){
        console.log(error.message);
    }
}

//do get request for login here
    /*const location = "http://localhost:3000/login";
    const response = await fetch(location)
    .then(response => response.json())
    .catch(e => {
    console.log(e);
    return e
}); */

export const getAuth = async(request) =>{
    const response = {
       status: 'success',
       user: 'test'
    };
    return response;
}


export const register = async(user) =>{
    console.log(user);
    const response = {
       status: 'fail'
    };
    return response;
}

//fetches a basic user info based on the user provided
export const getUser = async(request) => {
    //do get request for profile here
    //sample response for testing 
    let response;
    if (request.user !== ""){
        response = {
            profileID:'tester',
            firstname:'Beven',
            lastname:'Armanidos',
            title: "developer",
            major:'Computational Lawn moving',
            university:"Fordam University",
            location: "Borklyn, New Bork, United Bork",
            following: "50",
            follower: '50',
            skills: ['bork', 'bork++', 'gerbilscript', 'borklang', 'lolbork','reddit'],
            links: [
                    {
                    url:'https://www.google.com/search?source=hp&ei=GxIVXbCbFLCp_Qa10rrACg&q=smash&oq=smash&gs_l=psy-ab.3..0l10.142.566..767...0.0..0.293.1115.1j3j2......0....1..gws-wiz.....0..0i131.F8p49u5GXoA', 
                    title:'Site'
                    }, 
                    {
                    url:'https://www.facebook.com/',
                    title:"Facebook"
                    }
                    ]
        }
    }
    else{
        response = {
            profileID:'me',
            firstname:'Steven',
            lastname:'Armanidos',
            title: "developer",
            major:'Computational Lawn moving',
            university:"Fordam University",
            location: "Borklyn, New Bork, United Bork",
            following: "50",
            follower: '50',
            skills: ['bork', 'bork++', 'gerbilscript', 'borklang', 'lolbork','reddit'],
            links: [
                    {
                    url:'https://www.google.com/search?source=hp&ei=GxIVXbCbFLCp_Qa10rrACg&q=smash&oq=smash&gs_l=psy-ab.3..0l10.142.566..767...0.0..0.293.1115.1j3j2......0....1..gws-wiz.....0..0i131.F8p49u5GXoA', 
                    title:'Site'
                    }, 
                    {
                    url:'https://www.facebook.com/',
                    title:"Facebook"
                    }
                    ]
        }
    }
    
    return response;
}
