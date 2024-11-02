/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var rest = {

    usu: {
        usuario: {
            verificaexist_uri: "Usuario/verificaexiste",
            findall_uri: "Usuario/findall",
            create_uri: "Usuario/create",
            delete_uri: "Usuario/delete",
            update1_uri: "Usuario/update",
            findByIdedit_uri: "Usuario/findByIdedit"
        }
    },
    cli: {
        cliente: {
            findall_uri: "Cliente/findall",
            create_uri: "Cliente/create",
            delete_uri: "Cliente/delete",
            update1_uri: "Cliente/update",
            findByIdedit_uri: "Cliente/findByIdedit"
        }
    },
     ser: {
        tiposervicio: {
            findall_uri: "Tiposervicio/findall",
            create_uri: "Tiposervicio/create",
            delete_uri: "Tiposervicio/delete",
            update1_uri: "Tiposervicio/update",
            findByIdedit_uri: "Tiposervicio/findByIdedit"
        }
    },
    con: {
        contratoserv: {
//            findall_uri: "Contratoserv/findall",
            createcontrato_uri: "Contratoservicio/createcontrato"
//            delete_uri: "Tiposervicio/delete",
//            update1_uri: "Tiposervicio/update",
//            findByIdedit_uri: "Tiposervicio/findByIdedit"
        }
    }
};
