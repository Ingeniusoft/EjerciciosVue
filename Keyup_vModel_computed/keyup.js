const datos = new Vue({
    el:'#app',
    data:{
        Colaboradores:[
            {Nombre:'Anderson', Apellido:'Torres', Cuenta:1000},
            {Nombre:'Pedro', Apellido:'Sanchez', Cuenta:450},
            {Nombre:'Sandra', Apellido:'Gallegos', Cuenta:1250}
        ],
        ColaboradorNuevo:' ',
        Total:0
    },

    methods:{
        agregarColaborador(){
            this.Colaboradores.push ({
                Nombre: this.ColaboradorNuevo,
            });
            this.ColaboradorNuevo = '';
        } 
    },

    computed:{
        sumarCuenta() {
            this.Total = 0;
            for(cuenta of this.Colaboradores){
                this.Total = this.Total + cuenta.Cuenta;
            }
            return this.Total;
        }
    }
})