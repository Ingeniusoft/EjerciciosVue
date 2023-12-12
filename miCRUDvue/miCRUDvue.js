
const datos = new Vue({
    el:'#app',
    data:{
        titulo:'GYM con Vue',
        tareas: [],
        nuevaTarea: ''
    },

    methods:{
        agregarTarea: function (){
           this.tareas.push({
            Nombre: this.nuevaTarea,
            Estado: false
           });
            this.nuevaTarea = '';
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
        },
        editarTarea: function(index){
            this.tareas[index].Estado = true;
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
        },

        eliminar: function(index){
            this.tareas.splice(index, 1); //
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
        }
    },
    created: function(){
        let datosBD = JSON.parse(localStorage.getItem('gym-vue'));
        if(datosBD === null){
            this.tareas = [];
        }else{
            this.tareas = datosBD;
        }
    }
})