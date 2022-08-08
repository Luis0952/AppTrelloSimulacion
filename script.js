const API_URL = "https://my-json-server.typicode.com/luis0952/AppTrello";

 axios
 .get(`${API_URL}/tasks`)
 .then(displayUser)
  /**Declaro unas constantes en donde almaceno lo que esta contenido los Elementos Html */
 const selects_name=document.getElementById("select_name_Resp");
 const select_title=document.getElementById("select__name-title");
 const select_details=document.getElementById("select__name-details");
 const option_date=document.getElementById("Fecha_Tarea").toLocaleDateString;

 /**Declaro unas constantes para almacenar los elementos Option creados de nombre, detalles, titulo y fecha */
 
 function displayUser(res){
    let users= res.data;
    for(let user of users){
      const option_name=document.createElement('option');
      option_name.setAttribute("id","id_option_name");
      const option_details=document.createElement('option');
      option_details.setAttribute("id","id_option_details");
      const option_title=document.createElement('option');
      option_title.setAttribute("id","id_option_title");
        /**Guardo en unas variables lo que esta dentro del objeto json */
        let name_user=user.person;
        let details_options=user.details;
        let options_title=user.title;

        /**guardo en los option creados de name lo que contiene el json de la propiedad name */
        option_name.value=name_user;
        option_name.text=name_user;
        
        /**guardo en los option creados de details lo que contiene el json de la propiedad details */
        option_details.value=details_options;
        option_details.text=details_options;

        /**guardo en los option creados de title lo que contiene el json de la propiedad title */
        option_title.value=options_title;
        option_title.text=options_title;
        /**Aquí agrego a los select de cada propiedad name, title y details la información del Json de cada uno. */
        selects_name.appendChild(option_name);
        select_title.appendChild(option_details);
        select_details.appendChild(option_title);
    }
}

/**/
const btns = document.querySelectorAll("[data-target-modal]");
const close_modals = document.querySelectorAll(".close-modal");
const overlay = document.getElementById("overlay");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(btn.dataset.targetModal).classList.add("active");
    overlay.classList.add("active");
  });
});

close_modals.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modal = btn.closest(".modal");
    modal.classList.remove("active");
    overlay.classList.remove("active");
  });
});

window.onclick = (event) => {
  if (event.target == overlay) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => modal.classList.remove("active"));
    overlay.classList.remove("active");
  }
};

///////////////
const todo_submit = document.getElementById("todo_submit");
todo_submit.addEventListener("click", createTodo);

function createTodo() {
    
    const todo_div = document.createElement("article");
    todo_div.setAttribute("id","id_todo_div")
    /*guardo en input_name lo que hay en el elemento creado Option del nombre*/
    
    const input_name =document.getElementById("id_option_name").value;  
    const txt_name = document.createTextNode(input_name);//creo un nodo de texto con el nombre y lo guardo en una variable

    /*Guardo en details lo que contiene en el option de details*/
    const input_details=document.getElementById("id_option_details").text;
    const txt_details=document.createTextNode(input_details);

    const input_title=document.getElementById("id_option_title").text;
    const txt_title=document.createTextNode(input_title);

     let date_json=new Date();
     let date_transform=date_json.toLocaleDateString();
     const txt_date=document.createTextNode(date_transform);

    /**Agrego todo al todo_div */
    todo_div.append(txt_name,`\n`);
    todo_div.append(txt_details,`\n`);
    todo_div.append(txt_title,`\n`);
    todo_div.append(txt_date,`\n`);
    todo_div.classList.add("todo");
    const span = document.createElement("span");
    const span_txt = document.createTextNode("\u00D7");
  span.classList.add("close");
  span.appendChild(span_txt);

  todo_div.appendChild(span);

  no_status.appendChild(todo_div);

  span.addEventListener("click", () => {
    span.parentElement.style.display = "none";
  });
  
 
  todo_form.classList.remove("active");
  overlay.classList.remove("active");
}

/**Aquí hago uso de la libreria Draggable/sortable para arrastrar y soltar */
const sort=new Sortable.default(
  document.querySelectorAll('.status'),//status son los id con los que tengo referenciado las columnas 
                                      //de los distintos estados, que es donde se va a soltar los elementos
                                      //arrastrados
  {draggable: 'article'}              //article que creamos antes y que es el elemento que se va a arrastrar
)

const close_btns = document.querySelectorAll(".close");

close_btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.style.display = "none";
  });
});