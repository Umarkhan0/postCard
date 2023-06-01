let selectedImages = "";
function imagesfun() {
  document.getElementById("print").innerHTML =
    `<p class="post">Create post</p> 
    <hr /> 
    <i class="fa-solid fa-user fa-2x b rounded-2xl p-2 cursor-pointer" style="color: #e3e7ed;"></i> 
    <span>Umar khan</span>
    <textarea name="" class="textara" id="text" cols="30" rows="10" placeholder="What's on your mind"></textarea> 
    <div class="backimages">
      <button onclick="butt1()"  id="first">
        <img onclick="selectImage('wood-background-with-ivy.jpg')" class="imgButt" src="wood-background-with-ivy.jpg" alt="">
      </button> 
      <button onclick="butt2()" id="sec">
        <img onclick="selectImage('yellow_wave_abstract-1280x800.jpg')" class="imgButt" src="yellow_wave_abstract-1280x800.jpg" alt="">
      </button>
      <button onclick="butt3()" id="sec">
      <img onclick="selectImage('flowerImage.jpg')" class="imgButt" src="flowerImage.jpg" alt="">
      </button> 
      <button onclick="butt4()" id="sec">
        <img onclick="selectImage('color3.jpg')" class="imgButt" src="eoW5QF.jpg" alt="">
      </button>
      <button onclick="butt5()" id="sec">
        <img  onclick="selectImage('color3.jpg')" class="imgButt" src="color3.jpg" alt="">
      </button>
      <button onclick="butt6()" id="sec">
        <img onclick="selectImage('White.jpg')"  class="imgButt" src="White.jpg" alt="">
      </button>
    </div>
    <button onclick="postCard()" class="postCard">Post</button>`;
}
function selectImage(imageURL) {
  selectedImages = imageURL;
}
function postCard() {
  let text = document.getElementById("text").value;
  let cardPrint = document.getElementById("cardPrint");
  let time = moment(new Date(), "YYYYMMDD").fromNow();
  if (time === "a few seconds ago") {
    time = "just now";
  }
  if (text.trim()) {
    cardPrint.innerHTML = `
  <div class="card postCardF" style="width: 24rem;">
    <div class="card-body">
      <i class="fa-solid fa-user fa-2x b rounded-2xl p-2 cursor-pointer" style="color: #e3e7ed;"></i> 
      <span>Umar khan</span>
        <p class="time">${time}</p>
      <div class="post-image" style="background-image: url(${selectedImages});">
      
      <h5 class="card-title">${text}</h5>
      </div>
      <div class="fot-icon">
      <i class="fa-regular fa-thumbs-up"></i>
      <i class="fa-solid fa-comment"></i>
      <i class="fa-solid fa-share-from-square"></i>
      </div>
    </div>
  </div>`
  }
  else {
    alert("Please Enter your massege");
  };
  document.getElementById("print").innerHTML =
    ` <div onclick="imagesfun()" >
    <i class="fa-solid   fa-user fa-2x b rounded-2xl p-2 cursor-pointer" style="color: #e3e7ed; "></i>
    <span>Umar khan</span>
     <input  type="text" class="bg-gray-200 w-80 p-2 hover:bg-gray-300  rounded-2xl cursor-pointer"  placeholder="What's on your mind?" disabled></div>
      <hr class="m-3"/>
      <div class="main flex justify-between">
      <div class="hover:bg-gray-300 w-36">
      <i class="fa-brands fa-line fa-1x rounded-2xl p-2 cursor-pointer" style="color: #e3e7ed;"></i>
      <span class="font-bold text-1x2 cursor-pointer" >Live vedio</span>
      </div>
      <div class="hover:bg-gray-300 w-36">
        <i class="fa-solid fa-image fa-1x rounded-2xl p-2 cursor-pointer" style="color: #e3e7ed;"></i>
        <span class="font-bold text-1x2 cursor-pointer"  >Phothos</span>
        </div>
        <div class="hover:bg-gray-300 w-36">
          <i class="fa-solid fa-face-smile fa-1x rounded-2xl p-2 cursor-pointer" style="color: #e3e7ed;"></i>
          <span class="font-bold text-1x2 cursor-pointer" >Feeling</span>
          </div>
    </div>
    </span>
    </div>
  </div>
</div>
`;
};
function butt1() {
  document.getElementById("text");
  text.style.backgroundImage = "url('wood-background-with-ivy.jpg')"
};
function butt2() {
  let text = document.getElementById("text");
  text.style.backgroundImage = "url('yellow_wave_abstract-1280x800.jpg')";
};
function butt3() {
  let text = document.getElementById("text");
  text.style.backgroundImage = "url('flowerImage.jpg')";
};
function butt4() {
  let text = document.getElementById("text");
  text.style.backgroundImage = "url('eoW5QF.jpg')";
};
function butt5() {
  let text = document.getElementById("text");
  text.style.backgroundImage = "url('color3.jpg')";
};
function butt6() {
  let text = document.getElementById("text");
  text.style.backgroundImage = "url('White.jpg')";
};
let time = moment(new Date(" Thu Jun 01 2023 10:07:09 GMT+0845 (Australian Central Western Standard Time)"), "YYYYMMDD").fromNow();
document.getElementById("time").innerHTML = time;