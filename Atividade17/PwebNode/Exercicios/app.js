let express = require('express');
let app = express();

app.listen(3000, function(){
    console.log("Servidor com express foi carregado");
});

app.get('/', function(req,res){
    res.send("<html><body>A FATEC Sorocaba foi a primeira FATEC do estado e a primeira instituição pública de ensino superior na cidade, criada em 20 de maio de 1970 e iniciando as atividades em 1971. Fundada pelo Governador Roberto Costa de Abreu Sodré, a instituição foi um marco para a formação de mão de obra especializada na cidade, impulsionando a economia local e o desenvolvimento industrial, com cursos que visam atender às demandas do mercado de trabalho. </body></html>");
});
app.get('/cursos', function(req,res){
    res.send("<html><body>Cursos da Fatec Sorocaba</body></html>");
});
app.get('/professores', function(req,res){
    res.send("<html><body>Professores da Fatec Sorocaba</body></html>");
});
