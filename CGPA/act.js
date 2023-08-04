var con=0;
var semcount=1;
var tot;
var totcredits=0;
var totgpa=0;
var disp="";
function addsems(x){
    var t=x;
    if (isNaN(x) && x.length > 0) { 
        alert("Number of courses must be a number");
    }
    else if(x>8 || x=="0"){
        alert("Semester must be 1--to--8")
    }
    else if(x>con){
        var temp=x;
        x-=con;
        var ad=con;
        ad++;
        for(var i=ad;i<=temp;i++){
            var d1=document.createElement("div");
            d1.setAttribute("id","sem"+i);
            document.getElementById("main").appendChild(d1);
        }
        con=document.getElementById("sems").value;``
        tot=x;
    }   
}
function sub(){
    document.getElementById("mainsub").disabled=true;
    if(semcount>=2){
        var dis=parseInt(semcount-1);
        document.getElementById("onsubmit"+dis).disabled = true;
    }
    var val=document.getElementById("sem"+semcount);
    if(val==null){
        alert("Number of Semester Cannot be empty");
    }
    else{
        var t1=document.getElementById("sem"+semcount);
        var l1=document.createElement("label");
        l1.innerHTML="Enter Number of Subjects for Semester - "+semcount+":";
        t1.append(l1);
        var ip1=document.createElement("input");
        ip1.setAttribute("type","text");
        ip1.setAttribute("id","semsub"+semcount);
        t1.append(ip1);
        var bre=document.createElement("br");
        document.getElementById("sem"+semcount).appendChild(bre);
        var bt1=document.createElement("button");
        bt1.setAttribute("id","sub"+semcount);
        bt1.setAttribute("type","button");
        bt1.setAttribute("onclick","table()");
        bt1.innerHTML="Submit";
        t1.append(bt1);
    }
}
function row(a){
    var r=document.createElement("TR");
    r.setAttribute("id","sem"+semcount+"row"+a);
    document.getElementById("tab"+semcount).appendChild(r);

    var td1=document.createElement("TD");
    var d1=document.createElement("input");
    d1.setAttribute("class","course");
    d1.setAttribute("type","text");
    d1.setAttribute("placeholder","Enter the Course code");
    d1.setAttribute("id","sem"+semcount+"row"+a+"d1");
    td1.appendChild(d1);
    document.getElementById("sem"+semcount+"row"+a).appendChild(td1);

    var td2=document.createElement("TD");
    var d2=document.createElement("input");
    d2.setAttribute("list","grade");
    d2.setAttribute("placeholder","Enter Course Grade")
    d2.setAttribute("id","sem"+semcount+"row"+a+"d2");
    td2.appendChild(d2);
    var dt=document.createElement("datalist");
    dt.setAttribute("id","grade");
    td2.appendChild(dt);
    var o1 = document.createElement("OPTION");
    o1.setAttribute("value", "O");
    dt.appendChild(o1);
    var o2 = document.createElement("OPTION");
    o2.setAttribute("value", "A+");
    dt.appendChild(o2);
    var o3 = document.createElement("OPTION");
    o3.setAttribute("value", "A");
    dt.appendChild(o3);
    var o4 = document.createElement("OPTION");
    o4.setAttribute("value", "B+");
    dt.appendChild(o4);
    var o5 = document.createElement("OPTION");
    o5.setAttribute("value", "B");
    dt.appendChild(o5);
    document.getElementById("sem"+semcount+"row"+a).appendChild(td2);

    var td3=document.createElement("TD");
    var d3=document.createElement("input");
    d3.setAttribute("list","credit");
    d3.setAttribute("placeholder","Enter Course Credit")
    d3.setAttribute("id","sem"+semcount+"row"+a+"d3")
    td3.appendChild(d3);
    var dt1=document.createElement("datalist");
    dt1.setAttribute("id","credit");
    td3.appendChild(dt1);
    var c1=document.createElement("option");
    c1.setAttribute("value","0");
    dt1.appendChild(c1);
    var c2=document.createElement("option");
    c2.setAttribute("value","1");
    dt1.appendChild(c2);
    var c3=document.createElement("option");
    c3.setAttribute("value","1.5");
    dt1.appendChild(c3);
    var c4=document.createElement("option");
    c4.setAttribute("value","2");
    dt1.appendChild(c4);
    var c5=document.createElement("option");
    c5.setAttribute("value","3");
    dt1.appendChild(c5);
    var c6=document.createElement("option");
    c6.setAttribute("value","4");
    dt1.appendChild(c6);
    var c7=document.createElement("option");
    c7.setAttribute("value","5");
    dt1.appendChild(c7);
    var c8=document.createElement("option");
    c8.setAttribute("value","12");
    dt1.appendChild(c8);
    document.getElementById("sem"+semcount+"row"+a).appendChild(td3)

}
function table(){
    var semc=document.getElementById("semsub"+semcount).value;
        if (isNaN(semc) && semc.length > 0) { 
            alert("Number of Subjects must be a number");
        }
        else if(semc=="0" || semc==""){
            alert("Number of courses cannot be Zero");
        }
        else{
            let text="Press Ok to Proceed (Or) Cancel to Re-enter Number of Subjects";
            if(confirm(text)==true){
                var tab=document.createElement("table");
                tab.setAttribute("id","tab"+semcount);
                var sw1=document.getElementById("sem"+semcount);
                sw1.appendChild(tab);
                for(var i=1;i<=semc;i++){
                    row(i);
                }
                document.getElementById("sub"+semcount).disabled=true;
                if(semcount==tot){
                    var bt2=document.createElement("button");
                    bt2.setAttribute("id","oncalculate");
                    bt2.setAttribute("class","oncalculate");
                    bt2.setAttribute("type","submit");
                    bt2.setAttribute("onclick","cal()");
                    bt2.innerHTML="Calculate";
                    sw1.appendChild(bt2);
                }
                else{
                    var bt2=document.createElement("button");
                    bt2.setAttribute("id","onsubmit"+semcount);
                    bt2.setAttribute("class","onsubmit");
                    bt2.setAttribute("type","submit");
                    bt2.setAttribute("onclick","cal()");
                    bt2.innerHTML="Submit";
                    sw1.appendChild(bt2);
                }
            }
        }
}
function cal(){
    let text="All the Entered entries are correct..?";
    let text1="Entries Mismatched or Empty";
    if(confirm(text)==true){
        var x=document.getElementById("semsub"+semcount).value;
        var t1,t2,t3;
        var curr=0;
        var flag=0;
        var gpa=0.0;
        var currcredit=0;
        for(var i=1;i<=x;i++){
            t1=document.getElementById("sem"+semcount+"row"+i+"d1").value;
            t2=document.getElementById("sem"+semcount+"row"+i+"d2").value;
            t3=document.getElementById("sem"+semcount+"row"+i+"d3").value;
            if(!(t2=="O" || t2=="A" || t2=="A+" || t2=="B" || t2=="B+") || !(t3=="0" || t3=="1" || t3=="1.5" || t3=="2" || t3=="3"|| t3=="4" || t3=="5" || t3=="12")){
                alert("Entries Mismatched or Empty");
                flag=1;
                break;
            }
            else{
                t3=parseFloat(t3);
                totcredits+=t3;
                currcredit+=t3;
                if(t2=="O")
                curr=curr+(10*t3);
                else if(t2=="A+")
                curr=curr+(9*t3);
                else if(t2=="A")
                curr=curr+(8*t3);
                else if(t2=="B+")
                curr=curr+(7*t3);
                else if(t2=="B")
                curr=curr+(6*t3);
            }
        }
        if(flag==0){
            gpa=curr/currcredit;
            totgpa+=gpa;
            disp+="GPA for Semester - "+semcount+":\t"+gpa.toFixed(2)+"<br><br>";
            if(semcount!=tot){
                semcount++;
                sub();
            }
            else{
                // document.getElementById("onsubmit"+(semcount-1)).disabled=true;
                var cgpa=parseFloat(totgpa/semcount);
                disp+="Total Credits Earned: "+totcredits+"<br><br>";
                disp+="Overall CGPA is....."+cgpa.toFixed(2)+"<br>";
                var findiv=document.createElement("div");
                findiv.setAttribute("id","result");
                document.getElementById("main").appendChild(findiv);
                var f=document.createElement("h1").innerHTML="Overall Result";
                findiv.append(f);
                var p=document.createElement("p");
                document.getElementById("result").append(p);
                p.innerHTML=disp;
                document.getElementById("oncalculate").disabled=true;
                
            }
        }       
    }
}
var color=["#ff4935","rgb(252, 222, 103)","#F08080","#ff4935","#98FB98","#FFFFF0","rgb(252, 222, 103)","#f8ac08"]
window.onscroll = function() {
    var section1 = document.getElementById("sem"+semcount);
    var section1Rect = section1.getBoundingClientRect();
    var screenHeight = window.innerHeight || document.documentElement.clientHeight;
    if (section1Rect.top <= screenHeight/2 && section1Rect.bottom >= screenHeight/2) {
      document.body.style.backgroundColor = color[semcount-1];
    }
  };

window.onscroll = function() {
    var section1;
    for(var i=tot;i>=0;i--){
        if(i==0)
        section1 = document.getElementById("head");
        else
        section1 = document.getElementById("sem"+i);
        var section1Rect = section1.getBoundingClientRect();
        var screenHeight = window.innerHeight || document.documentElement.clientHeight;
        if (section1Rect.top <= screenHeight/2 && section1Rect.bottom >= screenHeight/2 && i==0) {
            document.body.style.backgroundColor = "#f8ac08";
        }
        if (section1Rect.top <= screenHeight/2 && section1Rect.bottom >= screenHeight/2) {
            document.body.style.backgroundColor = color[i-1];
        }
    }
};