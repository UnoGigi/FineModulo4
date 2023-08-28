/* eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU3MmVkYmFkMjQ5NzAwMTQ2OTM2YTgiLCJpYXQiOjE2OTI4NzI0MTIsImV4cCI6MTY5NDA4MjAxMn0.eaGpCtfZMMIAtPwIrnqkCbPMDFCnLteDToKNPCKgYe0
*/


const pro_url = "https://striveschool-api.herokuapp.com/api/product/";


function riempiTabella(data) {
    console.log("sto riempiendo la tabella");
    const tabella = document.getElementById("prodotti-table-body");
    tabella.innerHTML = ''

    data.forEach(prodotto => {

        const row = `
        <tr>
          <td class="rigatbl">${prodotto._id}</td>
          <td class="rigatbl">${prodotto.name}</td>
          <td class="rigatbl">${prodotto.brand}</td>
          <td><img src="${prodotto.imageUrl}" alt="" class="imgform"></td>
          <td class="rigatbl">${prodotto.price}</td>
          <td>
           <button class="btn btn-secondary" onclick="dettProduct('${prodotto._id}')">Dettagli</button>
          </td>
        </tr>
      `

        tabella.innerHTML += row
    });
}

async function prod() {
    try {
        const risposta = await fetch(pro_url, {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU3MmVkYmFkMjQ5NzAwMTQ2OTM2YTgiLCJpYXQiOjE2OTI4NzMxMjksImV4cCI6MTY5NDA4MjcyOX0.WYVmyeq7lKY7uVli25lVBXbgUrEmkJBM2497P1MmqPo"
            }
        })
        //console.log(data);
        if (risposta.ok) {
            const data = await risposta.json();
            console.log(data);
            riempiTabella(data);
        } else {
            console.error("errore nel caricamento: ", response.statusText);
        }
    } catch (error) {
        console.error("errore nel caricamento: ", error)
    }
}




prod()

function goBackOffice() {
    window.location.href = 'backoffice.html'
}

function goFrontOffice() {
    window.location.href = 'frontoffice.html'
}

function goAdd() {
    window.location.href = 'add.html'
}

function dettProduct(productId) {
    window.location.href = `pagprodo.html?id=${productId}`
}


let mybutton = document.getElementById("btnsu");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
  }


