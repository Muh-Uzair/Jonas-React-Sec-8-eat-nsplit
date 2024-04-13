import { useState } from "react";




/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
export function Div_left_component({ 

        div_working_open_check, set_div_working_open_check, handle_add_friend_btn_clicked, 
        div_right_open_check, set_div_right_open_check , handle_select_btn_clicking,
        initialFriends , set_initial_friends,
        clicked_li , set_clicked_li,
        select_btn_display , set_select_btn_display ,  
      
      }) {


//--------------------------------------------------------------------------//        
  return (

    <div className="div_left_component">



        <Div_friend_list_component   
        div_right_open_check={div_right_open_check}  set_div_right_open_check={set_div_right_open_check} handle_select_btn_clicking={handle_select_btn_clicking} 
        initialFriends={initialFriends} set_initial_friends={set_initial_friends} 
        clicked_li={clicked_li} set_clicked_li={set_clicked_li}
        select_btn_display={select_btn_display} set_select_btn_display={set_select_btn_display}
        />

        
        <Div_adding_friend_component 
        div_working_open_check={div_working_open_check} 
        set_div_working_open_check={set_div_working_open_check}
        handle_add_friend_btn_clicked={handle_add_friend_btn_clicked} 
        initialFriends={initialFriends} set_initial_friends={set_initial_friends}
        div_right_open_check={div_right_open_check}
        /> 

    </div>

  );
  //--------------------------------------------------------------------------// 

  
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Div_friend_list_component({
  
  div_right_open_check, set_div_right_open_check , handle_select_btn_clicking ,
  initialFriends , set_initial_friends , 
  clicked_li , set_clicked_li ,
  select_btn_display , set_select_btn_display ,  

}) {

    


//--------------------------------------------------------------------------// 
  return(
    <div className="div_friend_list_component">

          <ul>{initialFriends.map((val) => (

            <li  key={val.id}  style={val.id === clicked_li && div_right_open_check === true ? {backgroundColor : "#fff1df"} : {}} >

              <div className="li_div_img">
                <img className="img_friend" src={val.image} />
              </div>

              <div className="li_div_texts">

                <p className="friend_name">{val.name}</p>

                {val.balance < 0 && <p className="payment_details" style={{ color: "red" }}>You owe {val.name} {Math.abs(val.balance)} $</p>}
                {val.balance > 0 && <p className="payment_details" style={{ color: "green" }}>{val.name} owes you {val.balance}$</p>}
                {val.balance === 0 && <p className="payment_details">You and {val.name} are even</p>}

              </div>

              <div className="li_div_button">
                <button className="li_button" onClick={(e) => handle_select_btn_clicking(e , val.id , val )} >{ select_btn_display === "" ? "Select" : 
                                                                                                                select_btn_display === "Select" && val.id === clicked_li && div_right_open_check === true ? "Close" : 
                                                                                                                select_btn_display === "Close" && val.id === clicked_li && div_right_open_check === true ? "Close" : "Select"
                                                                                                                
                                                                                                              }</button>
              </div>

            </li>

          ))}</ul>

    </div>
  )
//--------------------------------------------------------------------------// 

}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Div_adding_friend_component({ 
  
  div_working_open_check, set_div_working_open_check, handle_add_friend_btn_clicked ,
  initialFriends , set_initial_friends , div_right_open_check

}) {



        //______________________________________________________________________________________________//
            const [inputed_friend_name , set_inputed_friend_name] = useState("")
            function handle_friend_name_change(event_info_object) {
              event_info_object.preventDefault() ;
              set_inputed_friend_name(event_info_object.target.value) ;
            }

        //______________________________________________________________________________________________//
            const [inputed_img_url , set_inputed_img_url] = useState("https://i.pravatar.cc/48?u=")
            function handle_url_change(event_info_object) {

              event_info_object.preventDefault() ;
              set_inputed_img_url(event_info_object.target.value) ;
            }

        //______________________________________________________________________________________________//
            function handle_add_btn_click(event_info_object) {


              event_info_object.preventDefault() ;

              if(inputed_friend_name === "" || inputed_img_url === "") return ;

              const new_id = Math.trunc(Math.random()*10001) ;
              const new_friend_obj = {
                id: new_id ,
                name: inputed_friend_name.charAt(0).toUpperCase() + inputed_friend_name.slice(1) ,
                image: `${inputed_img_url}${new_id}`,
                balance: 0,
              }

              // console.log(new_friend_obj)
              

              set_initial_friends((initialFriends) => [...initialFriends , new_friend_obj]) ;
              set_inputed_friend_name("") ;
              set_inputed_img_url("https://i.pravatar.cc/48?u=") ;
              handle_add_friend_btn_clicked() ;

            }


//--------------------------------------------------------------------------// 
  return(

        <div className="div_adding_friend_component">

                {div_working_open_check === false &&
                  <>
                    <div className="div_add_button">
                      <button className="left_comp_btn btn_add_friend"  onClick={() => handle_add_friend_btn_clicked()}>Add friend</button>
                    </div>
                  </>}



                {( div_working_open_check === true) &&   
                  <>

                      <form className="div_working" onSubmit={(e)=>handle_add_btn_click(e)}>

                        <div className="div_friend_name">
                          <label className="inner_label label_friend_name">👫 Friend name</label>
                          <input className="inner_input input_friend_name"  onChange={(e) => handle_friend_name_change(e)} value={inputed_friend_name} />
                        </div>

                        <div className="div_img_url">
                          <label className="inner_label label_img_url">🌄Image URL</label>
                          <input className="inner_input input_friend_name"  onChange={(e) => handle_url_change(e)} value={inputed_img_url} />
                        </div>

                        <div className="div_final_add_btn">
                          <input type="submit" className="btn_add" value={"ADD"}/>
                        </div>

                      </form>


                      <div className="div_close_button">
                        <button className="left_comp_btn btn_add_friend" onClick={(e) => handle_add_friend_btn_clicked(e)}>Close</button>
                      </div>

                  </>}

      </div>
  )
//--------------------------------------------------------------------------// 

}