let GreetingMessage = "";

let GreetingWallpaper = "";

let CurrenTime = new Date();
let hrs = CurrenTime.getHours();
CurrenTime = CurrenTime.getUTCDate()+"-"+(CurrenTime.getUTCMonth()+1)+"-"+CurrenTime.getFullYear()+ ", " + CurrenTime.getHours() + ":"+ CurrenTime.getMinutes();
// let t = setTimeout(function(){ currentTime() }, 1000);
// console.log(CurrenTime);

if(hrs >= 1 && hrs <12){
  GreetingMessage = "good morning";
  GreetingWallpaper = "https://images.pexels.com/photos/4448861/pexels-photo-4448861.jpeg";
}else if(hrs >= 12 && hrs <17){
  GreetingMessage = "good afternoon";
  GreetingWallpaper = "https://images.pexels.com/photos/757240/pexels-photo-757240.jpeg";
}else {
  GreetingMessage = "good night";
  GreetingWallpaper = "https://images.pexels.com/photos/2923595/pexels-photo-2923595.jpeg";
}

const index = () => {
  return (
    <>
      <div className="greetingPage">
        <figure>
          <img src={GreetingWallpaper} alt="" title="" />
          <h1><mark>Hello User! | {GreetingMessage}</mark></h1>
          <span className="ourCurTime">{CurrenTime}</span>
      </figure>
      </div>
    </>
  )
}

export default index;
