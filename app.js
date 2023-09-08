Vue.createApp({
  data() {
    return {
      todoItem: '',
      needDoList: [],
      completeList: []
    };
  },
  methods: {
    handleInput (event) {
      this.todoItem = event.target.value;
    },
    newTodo () {
      if (this.todoItem
 === '') { return };
      this.needDoList.push({
        title: this.todoItem
,
        id: Math.random()
      });
      this.todoItem = '';
    },
    doCheck (index, type) {

      if(type === 'need') {
        const completeMask = this.needDoList.splice(index, 1);
        this.completeList.push(...completeMask);
      }
      else {
        const noCompleteMask = this.completeList.splice(index, 1);
        this.needDoList.push(...noCompleteMask);
      }
    },
    removeMask (index, type) {
      const toDoList = type === 'need' ? this.needDoList : this.completeList;
      toDoList.splice(index, 1);
    }
  }
}
).mount('#vue_app');