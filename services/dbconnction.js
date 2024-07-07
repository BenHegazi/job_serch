import {connect} from 'mongoose'


export const dbconnection = ()=> connect('mongodb://localhost:27017/jobs').then( ()=> {

    console.log("database connected successfully."); 
})