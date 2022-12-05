

export const validHook = {
  email:function(email:string){
    const regexp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

    if(regexp.test(email)){
      return true;
    }else{
      return false;
    }
    
  },
  password:function(password:string){
    if(password === 'oauth-login'){
      return true
    }
    const regexp = {
      string: password.match(/[a-zA-z]/g),
      number: password.match(/[0-9]/g),
      special: password.match(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi)
    }

    if(regexp.number && regexp.string && regexp.special && password.length >= 8){
      return true;
    }else{
      return false;
    }
    
  }
}