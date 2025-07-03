const btn = document.getElementById('btn');
const tempUrl = 'https://dummyjson.com/products/search?q=phone';
const inp = document.getElementById('inp');
const container = document.getElementById('container');



btn.addEventListener('click', () => {
    const URl = tempUrl + inp.value;
    fetch(URl)
        .then(res => {
            return res.json()
        })
        .then((data)=> {
            for(let product of data.products) {
                console.log(product);
                const productElem= document.createElement('div');
                productElem.style.border = '1px solid black';


                const h2 = document.createElement('h2');
                h2.innerText=product.titile;

                const img = document.createElement('img');
                img.setAttribute('src', product.image[0]);
                img.style.width= '200px';

                const para = document.createElement('p');
                para.innerText=prodeuct.price

                productElem.appendChild(h2);
                productElem.append(img);
                productElem.append(para);
                
                container.append(productElem);
                
                
            }
        })
});