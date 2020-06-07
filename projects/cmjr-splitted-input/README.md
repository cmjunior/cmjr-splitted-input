## CMJr - Splitted Input

Este componente, também conhecido como *One Time Password* divide um input em pequenos quadros, informando ao usuário de forma mais clara e intuitiva o numero de dígitos de um campo.

# DEMO
Como ficou o componente

`type='text'`
![Exemplo de uso, input type text](text-demo.gif)

`type='password'`
![Exemplo de uso, input type password](password-demo.gif)

## Uso

1. Instale o pacote:
`   npm i cmjr-splitted-input`

2. Importe o módulo no seu AppModule ou SharedModule

`
    import { CmjrSplittedInputModule } from 'cmjr-splitted-input';

    @NgModule({
        imports: [
            ...
            CmjrSplittedInputModule
        ],
        ...
    })
    export class AppModule
`

3. Adicione o componente no seu template HTML
`   <app-digits-input [(ngModel)]="senha" [digits]="4" type="text"></app-digits-input>`

Ou
`   <app-digits-input formControlName="senha" [digits]="4" type="password"></app-digits-input>`

## Opções
Configure o numero de dígitos e o tipo de dígitos, *text* ou *password*
O valor só pe retornado via property binding ou para o controle do formulário quando todos os dígitos são informados.