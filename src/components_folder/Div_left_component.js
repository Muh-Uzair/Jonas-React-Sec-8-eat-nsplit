import { initialFriends } from "../App";

export function Div_left_component({ div_working_open_check, set_div_working_open_check, handle_add_friend_btn_clicked }) {


  return (

    <div className="div_left_component">



        <Div_friend_list_component />


        <Div_adding_friend_component div_working_open_check={div_working_open_check} 
                                    set_div_working_open_check={set_div_working_open_check}
                                    handle_add_friend_btn_clicked={handle_add_friend_btn_clicked} 
                                />

    </div>

  );

  
}


function Div_friend_list_component(){

  return(
    <div className="div_friend_list_component">

          <ul>{initialFriends.map((val) => (

            <li>

              <div className="li_div_img">
                <img className="img_friend" src={val.image} />
              </div>

              <div className="li_div_texts">

                <p className="friend_name">{val.name}</p>

                {val.balance < 0 && <p className="payment_details" style={{ color: "red" }}>You owe {val.name} {val.balance}$</p>}
                {val.balance > 0 && <p className="payment_details" style={{ color: "green" }}>{val.name} owes you {val.balance}$</p>}
                {val.balance === 0 && <p className="payment_details">You and {val.name} are even</p>}

              </div>

              <div className="li_div_button">
                <button className="li_button">Select</button>
              </div>

            </li>
          ))}</ul>

    </div>
  )
}

function Div_adding_friend_component({ div_working_open_check, set_div_working_open_check, handle_add_friend_btn_clicked }) {

  return(

        <div className="div_adding_friend_component">

                {div_working_open_check === false &&
                  <>
                    <div className="div_add_button">
                      <button className="left_comp_btn btn_add_friend" onClick={(e) => handle_add_friend_btn_clicked(e)}>Add friend</button>
                    </div>
                  </>}




                {div_working_open_check === true &&
                  <>
                    <div className="div_working">

                      <div className="div_friend_name">
                        <label className="inner_label label_friend_name">👫 Friend name</label>
                        <input className="inner_input input_friend_name" />
                      </div>

                      <div className="div_img_url">
                        <label className="inner_label label_img_url">🌄Image URL</label>
                        <input className="inner_input input_friend_name" />
                      </div>

                      <div className="div_final_add_btn">
                        <button className="btn_add">ADD</button>
                      </div>


                    </div>

                    <div className="div_close_button">
                      <button className="left_comp_btn btn_add_friend" onClick={(e) => handle_add_friend_btn_clicked(e)}>Close</button>
                    </div>
                  </>}

      </div>

  )
}