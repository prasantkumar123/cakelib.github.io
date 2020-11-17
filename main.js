function cake(){

   var ckc = document.getElementById("cake");

   ckc.innerHTML = `

   <div id="candle"></div>

 

 <div id="basePlate"></div>

    <div id="bases">

      <div class="base b1"></div>

      <div class="base b2"></div>

      <div class="base b3"></div>

    </div>

   

   `;

}

function form(){

   var frm = document.getElementById("formReady-round");

   frm.innerHTML = `

   <div class="inputbox"> <i class="fa fa-user" aria-hidden="true"></i>

   <input type="text" placeholder="enter your name">

   </div>

   <br><br>

   

   <div class="inputbox"> <i class="fa fa-key" aria-hidden="true"></i>

   <input type="password" placeholder="enter your password">

   </div>

   <br><br>

   <button>submit</button>

   `;

}

function progress(){

   var prg = document.getElementById("progress");

   prg.innerHTML = `

   <progress value="30"></progress>

   

   `;

}

