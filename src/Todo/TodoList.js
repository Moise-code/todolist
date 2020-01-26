import React, { Component } from 'react';



//Creation de la classe component
class TodoList extends Component{
   //Création de state
   constructor(){
      super();
      this.state = {
         UserInput: '',
         items: []

      }
      this.onChange = this.onChange.bind(this);
      this.removeTodo = this.removeTodo.bind(this);
   }

   /*Création de la méthode onChage qui permettra au UserInput 
   *de récupérer ce que l'utilisateur à entré dans le champ
   */
   onChange(event){
      this.setState({
         UserInput: event.target.value
         
      });
   
   }

   //Sauver l'entrée de l'utilisateur dans le tableau items
   addTodoList(event){
      event.preventDefault();
      this.setState({
         //vider le champ
         UserInput: '',
         //insérer un nouvel item dans le tableau
         items: [...this.state.items, this.state.UserInput],
      }, () => console.log(this.state.items));
   }

   //methode qui va permettre de retirer un item de la todoList
   removeTodo(event){
      event.preventDefault();
      const array = this.state.items;
      const index = array.indexOf(event.target.value);
      array.splice(index, 1);
      this.setState({
         items: array
      });
   }

   //Affichage du contenu
   renderTodo(){
      return this.state.items.map((item) =>{
         return(
            <div className="list-group-item" key={item}>
               {item} | <button onClick={this.removeTodo} >X</button>
            </div>
         );
      });
   }



   render(){
      return(
         <div>
            <h1 align="center">Todo liste</h1>
            <form className="form-row align-items-center">
               <input value= {this.state.UserInput} 
                  type="text" 
                  placeholder="Renseigner un item"
                  onChange = {this.onChange}
                  className="form-control mb-2"
               />
               <button 
                  onClick = {this.addTodoList.bind(this)}
                  className="btn btn-primary"
               >
                  Ajouter
               </button>
            </form>
            <div className="list-group">
               <br></br>
               {this.renderTodo()}
            </div>
         </div>
      );
   }
}

export default TodoList;