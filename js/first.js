var productsContainer  ; 
var inpts = document.getElementsByClassName("form-control");

if(localStorage.getItem("productData")  == null)
{
productsContainer =[] ;
}
else
{
   productsContainer = JSON.parse(localStorage.getItem("productData"));
   displayProduct();
}
function validForm(x)
{
    var valid = /[a-z]/ ;
    if(valid.test(x) == false)
    {
        return false ;
    }   
    else
    {
        return true ;
    }
}

function addProduct()
{

    if (validForm(productName)==true)
    {
        var productName = document.getElementById("productNameInp").value;
        var productPrice = document.getElementById("productPriceInp").value;
        var productCategorey = document.getElementById("productCategoreyInp").value;
        var productDesc = document.getElementById("productDescInp").value;

        var product =
        {
            name :productName ,
            price:productPrice ,
            categorey :productCategorey ,
            desc : productDesc 
        }

        productsContainer.push(product);
        localStorage.setItem("product Data",JSON.stringify( productsContainer));
        displayProduct();
        clearForm()
    }
    else
    {
        window.alert("enter valid data") ;
    }
}

function displayProduct()
{
    var temp =`` ;
    for(var i=0 ; i<productsContainer.length ; i++)
    {
        temp += `  <div class="col-md-3 mb-3">
        <div class="product">
            <img src="img/1.jpg" class="img-fluid">
            <h4>`+productsContainer[i].name+` <span class="badge badge-primary" >`+productsContainer[i].categorey+`</span></h4>
            <p>`+productsContainer[i].desc+`</p>
            <div class="price">`+productsContainer[i].price+`</div>
            <button  onclick="deleteForm(`+i+`)" class="btn btn-info btn-sm">delete</button>
           
         </div>
    </div>`
    }
   document.getElementById("productRow").innerHTML = temp;
}

function clearForm()
{
    for(var i=0 ; i<inpts.length ; i++)
    {
        inpts[i].value = "";
    }
}

function searchInpt(term)
{
    temp = ``;
    for(var i=0 ; i<productsContainer.length ; i++)
    {
        if(productsContainer[i].name.toLowerCase().includes(term.toLowerCase()))
        {
            temp += `  <div class="col-md-3">
            <div class="product">
                <img src="img/1.jpg" class="img-fluid">
                <h4>`+productsContainer[i].name+` <span class="badge badge-primary" >`+productsContainer[i].name+`</span></h4>
                <p>`+productsContainer[i].categorey+`</p>
                <div class="price">`+productsContainer[i].price+`</div>
             </div>
        </div>`   
        }
    }
    document.getElementById("productRow").innerHTML=temp;
}

function deleteForm(term)
{
    productsContainer.splice(term,1);
    localStorage.setItem("productData",JSON.stringify( productsContainer));
    displayProduct();
}   
