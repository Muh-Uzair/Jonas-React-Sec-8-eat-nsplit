import { useState } from "react";



const initialFriends = [
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


          
          <div className="div_left_component">



            <div className="div_friend_list_component">

              <ul>{

                initialFriends.map( (val) => (

                  <li>

                    <div className="li_div_img">
                      <img  className="img_friend" src={val.image}/>
                    </div>

                    <div className="li_div_texts">

                        <p className="friend_name">{val.name}</p>

                        {val.balance < 0 && <p className="payment_details" style={{color:"red"}}>You owe {val.name} {val.balance}$</p>}
                        {val.balance > 0 && <p className="payment_details" style={{color:"green"}}>{val.name} owes you {val.balance}$</p>}
                        {val.balance === 0 && <p className="payment_details" >You and {val.name} are even</p> }

                    </div>

                    <div className="li_div_button">
                      <button className="li_button">Select</button>
                    </div>

                  </li>
                ))
                
              }</ul>

            </div>



            <div className="div_adding_friend_component">

                      {div_working_open_check === false && 
                      <>
                          <div className="div_add_button">
                            <button className="left_comp_btn btn_add_friend" onClick={(e)=>handle_add_friend_btn_clicked(e)} >Add friend</button>
                          </div>
                      </>
                      }




                      {div_working_open_check === true && 
                      <>
                                      <div className="div_working">

                                              <div className="div_friend_name">
                                                <label className="inner_label label_friend_name">👫 Friend name</label>
                                                <input className="inner_input input_friend_name"/>
                                              </div>

                                              <div className="div_img_url">
                                                <label className="inner_label label_img_url">🌄Image URL</label>
                                                <input className="inner_input input_friend_name"/>
                                              </div>

                                              <div className="div_final_add_btn">
                                                <button className="btn_add">ADD</button>
                                              </div>


                                      </div>

                                      <div className="div_close_button">
                                          <button className="left_comp_btn btn_add_friend" onClick={(e)=>handle_add_friend_btn_clicked(e)} >Close</button>   
                                      </div>
                      </>}

            </div>
            


          </div>



          <div className="div_right_component">

            <div className="right_component_main_box">

              <div className="right_component_main_box_inner">

                <div className="div_upper">
                  <p className="text_split_bill">SPLIT A BILL WITH SARAH</p>
                </div>

                <div className="div_lower">


                  <div className="div_lower_left">

                    <p className="text_lower_right_first" >💰 Bill value</p>
                    <p className="text_lower_right" >🧍‍♀️ Your expense</p>
                    <p className="text_lower_right" >👫 Sarah's expense</p>
                    <p className="text_lower_right" >🤑 Who is paying the bill</p>

                    

                  </div>


                  <div className="div_lower_right">

                     <input  type="number" className="input_lower_right" />
                     <input  type="number"  className="input_lower_right" />
                     <input  type="text" className="input_lower_right" />

                     <select className="select_menu_lower_right">
                      <option>You</option>
                      <option>Sarah</option>
                     </select> <br />
                     
                     <button className="btn_split_bill">Split bill</button>

                  </div>


                </div>
                
              </div>

            </div>
            
          </div>


    </div>
  )
}