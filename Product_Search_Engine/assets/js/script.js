var search = ()=>{
    var searchbox = document.getElementById("search-item").ariaValueMax.toUpperCase()
    var storeitems = document.getElementById("product-list")
    var product =document.querySelectorAll(".product")
    var pname = storeitems.getElementsByTagName("h2")

    for(var i=0; i<pname.length;i++){
          let match = product[i].getElementsByTagName("h2")[0]

          if(match){
            let textvalue = match.textContent || match.innerHTML
            
            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                product[i].style.display = ""
            }else{
                product[i].style.display = "none"
            }
          }
    }

}
