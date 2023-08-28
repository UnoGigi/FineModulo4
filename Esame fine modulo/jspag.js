function goFrontOffice() {
    window.location.href = 'frontoffice.html'
}

const pro_url = "https://striveschool-api.herokuapp.com/api/product/";


async function mostra() {
    const pro = document.getElementById("prod")
    pro.innerHTML = ''
    const qsParams = new URLSearchParams(window.location.search);
    const productId = qsParams.get('id');
    console.log("id: ", productId);
    try {
        const risposta = await fetch(pro_url, {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU3MmVkYmFkMjQ5NzAwMTQ2OTM2YTgiLCJpYXQiOjE2OTI4NzMxMjksImV4cCI6MTY5NDA4MjcyOX0.WYVmyeq7lKY7uVli25lVBXbgUrEmkJBM2497P1MmqPo"
            }
        })

        if (risposta.ok) {
            const data = await risposta.json();
            console.log(data)
            for (const prodotto of data) {
                if (prodotto._id === productId) {
                    pro.innerHTML = `
                    <div class="card cardpro" style="width: 32rem;">
                        <img src="${prodotto.imageUrl}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h2 class="card-title fw-bold">${prodotto.name}</h5>
                        <p class="card-text">${prodotto.description}</p>
                        <p class="card-text">${prodotto.price}</p>
                    </div>
                    </div>
                    `

                }
            }
        } else {
            console.error("errore nel caricamento: ", response.statusText);
        }
    } catch (error) {
        console.error("errore nel caricamento: ", error)
    }

}

mostra()