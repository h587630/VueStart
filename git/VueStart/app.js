const vm=Vue.createApp({ 
    data(){
        return {
            firstName: 'John',
            middlename: '',
            lastName:  'Olav',
            url: 'https://google.com',
            raw_url: '<a href="https://google.com" target= "_blank"> Google </a>',
            age: 20
        }   
    },

    methods: {
        increment() {
            this.age++
        },
        
        decrement(){
            this.age--
        },
        updateLastName(event){
            this.lastName=event.target.value
        },

        updateMiddleName(event){
            this.middlename=event.target.value

        }
        },
    computed:{ 
        fullName(){
            console.log('FullName computed property is called!')
            return `${this.firstName} ${this.middlename} ${this.lastName.toUpperCase()}`
        }
    },
    watch: {
        age(newV, oldV){
            setTimeout(()=> {
                this.age=20
            },3000)
        }
    }
}).mount('#app')

setTimeout (()=> {
    vm.FirstName='Bob';

}, 2000)


/*
Vue.createApp({
    data(){
        return {
            FirstName: 'Elias',
            LastName:  'Jakupson',
        }
        
    }
}).mount('#app2')
*/