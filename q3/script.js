
function clicked(){
    var row = window.event.target.parentElement;
    if(row.classList.contains("collapsed")){
        row.classList.remove("collapsed")
    }else{
        row.classList.add("collapsed");
    }
}

function collapseAll(){
    var rows = document.getElementsByClassName("row")
    for(var i=0;i<rows.length;i++){
        var content = rows[i].children[1];
        content.style.height = content.offsetHeight - 40;
        console.log(content);
        rows[i].classList.add("collapsed");
    };
};
