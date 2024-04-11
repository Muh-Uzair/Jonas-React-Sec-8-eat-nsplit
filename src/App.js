import { useState } from "react";
import { Div_left_component } from "./components_folder/Div_left_component";
import { Div_right_component } from "./components_folder/Div_right_component";



export const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
  
   
];


export default function App() {

  const [div_working_open_check , set_div_working_open_check] = useState(false) ;
  function handle_add_friend_btn_clicked(event_info_object){
    set_div_working_open_check(!div_working_open_check) ;
  }



  return(



    <div className="div_app">


          <Div_left_component div_working_open_check={div_working_open_check} 
                              set_div_working_open_check={set_div_working_open_check}
                              handle_add_friend_btn_clicked={handle_add_friend_btn_clicked}
                              />



          <Div_right_component />



    </div>
  )
}



