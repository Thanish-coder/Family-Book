var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/bw5W5zSK/mother.jpg", "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg"];
var names = ["Family Book","Vamsidhar Reddy", "RamaDevi", "Thanish Reddy", "Sukeerthi"];
var i = 0;
function Update()
{
  if(i == 5)
  {
    i=0
  }
  document.getElementById("family_member_image").src = images[i];
    document.getElementById("family_member_name").innerHTML = names[i];
  i++;
    
}
