

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
export function Div_right_component({
  div_right_open_check , set_div_right_open_check,
  right_name , set_right_name,
  right_bill_value , set_right_bill_value ,
  right_your_expense , set_right_your_expense ,
  friends_expense ,
  who_is_paying , set_who_is_paying , 
  handle_split_bill_click ,
  
 }) {

  // console.log(div_right_open_check)

      if(div_right_open_check) {
          
          //--------------------------------------------------------------------------// 
            return (
                        
              <div className="div_right_component">
          
                <div className="right_component_main_box">
          
          
                  <Right_component_main_box_inner 
                  right_name={right_name} set_right_name={set_right_name} 

                  right_bill_value={right_bill_value}   set_right_bill_value={set_right_bill_value}

                  right_your_expense={right_your_expense}
                  set_right_your_expense={set_right_your_expense}

                  friends_expense={friends_expense}
                  
                  who_is_paying={who_is_paying}
                  set_who_is_paying={set_who_is_paying} 
                  
                  handle_split_bill_click={handle_split_bill_click}
                  
                  />
          
          
                </div>
          
              </div>
          
            )
          //--------------------------------------------------------------------------// 
      }
      
      else {

        //--------------------------------------------------------------------------// 
            return(
              <>
              </>
        //--------------------------------------------------------------------------// 
        )
      }

    
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Right_component_main_box_inner({
right_name , set_right_name , right_bill_value , set_right_bill_value , 
right_your_expense , set_right_your_expense ,
friends_expense ,
who_is_paying , set_who_is_paying , 
handle_split_bill_click ,
}) {



//--------------------------------------------------------------------------// 
  return(

    <div className="right_component_main_box_inner">

        <div className="div_upper">
          <p className="text_split_bill">SPLIT A BILL WITH {right_name.toUpperCase()} </p>
        </div>

        <div className="div_lower">


          
          <Div_lower_left_component  right_name={right_name} />


          <Div_lower_right_component 
          right_name={right_name} set_right_name={set_right_name} 

          right_bill_value={right_bill_value} set_right_bill_value={set_right_bill_value} 

          right_your_expense={right_your_expense}
          set_right_your_expense={set_right_your_expense}

          friends_expense={friends_expense}
          
          who_is_paying={who_is_paying}
          set_who_is_paying={set_who_is_paying}
          
          handle_split_bill_click={handle_split_bill_click}

          />



        </div>

  </div>

  )
//--------------------------------------------------------------------------// 
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Div_lower_left_component({right_name}) {

//--------------------------------------------------------------------------// 
  return (

    <div className="div_lower_left">

    <p className="text_lower_right_first">💰 Bill value</p>
    <p className="text_lower_right">🧍‍♀️ Your expense</p>
    <p className="text_lower_right">👫 {right_name}'s expense</p>
    <p className="text_lower_right">🤑 Who is paying the bill</p>



  </div>
  )
//--------------------------------------------------------------------------// 
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Div_lower_right_component({

right_name , set_right_name,   
right_bill_value , set_right_bill_value ,
right_your_expense , set_right_your_expense ,
friends_expense ,
who_is_paying , set_who_is_paying ,
handle_split_bill_click , 

}) {



        //_________________________________________________________________________________//
            function handle_bill_value(event_info_object) {
              set_right_bill_value( event_info_object.target.value ) ;
            }

        //_________________________________________________________________________________//
            function handle_your_expense_change(event_info_object) {
              set_right_your_expense( 
                Number(event_info_object.target.value) <= right_bill_value ? 
                event_info_object.target.value : 
                right_bill_value
              ) ;              
            }

        //_________________________________________________________________________________//
            function handle_who_is_paying_change(event_info_object) {
              // console.log(event_info_object.target.value)

              set_who_is_paying(event_info_object.target.value) ;  

            }








//--------------------------------------------------------------------------// 
  return (

    <form className="div_lower_right">

    <input type="text" className="input_lower_right" value={right_bill_value} onChange={(e) => handle_bill_value(e)}/>
    
    <input type="text" className="input_lower_right" value={right_your_expense} onChange={(e) => handle_your_expense_change(e)}/>
    <input type="text" className="input_lower_right" disabled value={friends_expense} />

    <select className="select_menu_lower_right" value={who_is_paying} onChange={(e) => handle_who_is_paying_change(e)}>
      <option>You</option>
      <option>{right_name}</option>
    </select> <br />

    <input type="submit" className="btn_split_bill" value={"Split bill"} onClick={(e) => handle_split_bill_click(e)}/>

  </form>


  )
//--------------------------------------------------------------------------// 


}