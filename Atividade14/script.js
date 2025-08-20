function validar() {
    let form = document.formPrincipal;
    let nome = form.nome.value.trim();
    let email = form.email.value.trim();
    let comentario = form.comentario.value.trim();
    let pesquisa = form.elements["pesquisa"].value;

    // Nome
    if (nome.length < 10) {
        alert("O nome deve ter pelo menos 10 caracteres.");
        form.nome.focus();
        return false;
    }

    // Email (já tem validação do type=email, mas vamos reforçar)
    if (email === "") {
        alert("Informe um e-mail válido.");
        form.email.focus();
        return false;
    }

    // Comentário
    if (comentario.length < 20) {
        alert("O comentário deve ter pelo menos 20 caracteres.");
        form.comentario.focus();
        return false;
    }

    // Pesquisa
    let radios = form.elements["pesquisa"];
    let marcado = false;
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            marcado = true;
            if (radios[i].value === "sim") {
                alert("Volte sempre a esta página!");
            } else {
                alert("Que bom que você voltou a visitar esta página!");
            }
        }
    }

    if (!marcado) {
        alert("Responda à pesquisa.");
        return false;
    }

    return true;
}
