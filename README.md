# POC2 - Arrays JS

## Alunos:

* Caio Sampaio. RA: 10381053;
* Guilherme Picoli. RA: 10389843;
* Caio Filardi. RA: 10341128.

## Criar uma prova de conceito dos seguintes métodos sobre array em JS

### **Sort**:  
O método sort() ordena o Array. No exemplo abaixo, o método não recebeu uma função de comparação e, assim, ordena de modo crescente:
`var numerosSort = [101, 3, 16, 2, 14, 5, 56, 11, 145, 12, 7, 8, 92, 1, 23];
numerosSort = numerosSort.sort((a, b) => a - b);`

Demonstração:

Antes
![image](https://github.com/user-attachments/assets/9ce165b5-ece8-4b05-ab05-8154d3de2266)
Depois
![image](https://github.com/user-attachments/assets/dae9ee5c-950b-46e8-998c-5fca41549846)


### **map**:  
O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado. No exemplo abaixo, o método recebeu a função de comparação n => n * 2 e, assim, múltiplicará cada elemento por 2:
`var numerosMap = [101, 3, 16, 2, 14, 5, 56, 11, 145, 12, 7, 8, 92, 1, 23];
numerosMap = numerosMap.map(n => n * 2);`

Demonstração:

Antes
![image](https://github.com/user-attachments/assets/7dfc15e2-fade-4903-b25a-723336e35b8d)
Depois
![image](https://github.com/user-attachments/assets/903675f9-7d1b-41a0-8a92-5a48a2434f80)

### **reduce**:  
O método reduce() executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno. No exemplo abaixo, o método recebeu o método sumNumeros() como função de comparação e, assim, somará cada elemento do array:
`var numerosReduce = [101, 3, 16, 2, 14, 5, 56, 11, 145, 12, 7, 8, 92, 1, 23];
var resposta = numerosReduce.reduce(sumNumeros);`
`function sumNumeros(total, num) {
    return total + num;
}`

Demonstração:

Antes
![image](https://github.com/user-attachments/assets/3d866ab5-58f6-400f-853f-df6064ac146e)
Depois
![image](https://github.com/user-attachments/assets/a2521a69-af8f-4a71-b280-ca8425d553e3)

### **filter**:  
O método filter() cria uma cópia de uma parte do array, filtrando apenas os elementos do array que passam no teste fornecido. No exemplo abaixo, o método recebeu a função de comparação n => n > 20 e, assim, deixará no array apenas os elementos maiores que 20:
`var numerosFilter = [101, 3, 16, 2, 14, 5, 56, 11, 145, 12, 7, 8, 92, 1, 23];
numerosFilter = numerosFilter.filter(n => n > 20);`

Demonstração:

Antes
![image](https://github.com/user-attachments/assets/fdb4574e-4363-4b1c-8ad1-fabe3df25d4b)
Depois
![image](https://github.com/user-attachments/assets/045bc593-4f72-4049-b3e3-e49c6c1fe476)

### **spread**:  
O operador spread JavaScript (…) permite copiar todo ou parte de um array para outro array. No exemplo abaixo, o array numerosSpread2, que está sendo criado, recebe os números -1, -2 e -3. Nele é copiado o array numerosSpread com o uso do operador spread.
`var numerosSpread = [101, 3, 16, 2, 14, 5, 56, 11, 145, 12, 7, 8, 92, 1, 23];
var numerosSpread2 = [-1,-2,-3, ...numerosSpread];`

Demonstração:

Antes
![image](https://github.com/user-attachments/assets/2f0112ce-0a8b-4033-ac20-2ef46dde454c)
Depois
![image](https://github.com/user-attachments/assets/d391b414-d1ba-4c6f-89ab-b1011a92d346)
