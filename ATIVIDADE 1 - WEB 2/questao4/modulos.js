module.exports = {
    allFuncs(lis) {
        var list1 = lis;
        var total = 0;
        var dividendo = list1.length;
        var num4 = 0;
        let msg = ""

        for (var i = 0; i < list1.length; i++) {
            total += list1[i];
        }

        num4 = total / dividendo
        msg += `Média: ${num4}\n`;

        var lista2 = lis
        var m = 0;
        for (var i = 0; i < lista2.length; i++) {
            if (lista2[i] > m) {
                m = lista2[i];
            }
        }

        msg += `Maior valor: ${m}\n`;

        var lista3 = lis
        var menor = 0;
        menor = Math.min.apply(null,lista3)
        msg += `Menor valor: ${menor}`

        console.log(msg)
    }
}
