(function (root, component) {

    root.ToDoList = component();

})(window, function () {

    function getGuid() {
        let s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }

    var app = new Vue({

        template: '#todo-list-template',

        data: {
            items: [],
            newItem: ''
        },

        computed: {
            total: function () {
                return this.items.length;
            },

            done: function () {
                return this.items.filter(function (item) {
                    return item.isDone;
                }).length;
            }
        },

        methods: {
            addItem: function () {
                var value = this.newItem && this.newItem.trim()
                if (!value) return;

                this.items.push({
                    id: getGuid(),
                    name: value,
                    isDone: false
                })
                this.newItem = ''
            },

            removeItem: function (item) {
                this.items.splice(this.items.indexOf(item), 1);
            }
        }
    });

    Vue.component('todo-item', {
        props: ['item'],
        template: '#todo-item-template'
      });

    return {
        render: function (el) {
            app.$mount(el);
        }
    }
});