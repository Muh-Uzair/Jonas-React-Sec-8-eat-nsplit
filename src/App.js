import { useState } from "react";
import { Div_left_component } from "./components_folder/Div_left_component";
import { Div_right_component } from "./components_folder/Div_right_component";



const initialFriends_demo = [
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


            const [right_name , set_right_name] = useState("Mr X") ;
            const [right_bill_value , set_right_bill_value] = useState(0)








            const [initialFriends , set_initial_friends] = useState(initialFriends_demo)
            const [select_btn_display , set_select_btn_display] = useState("") ;


            // 1 : 
            const [div_right_open_check , set_div_right_open_check ] = useState(false) ;
            const [div_working_open_check , set_div_working_open_check] = useState(false) ;
            //________________________________________________________________________________//
            function handle_add_friend_btn_clicked(event_info_object){

            if(div_right_open_check === false )
            {

              set_div_working_open_check(!div_working_open_check) ;
            }
                
            }


            // 2 : 
           //________________________________________________________________________________//
            const [clicked_li , set_clicked_li] = useState("") ;
            function handle_select_btn_clicking(event_info_object , recieved_id , val , recieved_select_btn_display ) {



            if(recieved_id !== clicked_li ) {set_div_right_open_check(true)}
            else if(recieved_id === clicked_li ) {set_div_right_open_check(!div_right_open_check) }



            if(select_btn_display=== "" || select_btn_display=== "Close") {
              set_select_btn_display("Select")

            }

            if(select_btn_display === "Select") {
              set_select_btn_display("Close")
            }




            set_clicked_li(recieved_id)
            set_right_name(val.name) ;
            set_div_working_open_check(false) ;






            }

  








//--------------------------------------------------------------------------// 
  return(



    <div className="div_app">


          < Div_left_component div_working_open_check={div_working_open_check} 
                              set_div_working_open_check={set_div_working_open_check}
                              handle_add_friend_btn_clicked={handle_add_friend_btn_clicked}

                              div_right_open_check={div_right_open_check}
                              set_div_right_open_check={set_div_right_open_check} 
                              handle_select_btn_clicking={handle_select_btn_clicking}

                              initialFriends={initialFriends}
                              set_initial_friends={set_initial_friends}

                              clicked_li={clicked_li}
                              set_clicked_li={set_clicked_li}  
                              
                              select_btn_display={select_btn_display}
                              set_select_btn_display={set_select_btn_display}

                              
                            />



          <Div_right_component div_right_open_check={div_right_open_check}
                              set_div_right_open_check={set_div_right_open_check} 


                              right_name={right_name}
                              set_right_name={set_right_name}

                              right_bill_value={right_bill_value}
                              set_right_bill_value={set_right_bill_value}


                              />



    </div>
  )
//--------------------------------------------------------------------------// 


}



