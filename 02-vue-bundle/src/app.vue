<template src="./templ/app.html"></template>
 
<script>

import helper from './helper'

export default {

    data() {
        return {
            items: [],
            newItem: ''
        }
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
                id: helper.getGuid(),
                name: value,
                isDone: false
            })
            this.newItem = ''
        },

        removeItem: function (item) {
            this.items.splice(this.items.indexOf(item), 1);
        }
    }
}

</script>
