

export const validateForm = (emailOnNum, pass, name)=>{
    const emailORNumber = /^(?:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}|\+?[1-9]\d{1,14})$/
    const password = /^.{6,}$/

    if(!emailORNumber.test(emailOnNum)) return {type: "emailNum", message:"Email or Number Invalid"}

    if(name==="") return {type: "name", message:"Name Invalid"}

    if(!password.test(pass)) return {type: "pass", message:"Invalid Password"}
    return null
}


// P@ssw0rd123!