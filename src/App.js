


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


            <div className="div_add_button">
              <button className="left_comp_btn btn_add_friend">Add friend</button>
            </div>

            <div className="div_working">

              <div className="div_friend_name">
                <label className="label_friend_name">Friend name</label>
                <input className="input_friend_name"/>
              </div>

              <div className="div_img_url">
                <label className="label_img_url">Friend name</label>
                <input className="input_friend_name"/>
              </div>

              <div className="div_final_add_btn">

              </div>


            </div>

            <div className="div_close_button">
              <button className="left_comp_btn btn_add_friend">Close</button>            
            </div>


        </div>
        


      </div>






      <div className="div_right_component">
        
        </div>


    </div>
  )
}