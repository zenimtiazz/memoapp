import React, { useState, useEffect } from "react";
import "./style.css";
const getLocalData = () => {
  const lists = localStorage.getItem("mytodolist");
  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
};
const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState(getLocalData());
  const [editItem,setEditItem]=useState('');
  const [toggleButton,setToggleButton]=useState(false);

  const addItem = () => {
    if (!inputData) {
      alert("plz fill the data");
    }else if(inputData && toggleButton){
      setItems(
        items.map((currElem)=>{
          if(currElem.id === editItem){
            return {...currElem,name:inputData}
          }
          return currElem;
        })
      )
      setInputData('')
      setEditItem();
      setToggleButton(false);
      
    }
     else {
      const myNewInputData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItems([...items, myNewInputData]);
      setInputData("");
    }
  };
  //edit item
  const editedItem =(index)=>{

  const item_todo_edited=items.find((e)=>{
    return e.id === index;
  });
  setInputData(item_todo_edited.name)
setEditItem(index);
setToggleButton(true);
  }
  //delete particular item
  const deleteItem = (index) => {
    const updateItem = items.filter((e) => {
      return e.id !== index;
    });
    setItems(updateItem);
  };
  //remove all items
  const removeAll = () => {
    setItems([]);
  };
  //adding local storage

  useEffect(() => {
    localStorage.setItem("mytodolist", JSON.stringify(items));
  }, [items]);
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/todo.svg" alt="todo" />
            <figcaption>Add your list here✌🏽</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="✍🏼 Add Items"
              className="form-control"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            {toggleButton ? (<i className="fas fa-edit" onClick={addItem}></i>):(
            <i className="fa fa-plus add-btn" onClick={addItem}></i>

            )
 }
            {/* <i className="fa fa-plus add-btn" onClick={addItem}></i> */}
          </div>
          {/* show our items */}
          <div className="showItems">
            {items.map((currElem, index) => {
              return (
                <div className="eachItem" key={currElem.id}>
                  <h3>{currElem.name}</h3>
                  <div className="todo-btn">
                    <i class="fas fa-edit" onClick={()=>editedItem(currElem.id)}></i>
                    <i
                      class="fas fa-trash-alt"
                      onClick={() => deleteItem(currElem.id)}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>

          {/* remove all buttons */}
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove ALL"
              onClick={removeAll}
            >
              <span> Check List </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
