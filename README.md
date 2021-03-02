Remover os bootstrap das aplicacoes de micro fromtends para ele nao inicializarem sozinhos
// bootstrap: [AppComponent] Para ele nao dar boostrap sozinho ou seja inicializar

o Angular cria o novo projeto dentro da pasta projects
ng g app extrato

Adicionado @angular/elements a todos os projetos
ng add @angular/elements

Instalando em um projeto 
ng add @angular/elements projects pagamento

Startando uma aplicacao de microservico app.module.ts
    const elem = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('micro-app-extrato', elem);


Colocar no projeto pai no app.module.ts
schemas: [CUSTOM_ELEMENTS_SCHEMA],

app.component.ts
ngOnInit()
inserir os scripts dos micro-frontends

Mudando o build padrao

npm i --save ngx-build-plus

ng add ngx-build-plus

ng add ngx-build-plus --project extrato

******
Realizar o Deploy das Aplicacoes
extrato
pagamento


Para rodar os micro front end teste local
npx live-server ./dist

ng g ngx-build-plus:externals