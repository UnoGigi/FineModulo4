function BO() {
    window.location.href = 'backoffice.html'
}


const pro_url = "https://striveschool-api.herokuapp.com/api/product/"

const form = document.getElementById('user-form');
const productIdInput = document.getElementById('prodotto');
const nameInput = document.getElementById('name');
const brandInput = document.getElementById('brand');
const DescriptionInput = document.getElementById('Description');
const imageInput = document.getElementById('image');
const priceInput = document.getElementById('price');
console.log(nameInput.value);

form.addEventListener('submit', async (event) => {

    event.preventDefault();

    console.log('esempio');

    

    const prodotto = {
        name: nameInput.value,
        brand: brandInput.value,
        description: DescriptionInput.value,
        imageUrl: imageInput.value,
        price: priceInput.value
    };
    console.log(prodotto);

    try {

        const URL = productIdInput.value 
      ? `${pro_url}${productIdInput.value}`
      : `${pro_url}`

    const HTTP_METOD = productIdInput.value ? 'PUT' : 'POST'
      

        const response = await fetch(URL, {
            method: HTTP_METOD,
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU3MmVkYmFkMjQ5NzAwMTQ2OTM2YTgiLCJpYXQiOjE2OTI4NzMxMjksImV4cCI6MTY5NDA4MjcyOX0.WYVmyeq7lKY7uVli25lVBXbgUrEmkJBM2497P1MmqPo",
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(prodotto),
        })
        if (response.ok) {
            console.log("tutto ok");
            window.location.href = 'frontoffice.html'
        } else {
            console.error("errore nel salvataggio: ", response.statusText);
        }
    } catch (error) {
        console.error("errore nel salvataggio: ", error)
    }

});

async function modifica() {
    const qsParams = new URLSearchParams(window.location.search);
    const productId = qsParams.get('id');
    console.log("id: ", productId);
    try {
        const risposta = await fetch(pro_url, {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU3MmVkYmFkMjQ5NzAwMTQ2OTM2YTgiLCJpYXQiOjE2OTI4NzMxMjksImV4cCI6MTY5NDA4MjcyOX0.WYVmyeq7lKY7uVli25lVBXbgUrEmkJBM2497P1MmqPo"
            }
        })
            ;
        if (risposta.ok) {
            const data = await risposta.json();
            console.log(data)
            for (const prodotto of data) {
                if (prodotto._id === productId) {
                    console.log(prodotto);
                    productIdInput.value = prodotto._id
                    nameInput.value = prodotto.name;
                    brandInput.value = prodotto.brand;
                    DescriptionInput.value = prodotto.description;
                    imageInput.value = prodotto.imageUrl;
                    priceInput.value = prodotto.price;
                }
            }
        } else {
            console.error("errore nel caricamento: ", response.statusText);
        }
    } catch (error) {
        console.error("errore nel caricamento: ", error)
    }

}

modifica()



