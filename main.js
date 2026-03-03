function checkDiscount(){
    let budget = Number(document.getElementById("budget").value);
    let discValue = Number(budget * .2);
    
    // display with JS Method
    // use backtick instead of single quote
    document.getElementById("discount").innerHTML = `
        <div class="container" id="discount-box">
        <h2>Recommended Brands</h2><div class="container text-center d-block mt-2"><button type="button" class="btn btn-outline-primary">Asus</button>
        <button type="button" class="btn btn-outline-primary">Samsung</button>
        <button type="button" class="btn btn-outline-primary">Lenovo</button>
        </div>
        <h5>Eligble Discount<span class="badge bg-danger mt-3">${discValue}</span></h5>
    
    </div> `;

}


function checkLocation(){

    // display with JS Method
   // use backtick instead of single quote
    document.getElementById("location").innerHTML = `
        <div class="container" id="location-box">
         <img src="https://villman.com/images/villman_logo_2020.png">
            <p>
                3rd Floor, The Annex, SM City North EDSA, Quezon City
                <br><br>

                4F GH Mall Greenhills Shopping Center, San Juan, Metro Manila
                <br><br>

                2nd Flr. SM City Cabanatuan, H. Conception Cabanatuan City
                <br><br>

                Cyberzone 4th Floor, Bldg. B SM Megamall Mandaluyong City
                <br><br>
            </p>    
    
    </div> `;

}
