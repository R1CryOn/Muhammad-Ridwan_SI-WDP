async function getData() {
    let pokemonListAsync = await fetch('https://pokeapi.co/api/v2/pokemon')
    let pokemonList = await pokemonListAsync.json()
    pokemonList.results.forEach(res => {
        let li = document.createElement('li')
        li.innerHTML = res.name
        li.style.marginBottom = '10px'
        let btn = document.createElement('button')
        btn.innerHTML = 'details'
        btn.style.marginLeft = '10px'
        
        let ul = document.querySelector('ul')
        
        // details button
        btn.addEventListener('click', async () => {
            let pokemonDetailAsync = await fetch(res.url)
            let pokemonDetail = await pokemonDetailAsync.json()
            ul.innerHTML = ''
            let details = document.querySelector('#details')
            details.innerHTML = JSON.stringify(pokemonDetail.forms)
            
            let homeBtn = document.createElement('button')
            homeBtn.innerHTML = 'Go To Home Page'
            homeBtn.addEventListener('click', () => {
                getData()
                details.innerHTML = ''
            })
            details.appendChild(homeBtn)
            
        })
        li.appendChild(btn)
        
        ul.appendChild(li)
    })
    
}

getData()

