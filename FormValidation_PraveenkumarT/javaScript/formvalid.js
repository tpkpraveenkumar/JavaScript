
function Validate() {
    //function call

    username();
    fathervalid();
    mailvalidate();
    DOB();
    mobilnovalid();
    address1();
    CityCheck();
    ZipCode();
    Upload();
}
//username
function username() {
    var nameid = document.getElementById("name");

    var regex = /^[A-Za-z]+$/;
    if (nameid.value.trim() != "") {
        if (regex.test(nameid.value)) {
            nameid.style.border = "1px solid black";
            document.getElementById("namevalid1").style.visibility = "hidden";

        }
        else {
            nameid.style.border = "2px solid red";
            document.getElementById("valid1").style.visibility = "visible";
        }

    }

    else {
        nameid.style.border = "2px solid red";
        document.getElementById("namevalid1").style.visibility = "visible";

    }


}

//father name check
function fathervalid() {
    var fathername = document.getElementById("fathername");

    var regex = /^[A-Za-z]+$/;
    if (fathername.value.trim() != "") {
        if (regex.test(fathername.value)) {
            fathername.style.border = "1px solid black";
            document.getElementById("namevalid2").style.visibility = "hidden";
        }
        else {
            fathername.style.border = "2px solid red";
            document.getElementById("valid2").style.visibility = "visible";

        }
    }
    else {
        fathername.style.border = "2px solid red";
        document.getElementById("namevalid2").style.visibility = "visible";

    }

}
//Mail validate
function mailvalidate() {
    var mail=document.getElementById("emailid");
    var rxmail = /^([a-z0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
    if (mail.value.trim() != "")
    {
        if (rxmail.test(mail.value)) 
        {
        mail.style.border = "1px solid black";
        document.getElementById("namevalid3").style.visibility = "hidden";
         }
        else {
            mail.style.border = "2px solid red";
            document.getElementById("valid3").style.visibility = "visible";  
        }
    }
    else {
        mail.style.border = "2px solid red";
        document.getElementById("namevalid3").style.visibility = "visible";

    }
}

function DOB()
{
    var dateofbirth=document.getElementById("dateofBirth");
    var rxdate =  /^([0-9]{2})\/([[0-9]{2})\/([0-9]{4})$/;

    if (dateofbirth.value.trim() != "")
    {
        if (rxdate.test(dateofbirth.value)) 
        {
        dateofbirth.style.border = "1px solid black";
        document.getElementById("namevalid4").style.visibility = "hidden";
         }
        else {
            dateofbirth.style.border = "2px solid red";
            document.getElementById("valid4").style.visibility = "visible";  
        }
    }
    else {
        dateofbirth.style.border = "2px solid red";
        document.getElementById("namevalid4").style.visibility = "visible";

    }

}
//mobile no
function mobilnovalid() {
    var mobileno=document.getElementById("mobilNo");

    var rxmob = /^[7-9]\d{9}$/;
    
    if (mobileno.value.trim() != "") {
        if (rxmob.test(mobileno.value)) {
            dateofbirth.style.border = "1px solid black";
            document.getElementById("namevalid5").style.visibility = "hidden";
        }
        else {
            mobileno.style.border = "2px solid red";
            document.getElementById("valid5").style.visibility = "visible";
        
        }
    }
    else {
        mobileno.style.border = "2px solid red";
        document.getElementById("namevalid5").style.visibility = "visible";
        
    }

}
//Address 1
function address1() {
    var addr1=document.getElementById("addressline1");

    var regex = /^[A-Za-z]+$/;
    
    if (addr1.value.trim() != "") {
        if (regex.test(addr1.value)) {
            addr1.style.border = "1px solid black";
            document.getElementById("namevalid6").style.visibility = "hidden";
        }
        else {
            addr1.style.border = "2px solid red";
            document.getElementById("valid6").style.visibility = "visible";
        
        }
    }
    else {
        addr1.style.border = "2px solid red";
        document.getElementById("namevalid6").style.visibility = "visible";
        
    }

}

//
// 
//City
function CityCheck() {
    var city=document.getElementById("city");
    var regex = /^[A-Za-z]+$/;
    
    if (city.value.trim() != "") {
        if (regex.test(city.value)) {
            city.style.border = "1px solid black";
            document.getElementById("namevalid7").style.visibility = "hidden";
        }
        else {
            city.style.border = "2px solid red";
            document.getElementById("valid7").style.visibility = "visible";
        
        }
    }
    else {
        city.style.border = "2px solid red";
        document.getElementById("namevalid7").style.visibility = "visible";
        
    }

}

//zipcode
function ZipCode() {
    var zip=document.getElementById("zipcode");

    var regex = /^[0-9]{6}$/;
    
    if (zip.value.trim() != "") {
        if (regex.test(zip.value)) {
            zip.style.border = "1px solid black";
            document.getElementById("namevalid8").style.visibility = "hidden";
        }
        else {
            zip.style.border = "2px solid red";
            document.getElementById("valid8").style.visibility = "visible";
        
        }
    }
    else {
        zip.style.border = "2px solid red";
        document.getElementById("namevalid8").style.visibility = "visible";
        
    }

}

//upload photo
function Upload() {
    var photo=document.getElementById("Uphoto");  
    if (photo.value != "") {   
        document.getElementById("namevalid9").style.visibility = "hidden";  
    }
    else {
        photo.style.border = "2px solid red";
        document.getElementById("namevalid9").style.visibility = "visible";
        
    }

}

//Checkbox
function fill() {
    //get first address
    var caddr = document.getElementById("addressline1").value;
    var caddr2 = document.getElementById("addressline2").value;
    var ccity = document.getElementById("city").value;
    var cstate = document.getElementById("state").value;
    var cpin = document.getElementById("zipcode").value;

    // get permenent addres box
    var paddr = document.getElementById("address1");
    var padd2 = document.getElementById("address2");
    var pcity = document.getElementById("city1");
    var pstate = document.getElementById("state1");
    var ppin = document.getElementById("zipcode1");

    // GEt checkbox status:
    var mode = document.getElementById("chbox");
    if (mode.checked) {
        paddr.value = caddr;
        padd2.value = caddr2;
        pcity.value = ccity;
        pstate.value = cstate;
        ppin.value = cpin;
    }
    else {
        paddr.value = "";
        padd2.value = "";
        pcity.value = "";
        pstate.value = "";
        ppin.value = "";
    }
}
