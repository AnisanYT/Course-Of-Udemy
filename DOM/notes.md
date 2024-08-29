Spread opeator

Si queremos realizar un objeto igual a otro pero que sea independiente:

a = {a: 1, b: 2}

Ahora, quiero crear un objeto igual a 'a', deberia de hacer algo igual a esto:

b = a

Esto imprimido seria algo como lo siguiente:
//Imprime aqui a 'b': {a: 1, b: 2}

Si yo realizo un cambio en b añadiendo una valor mas:
b.c = 3 => {a: 1, b: 2, c: 3}

Ahora el objeto de a se ve asi: {a: 1, b: 2, c: 3}

Como se puede ver, son exactamente lo mismo, para hacer un objeto diferente, podemos hacer lo siguiente:

c = {...a}
De esta forma nosotros estamos haciendo lo siguiente: {a: 1, b: 2, c: 3} pero si nosotros realizamos ahora un aunamiento al objeto que acabamos de crear:
c.d = 4 => {a: 1, b: 2, c: 3, d: 4}
Ahora a y b deberian de verse asi: {a: 1, b: 2, c: 3}

No cambian, por que el nuevo objeto es totalmente independiente de los otros dos.

    a === c
=>   false