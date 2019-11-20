const upperBar = document.getElementById("upper-bar");
// const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const short_month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
window.onload = () => {
    var date = new Date();
    var cur_date = `${date.getHours()}:${date.getMinutes()} &nbsp;&nbsp;&nbsp; ${short_month[date.getMonth()]}-${date.getDate()}, ${date.getFullYear()}`;
    upperBar.innerHTML = cur_date;
    setInterval(
        ()=>{
            var date = new Date();
            var cur_date = `${date.getHours()}:${date.getMinutes()} &nbsp;&nbsp;&nbsp; ${short_month[date.getMonth()]}-${date.getDate()}, ${date.getFullYear()}`;
            upperBar.innerHTML = cur_date;
        }
        ,30000
    );
}
