function check(){
    var x=document.getElementById("sem").value;
    for(var i=1;i<=x;i++){
        const node=document.createElement("div");
        node.setAttribute("id","sem"+i);
        node.className="sem"+i;
        document.getElementById("main").appendChild(node);
        if(i==1){
            var df=document.createDocumentFragment();
            var child=document.createElement("input");
            child.setAttribute("type", "number");
            child.setAttribute("placeholder","Number of Subjects")
            child.setAttribute("id", "sub");
            var child1=document.createElement("button");
            child1.setAttribute("")
            child1.setAttribute("Value", "Enter");
            child1.setAttribute("id", "bt1");
            df.appendChild(child);
            df.appendChild(child1);
            document.getElementById("sem1").appendChild(df);
        }
        document.getElementById("main").appendChild(node);
    }
}
