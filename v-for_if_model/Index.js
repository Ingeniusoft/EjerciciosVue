const dato = new Vue({
    el:'#app',
    data:{
        Usuarios: [
            {Nombre:'Anderson', Apellido: 'Torres', Edad: '22'},
                {Nombre:'Mario', Apellido: 'Lanza', Edad: '45'},
                    {Nombre:'Sandra', Apellido: 'Gallegos', Edad: '23'},
                        {Nombre:'Anael', Apellido: 'Martinez', Edad: '23'}
                        ],
        Usuarios2: '',
    },

    methods:{
        agregarUsuario (){
            this.Usuarios.push({
                Nombre: this.Usuarios2, Edad: 15
            })
        }
    }
})