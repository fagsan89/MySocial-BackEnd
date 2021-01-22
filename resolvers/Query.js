const { usuarios } = require('../data/db')

checkName = (name, str) => {
   
    var pattern = str.split("").map((x)=>{
        return `(?=.*${x})`
    }).join("");
    var regex = new RegExp(`${pattern}`, "g")
    
    return name.match(regex);
}

module.exports = {

    filtro(_, { name }){

        const fitered = usuarios.filter((fil) => {
            var xSub = fil.name.substring(0, 3).toLowerCase()            
            return fil.name.toLowerCase().includes(name) || checkName(xSub, name)
        });

        return fitered ? fitered : null

    },
   
    usuarios() {
        return usuarios
    },
    
    usuario(_, { id }) {

        const sels = usuarios.filter(u => u._id === id)

        return sels ? sels[0] : null
    },
    
}