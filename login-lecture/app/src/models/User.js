"use strict";

const UserStorage = require("./UserStorage")


class User{
    constructor(body){
        this.body = body;
    }

    login(){
        const {id, password} = UserStorage.getUserInfo(this.body.id);
        if(id){
            if(id === this.body.id && password === this.body.password){
                return {success: true};
            }
            return {success:false, msg: "비밀번호오류"};
        }
        return {success:false, msg : "존재하지않는 아이디"};
    }

}

module.exports = User;