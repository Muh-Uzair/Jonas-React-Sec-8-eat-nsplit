

export function Div_right_component({div_right_open_check , set_div_right_open_check}) {

  // console.log(div_right_open_check)

  if(div_right_open_check) {

        return (
        
          <div className="div_right_component">
      
            <div className="right_component_main_box">
      
      
              <Right_component_main_box_inner />
      
      
            </div>
      
          </div>
      
        );
  }
  else {

    return(
      <>
      </>
    )
  }

    
  }






function Right_component_main_box_inner() {

  return(

    <div className="right_component_main_box_inner">

        <div className="div_upper">
          <p className="text_split_bill">SPLIT A BILL WITH SARAH</p>
        </div>

        <div className="div_lower">


          
          <Div_lower_left_component />


          <Div_lower_right_component />



        </div>

  </div>

  )
}

function Div_lower_left_component() {

  return (

    <div className="div_lower_left">

    <p className="text_lower_right_first">💰 Bill value</p>
    <p className="text_lower_right">🧍‍♀️ Your expense</p>
    <p className="text_lower_right">👫 Sarah's expense</p>
    <p className="text_lower_right">🤑 Who is paying the bill</p>



  </div>


  )
}

function Div_lower_right_component() {

  return (

    <div className="div_lower_right">

    <input type="number" className="input_lower_right" />
    <input type="number" className="input_lower_right" />
    <input type="text" className="input_lower_right" />

    <select className="select_menu_lower_right">
      <option>You</option>
      <option>Sarah</option>
    </select> <br />

    <button className="btn_split_bill">Split bill</button>

  </div>


  )
}