(this["webpackJsonptodos-app"]=this["webpackJsonptodos-app"]||[]).push([[0],{14:function(e,t,a){e.exports=a(24)},19:function(e,t,a){},20:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),l=a(3),c=a.n(l),d=(a(19),a(13)),r=a(4),u=a(5),s=a(7),i=a(6),m=a(8),p=(a(20),a(12)),h=a(2),b=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(i.a)(t).call(this,e))).getBaseState=function(){return{completed:!1,dueDate:null,task:null}},a.handleSubmit=function(e){e.preventDefault(),a.state.dueDate=a.state.dueDate?a.state.dueDate:"None",a.props.addTodo(a.state),a.setState(a.getBaseState()),console.dir(e.target),e.target[0].value="",e.target[1].value=(new Date).toISOString().substring(0,10)},a.handleChange=function(e){var t=e.target;a.setState(Object(p.a)({},t.name,t.value))},a.state=a.getBaseState(),a.baseState=a.state,a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("label",{htmlFor:"task"},"Todo: "),o.a.createElement("input",{type:"text",name:"task",placeholder:"Add a todo here..",autoFocus:!0,onChange:this.handleChange}),o.a.createElement("br",null),o.a.createElement("label",{htmlFor:"dueDate"},"Due date: "),o.a.createElement("input",{type:"date",name:"dueDate",placeholder:"MM/DD/YYYY",onChange:this.handleChange}),o.a.createElement("br",null),this.state.task?o.a.createElement("input",{type:"submit",value:"Add Todo",disblaed:!1}):o.a.createElement("input",{type:"submit",value:"Add Todo",disabled:!0}),o.a.createElement(h.a,null))}}]),t}(n.Component),g=function(e){function t(e){return Object(r.a)(this,t),Object(s.a)(this,Object(i.a)(t).call(this,e))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){Object(h.b)("Added: "+this.props.todos.task)}},{key:"componentWillUnmount",value:function(){Object(h.b)("Deleted: "+this.props.todos.task)}},{key:"render",value:function(){var e=this.props,t=e.todos,a=e.deleteTodo,n=e.toggleCompleted,l=e.changeDueDate;return o.a.createElement("div",{key:t.id},o.a.createElement("p",null,t.task," "),o.a.createElement("p",null,o.a.createElement("span",{onClick:function(){return n(t.id)}},"Completed: ",t.completed?"\u2705":"\u274c"," | "),o.a.createElement("span",{onClick:function(){return l(t.id)}},"Due: \ud83d\uddd3",t.dueDate)),o.a.createElement("button",{onClick:function(){return a(t.id)}},"Delete"))}}]),t}(o.a.Component),f=function(e){var t=e.todos,a=e.deleteTodo,n=e.toggleCompleted,l=e.changeDueDate,c=t.map((function(e){return o.a.createElement(g,{todos:e,deleteTodo:a,toggleCompleted:n,changeDueDate:l})}));return o.a.createElement("div",null,c)},D=0,v=(a(23),function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(s.a)(this,Object(i.a)(t).call(this))).addTodo=function(t){console.log(t),t.id=D,D++,e.setState({todos:[].concat(Object(d.a)(e.state.todos),[t])})},e.deleteTodo=function(t){var a=e.state.todos.filter((function(e){return e.id!==t}));e.setState({todos:a})},e.toggleCompleted=function(t){var a=e.state.todos.map((function(e){return e.id===t?(e.completed=!e.completed,e.completed?Object(h.b)("Completed: "+e.task):Object(h.b)("Not Completed: "+e.task),e):e}));e.setState({todos:a})},e.changeDueDate=function(e){console.log("This feature is under contruction.")},e.state={todos:[]},e}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(b,{addTodo:this.addTodo}),o.a.createElement(f,{todos:this.state.todos,deleteTodo:this.deleteTodo,toggleCompleted:this.toggleCompleted,changeDueDate:this.changeDueDate}))}}]),t}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[14,1,2]]]);
//# sourceMappingURL=main.65979700.chunk.js.map