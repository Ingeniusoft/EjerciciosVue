const app = new Vue({
    el: '#app',
    data:{
        mensaje: 'Hola mundo Vue',
        contador: 0
    },
    
    computed:{
       invertido(){
        return this.mensaje.split('').reverse().join('');
       },
       color (){
        return {
            'bg-success': this.contador <=15,
            'bg-warning': this.contador > 15 && this.contador <= 30,
            'bg-danger': this.contador >= 31
        }
    }
    }
});