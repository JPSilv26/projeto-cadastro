function cadastrar() {
    var nom = document.getElementById('nome')
    var ida = document.getElementById('idade')
    var ema = document.getElementById('email')
    var tel = document.getElementById('telefone')
    var can = document.getElementById('canino')

    if (can) {
        var especie = 'Canino'
    } else {
        var especie = 'Felino'
    }

    var pq = document.getElementById('pequeno')
    var md = document.getElementById('medio')
    if (pq) {
        var porte = 'Pequeno'
    } else if (md) {
        var porte = 'Medio'
    } else {
        var porte = 'Grande'
    }

    window.alert('Cadastro Efetuado com Sucesso!')
    window.alert(`Nome: ${nom} Idade: ${ida} Especie: ${especie} Porte: ${porte}`)
}