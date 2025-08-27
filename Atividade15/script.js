const linkCursos = {
            ADS: "https://fatecsorocaba.cps.sp.gov.br/cursos-fatec/analise-e-desenvolvimento-de-sistemas/",
            ELE: "https://fatecsorocaba.cps.sp.gov.br/cursos-fatec/eletronica-automotiva/",
            GEQ: "https://fatecsorocaba.cps.sp.gov.br/cursos-fatec/gestao-da-qualidade/",
            LOG: "https://fatecsorocaba.cps.sp.gov.br/cursos-fatec/logistica/",
            MAA: "https://fatecsorocaba.cps.sp.gov.br/cursos-fatec/manufatura-avancada/",
            MAE: "https://fatecsorocaba.cps.sp.gov.br/cursos-fatec/manutencao-de-aeronaves/",
            POL: "https://fatecsorocaba.cps.sp.gov.br/cursos-fatec/polimeros/",
            PRO: "https://fatecsorocaba.cps.sp.gov.br/cursos-fatec/processos-metalurgicos/",
            PRM: "https://fatecsorocaba.cps.sp.gov.br/cursos-fatec/projetos-mecanicos/",
            SIB: "https://fatecsorocaba.cps.sp.gov.br/cursos-fatec/sistemas-biomedicos/",
            GEE: "https://fatecsorocaba.cps.sp.gov.br/cursos-fatec/gestao-empresarial/",
            ADSA: "https://fatecsorocaba.cps.sp.gov.br/cursos-fatec/desenvolvimento-de-sistemas-ams/",
            LOGA: "https://fatecsorocaba.cps.sp.gov.br/cursos-fatec/logistica-ams/"
        };

        function abrirCurso() {
            const select = document.getElementById('cursos');
            const valor = select.value;
            if (!valor) return;

            const confirmar = confirm("Deseja abrir informações sobre o curso selecionado?");
            if (confirmar) {
                window.location.href = linkCursos[valor]; //Redireciona para a página da FATEC
            } else {
                select.value = ""; // volta para o padrão
            }
        }