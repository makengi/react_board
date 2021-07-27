
class PasswordValidator{

    validate(something){
            
    const reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if(reg.test(something)){
       return true;
    }
    return false;
    }
    
}

export default new PasswordValidator();