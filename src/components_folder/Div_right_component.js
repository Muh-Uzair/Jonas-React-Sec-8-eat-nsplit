export function Div_right_component() {

  return (

    <div className="div_right_component">

      <div className="right_component_main_box">

        <div className="right_component_main_box_inner">

          <div className="div_upper">
            <p className="text_split_bill">SPLIT A BILL WITH SARAH</p>
          </div>

          <div className="div_lower">


            <div className="div_lower_left">

              <p className="text_lower_right_first">💰 Bill value</p>
              <p className="text_lower_right">🧍‍♀️ Your expense</p>
              <p className="text_lower_right">👫 Sarah's expense</p>
              <p className="text_lower_right">🤑 Who is paying the bill</p>



            </div>


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


          </div>

        </div>

      </div>

    </div>

  );
}
