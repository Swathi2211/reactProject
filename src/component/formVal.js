import { Component } from "react";
import '../component/form.css'
class FormVal extends Component{

    constructor(){
        super();
        this.state = {
            data : {},
            isValidPw: 1,
            isValidGen: 1,
            isValidUs: 1,
            isValidEm: 1,
            buttonClicked: false
        };
    }

    //Validation Check
    validEmail(email){
        return email.includes('@gmail.com');
    }

    validGen(gender){
        return gender!=="";
    }

    validUser(name){
        return name!=="";
    }

    validPw(pw) {
        const uAlp = /[A-Z]/;
        const Num = /[0-9]/;
        const sChar = /[!@#$%^&*()]/;

        if(pw==="" && !uAlp.test(pw) && !Num.test(pw) && !sChar.test(pw) && !(pw.length >=8 && pw.length <=12)){
            return "Invalid Password, Must include 1 Uppercase 1 Numerals 1 Special Character 8-12 Character"
        }else {
            return "Valid";
        }
    }

    //status Check
    unameStatus(name){
        const isValid = this.validUser(name);
        this.setState({
            isValidUs : isValid
        })
    }

    emailStatus(email){
        const isValid = this.validEmail(email);
        this.setState({
            isValidEm : isValid
        })
    }

    genStatus(gender){
        const isValid = this.validGen(gender);
        this.setState({
            isValidGen : isValid
        })
    }

    passStatus(password){
        const isValid = this.validPw(password);
        this.setState({
            isValidPw : isValid
        })
    }
    

    print(){


        let fname = document.getElementById("nm").value;
        fname = fname.trim();
        let emailid = document.getElementById("em").value;
        let pass1 = document.getElementById("pw").value;
        let female = document.getElementById("female").checked;
        let male = document.getElementById("male").checked;
        let gen = female? "Female" : male? "Male" : "";

        //Set Status
        this.unameStatus(fname);
        this.emailStatus(emailid);
        this.passStatus(pass1);
        this.genStatus(gen);
        this.setState({
            buttonClicked: true
        },()=>{
            if(this.state.isValidUs && this.state.isValidEm && this.state.isValidGen && this.state.isValidPw){

                let pass2="";
                for(let i=0; i<pass1.length; i++){
                    pass2+="*";
                }
                this.setState({
                    data : {
                        name : fname,
                        email : emailid,
                        password : pass2,
                        gender : gen
                    }
                });

                document.getElementById("nm").value = "";
                document.getElementById("em").value = "";
                document.getElementById("pw").value = "";
                document.getElementById("male").checked = false;
                document.getElementById("female").checked = false;

            }
            
        });


       
        
        

    }




    render(){
        return (
            <>

                <h1>Form Validation</h1>

                <label>Username  : </label>
                <input type="text" id="nm" />
                {this.state.buttonClicked && !this.state.isValidUs && <span style={{ color: "red" }}>Invalid Username</span>}
                <br />

                <label>Email  : </label>
                <input type="email" id="em"/>
                {this.state.buttonClicked && !this.state.isValidEm && <span style={{ color: "red" }}>Invalid Email</span>}
                <br />


                <label>Password  : </label>
                <input type="password" id="pw"/>
                {this.state.buttonClicked && this.state.isValidPw !== "Valid" && <span style={{ color: "red" }}>{this.state.isValidPw}</span>}
                <br />
                <br />


                <label>Gender  : </label>
                <input type="radio" value="Male" id="male" name="gender_check"/><label>Male</label>
                <input type="radio" value="Female" id="female" name="gender_check"/> <label>Female</label>
                {this.state.buttonClicked && !this.state.isValidGen && <span style={{ color: "red" }}>Invalid Gender</span>}
                <br />

                

                


                <button onClick={()=>
                    this.print()
                }>Register</button>

                {this.state.buttonClicked && (this.state.isValidUs && this.state.isValidEm && this.state.isValidGen && this.state.isValidPw==="Valid") && (
                    <p>
                        <span style={{fontWeight : "bolder"}}>Details Registered</span><br/><br/>
                        Name: {this.state.data.name}
                        <br />
                        Email: {this.state.data.email}
                        <br />
                        Password: {this.state.data.password}
                        <br />
                        Gender: {this.state.data.gender}
                    </p>

                )}
    
            </>
        )
    }

    

}

export default FormVal