# search-dropdown-component
### Componente para pesquisas e seleção de entidades padronizado com uso facilitado.
##### *Plugin somado ao Plugin jQuery [Select2](https://select2.github.io).


## Guia rápido
---
1. Importe os arquivos jQuery, Select2 e o arquivo de tradução do Select2:
```HTML

<!-- jQuery include -->
<script src="https://code.jquery.com/jquery-3.1.0.min.js"></script>

<!-- Select2 jQuery Plugin include -->
<script src="./select2-4.0.3/dist/js/select2.min.js"></script>

<!-- arquivo de tradução Select2 include -->
<script src="./select2-4.0.3/dist/js/i18n/pt-BR.js"></script>
```
2. Importe o arquivo jquery.simpleSelect2Json.js:
```HTML
<!-- simpleSelect2Json jQuery Plugin include -->
<script src="jquery.simpleSelect2Json.js"></script>
```

3. Inicialize o componente `<select>` da seguinte forma:
  * `src` - Deve receber uma string contendo um Array JSON serializado ou
        uma URL para uma requisição get;
  * `key` - Deve receber a propriedade do objeto JSON que representará a propriedade `value` da tag `<option>`; 
  * `text` - Deve receber a propriedade do objeto JSON que representará o texto que representará a opção dentro do componente `<select>`;
```javascript
$('select').simpleSelect2Json(src,key,text);
```


