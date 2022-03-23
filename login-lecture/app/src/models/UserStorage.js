"use strict";

class UserStorage{
    static #users ={
        id : ['jw'],
        password : ["1234"],
        name: ['정원'],
    };


    static getusers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field)=>{
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        },{});
        return newUsers;
    }
}

module.exports = UserStorage;