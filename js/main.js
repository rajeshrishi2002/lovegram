
/***************Post**************************/
const posts = document.querySelector(".posts");
const post_data = [
  ['pic12.jpg','nerida_princess',13,'pic1.jpg',6,'The best part of my life is being with you💗 I need you forever and ever🫂 I love you da purucha💗😘🫂',2],
 
]

if(posts)
  for (var i = 0; i < post_data.length; i++) {
    const post_div = document.createElement('div')
    post_div.classList.add("post");
    post_div.innerHTML = `
    <div class="info">
      <div class="person">
          <img src="${post_data[i][0]}">
          <a href="#">${post_data[i][1]}</a>
          <span class="circle">.</span>
          <span>${post_data[i][2]}m</span>
      </div>
      <div class="more">
          <img src="./images/show_more.png" alt="show more">
      </div>
    </div>
    <div class="image">
      <img src="${post_data[i][3]}" >
    </div>
    <div class="desc">
      <div class="icons">
          <div class="icon_left d-flex">
              <div class="like">
                  <img class="not_loved" src="./images/love.png" >
                  <img class="loved" src="./images/heart.png">
              </div>
              <div class="chat">
                  <button type="button" class="btn p-0" data-bs-toggle="modal"
                      data-bs-target="#message_modal" style="border:none;">
                      <img src="./images/bubble-chat.png" style="width:32px; top:20px;" >
                  </button>
              </div>
              <div class="send">
                  <button type="button" class="btn p-0" data-bs-toggle="modal"
                      data-bs-target="#send_message_modal" style="border:none;">
                      <img src="./images/send.png" >
                  </button>
              </div>
          </div>
          <div class="save not_saved">
              <img class="hide saved" src="./images/save_black.png" >
              <img class="not_saved" src="./images/save-instagram.png" >
          </div>
      </div>
      <div class="liked">
          <a class="bold" href="#">${post_data[i][4]} likes</a>
      </div>
      <div class="post_desc">
          <p>
              <a class="bold" href="#">${post_data[i][1]}</a>
              ${post_data[i][5]}
          </p>
          <p><a class="gray" href="#">View all 6 comments</a></p>
          <input type="text" placeholder="Add a comments...">
      </div>
    </div>
      `;
    posts.appendChild(post_div);
  }

/***************explore**********/
const explore_date = [
  ['pic1.jpg','I','Love You'],
  ['Picsart_24-09-24_15-45-37-496.jpg','I','Care You'],
  ['Picsart_24-09-24_15-47-25-836.jpg','I','Trust You'],
  ['pic3.jpg','I','Need You'],
  ['pic4.jpg','I','Miss You'],
  ['pic7.jpg','Hey','Chellam'],
  ['pic9.jpg','Hey','Thangam'],
  ['pic8.jpg','Hey','Vairam'],
  ['pic10.jpg','Hey','Princess'],
  ['pic5.jpg','Hey','Pondati'],
  ['pic11.jpg','Hey','Podi'],
  ['pic13.jpg','Hey','Loosu'],
  ['pic15.jpg','Hey','Venna'],
  ['pic14.jpg','Unna','Pakanum'],
  ['pic6.jpg','🥹😘❤️🫂',''],
]
const explores = document.querySelector('.explore_container');

if(explores)
for (var i = 0; i < explore_date.length;i++) {
  const explore_1_div = document.createElement('div')
  explore_1_div.classList.add("items_4")
  explore_1_div.innerHTML = `
  <div class="item">
      <img class="img-fluid" src="${explore_date[i][0]}" >
      <div class="bg"
        <div class="info">
          <div class="likes">
             
              <span>${explore_date[i][1]}</span>
          </div>
          <div class="comments">
              
              <span>${explore_date[i++][2]}</span>
          </div>
        </div>
      </div>
  </div>
  <div class="item">
      <img class="img-fluid" src="${explore_date[i][0]}" >
      <div class="bg"
        <div class="info">
          <div class="likes">
            
              <span>${explore_date[i][1]}</span>
          </div>
          <div class="comments">
      
              <span>${explore_date[i++][2]}</span>
          </div>
        </div>
      </div>
  </div>
  <div class="item">
      <img class="img-fluid" src="${explore_date[i][0]}" >
      <div class="bg"
        <div class="info">
          <div class="likes">
            
              <span>${explore_date[i][1]}</span>
          </div>
          <div class="comments">
        
              <span>${explore_date[i++][2]}</span>
          </div>
        </div>
      </div>
  </div>
  <div class="item">
      <img class="img-fluid" src="${explore_date[i][0]}" >
      <div class="bg"
        <div class="info">
          <div class="likes">
          
              <span>${explore_date[i][1]}</span>
          </div>
          <div class="comments">
       
              <span>${explore_date[i++][2]}</span>
          </div>
        </div>
      </div>
  </div>
</div>
  `;
  explores.appendChild(explore_1_div);

  const explore_2_div = document.createElement('div');
  explore_2_div.classList.add("item1");
  explore_2_div.innerHTML = `
  <div class="item">
  <img class="img-fluid" src="${explore_date[i][0]}" >
  <div class="bg"
    <div class="info">
      <div class="likes">
      
          <span>${explore_date[i][1]}</span>
      </div>
      <div class="comments">
     
          <span>${explore_date[i][2]}</span>
      </div>
    </div>
  </div>
</div>
  `;
  explores.appendChild(explore_2_div);
}

/*****************Reels********************/
const reels_data = [
  ['mine4.mp4',
  './images/profile_img.jpg',
  'nerida_princess',
  '𝐈 𝐰𝐢𝐥𝐥 𝐡𝐨𝐥𝐝 𝐭𝐡𝐨𝐬𝐞 𝐦𝐞𝐦𝐨𝐫𝐢𝐞𝐬 𝐜𝐥𝐨𝐬𝐞 𝐭𝐨 𝐦𝐲 𝐡𝐞𝐚𝐫𝐭,𝐄𝐯𝐞𝐫𝐲 𝐥𝐚𝐮𝐠𝐡 𝐚𝐧𝐝 𝐬𝐦𝐢𝐥𝐞, 𝐰𝐞’𝐥𝐥 𝐧𝐞𝐯𝐞𝐫 𝐛𝐞 𝐚𝐩𝐚𝐫𝐭💗🫂',
  'Favorite Music',
  'My Heart',
  '5',
  '13',
   '8'
  ],
  ['mine2.mp4',
  './images/profile_img.jpg',
  'nerida_princess',
  '𝐄𝐯𝐞𝐫𝐲 𝐥𝐢𝐭𝐭𝐥𝐞 𝐭𝐡𝐢𝐧𝐠 𝐫𝐞𝐦𝐢𝐧𝐝𝐬 𝐦𝐞 𝐨𝐟 𝐲𝐨𝐮,𝐈𝐧 𝐞𝐯𝐞𝐫𝐲 𝐦𝐨𝐦𝐞𝐧𝐭, 𝐈 𝐟𝐞𝐞𝐥 𝐲𝐨𝐮𝐫 𝐥𝐨𝐯𝐞, 𝐬𝐨 𝐭𝐫𝐮𝐞💗🫂',
  'Favorite Music',
  'My Heart',
  '5',
  '28',
  '8'
  ],
  ['mine3.mp4',
 './images/profile_img.jpg',
  'nerida_princess',
  '𝐘𝐨𝐮 𝐚𝐫𝐞 𝐦𝐲 𝐬𝐮𝐧𝐬𝐡𝐢𝐧𝐞,𝐓𝐡𝐞 𝐨𝐧𝐞 𝐈 𝐜𝐡𝐞𝐫𝐢𝐬𝐡 𝐦𝐨𝐬𝐭,𝐅𝐨𝐫𝐞𝐯𝐞𝐫, 𝐲𝐨𝐮 𝐚𝐫𝐞 𝐦𝐢𝐧𝐞💗😘🥰🫂,',
  'Favorite Music',
  'My Heart',
  '5',
  '8',
  '13'
  ],
  ['mine.mp4',
 './images/profile_img.jpg',
  'nerida_princess',
  '𝐖𝐡𝐞𝐧 𝐲𝐨𝐮𝐫 𝐡𝐞𝐚𝐫𝐭 𝐚𝐧𝐝 𝐨𝐮𝐭𝐟𝐢𝐭 𝐞𝐦𝐛𝐨𝐝𝐲 𝐩𝐮𝐫𝐞 𝐥𝐨𝐯𝐞 𝐟𝐨𝐫 𝐭𝐫𝐚𝐝𝐢𝐭𝐢𝐨𝐧𝐬✨𝐒𝐢𝐦𝐩𝐥𝐲 𝐁𝐞𝐢𝐧𝐠 𝐌𝐲𝐬𝐞𝐥𝐟❤️𝐁𝐞𝐢𝐧𝐠 𝐢𝐧 𝐥𝐨𝐯𝐞 𝐰𝐢𝐭𝐡 𝐲𝐨𝐮𝐫𝐬𝐞𝐥𝐟 𝐢𝐬 𝐭𝐡𝐞 𝐦𝐨𝐬𝐭 𝐛𝐞𝐚𝐮𝐭𝐢𝐟𝐮𝐥 𝐭𝐡𝐢𝐧𝐠❣️🌹 ',
  'Favorite Music',
  'My Heart',
  '5',
  '13',
  '5'
  ],


]
const reels_container = document.querySelector(".reels");

if(reels_container)
for(let i=0;i<reels_data.length;i++){
    console.log(i)
    const reel_div = document.createElement('div');
    reel_div.classList.add("reel");
    if(i==0){
      reel_div.setAttribute("id",'video_play');
      reel_div.innerHTML = `<div class="video">
    <video src="${reels_data[i][0]}" autoplay loop>
    </video>
    <div class="content">
        <div class="sound">
            <img class="volume-up" src="./images/volume-up.png" >
            <img class="volume-mute" src="./images/volume-mute.png" >
        </div>
        <div class="play" style="margin-top:90px;">
            <img src="./images/play-button-arrowhead.png" >
        </div>
        <div class="info">
            <div class="profile" style="margin-bottom:-10px;">
                <h4><a href="#">
                        <img src="${reels_data[i][1]}" >
                        ${reels_data[i][2]}
                    </a></h4>
                <span></span>
                <button class="follow_text"></button>
            </div>
            <div class="desc">
                <p>${reels_data[i][3]} <span class="show_text"></span>
                </p>
                <div class="more">
                    <div class="music">
                        <img src="./images/music.png" >
                        <span>${reels_data[i][4]}</span>
                    </div>
                    <div class="position">
                        <img src="./images/map.png" >
                        <span>${reels_data[i][5]}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="likes">
    <div class="like">
        <img class="not_loved" src="./images/likew.png" >
        <img class="loved" src="./images/heart.png" >
        <p> ${reels_data[i][6]}</p>
    </div>
    <div class="messsage">
        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#message_modal"  style="border:none;">
            <img src="./images/commentw.png" style="width:30px;">
            <p class="m-0">${reels_data[i][7]}</p>
        </button>
    </div>
    <div class="send">
        <button type="button" class="btn"   style="border:none;">
            <img src="./images/sharew.png" >
            <p class="m-0">${reels_data[i][8]}</p>
        </button>
    </div>
    <div class="save not_saved">
        <img class="hide saved" src="images/savefw.png" >
        <img class="not_saved" src="./images/savew.png" >
    </div>
    <div class="more">
        <img src="./images/morew.png" >
    </div>
    <div class="profile">
        <img src="${reels_data[i][1]}" >
    </div>
</div>`;
    }else{
        reel_div.innerHTML = `<div class="video" style="height: 900px;">
      <video src="${reels_data[i][0]}" loop>
      </video>
      <div class="content" style="height: 93%;">
          <div class="sound" style="height:20%;">
              <img class="volume-up" src="./images/volume-up.png" >
              <img class="volume-mute" src="./images/volume-mute.png" >
          </div>
          <div class="play">
              <img src="./images/play-button-arrowhead.png" >
          </div>
          <div class="info">
              <div class="profile" style="margin-bottom:-10px;">
                  <h4><a href="#">
                          <img src="${reels_data[i][1]}" >
                          ${reels_data[i][2]}
                      </a></h4>
                  <span></span>
                  <button class="follow_text"></button>
              </div>
              <div class="desc">
                  <p>${reels_data[i][3]} <span class="show_text"></span>
                  </p>
                  <div class="more" style="margin-bottom:12px;">
                      <div class="music">
                          <img src="./images/music.png" >
                          <span>${reels_data[i][4]}</span>
                      </div>
                      <div class="position">
                          <img src="./images/map.png" >
                          <span>${reels_data[i][5]}</span>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <div class="likes">
      <div class="like"style="margin-bottom:0%;" >
          <img class="not_loved" src="./images/likew.png"  >
          <img class="loved" src="./images/heart.png" >
          <p> ${reels_data[i][6]}</p>
      </div>
      <div class="messsage" style="margin-bottom:0%;">
          <button type="button" class="btn"  style="border:none;">
              <img src="./images/commentw.png" style="width:30px;">
              <p class="m-0">${reels_data[i][7]}</p>
          </button>
      </div>
      <div class="send" style="margin-bottom:-1%;">
          <button type="button" class="btn"   style="border:none;">
              <img src="./images/sharew.png" >
                <p class="m-0">${reels_data[i][8]}</p>
          </button>
      </div>
      <div class="save not_saved" style="margin-bottom:0%;">
          <img class="hide saved" src="./images/savefw.png" >
          <img class="not_saved" src="./images/savew.png" >
      </div>
      <div class="more" style="margin-bottom:0%;">
          <img src="./images/morew.png" >
      </div>
      <div class="profile" style="margin-bottom:67px;">
          <img src="${reels_data[i][1]}" >
      </div>
  </div>`;
    }
    
    reels_container.appendChild(reel_div);
}

/**************************video**************************/
//play video onscroll
const videos = document.querySelectorAll("video");
const reels = document.querySelector(".reels");
window.addEventListener("scroll", function() {
  const scrollPosition = window.scrollY + window.innerHeight;
  videos.forEach((video,index)=> {
    reels.children[index].removeAttribute("id");
    const videoPosition = video.getBoundingClientRect().top + video.offsetHeight / 2;
    if (scrollPosition > videoPosition && videoPosition>0 && videoPosition<= video.offsetHeight) {
      video.play();
      reels.children[index].setAttribute("id", "video_play");
    } else {
      video.pause();
    }
  });
});

//play && pause && mute video
let video_container = document.querySelectorAll(".video");
video_container.forEach( function(item){
  let video = item.children[0];
  //if the user click on the video pause it 
  let button_play = item.children[1].children[1];
  item.addEventListener("click", function(){
    if(button_play.classList.contains("opac_1")){
      video.play();
    }else{
      video.pause();
    }
    button_play.classList.toggle("opac_1");
  });
  //if the user click the mute btn make the video mute
  let mute_btn = item.children[1].children[0];
  let volum_up = mute_btn.children[0];
  let volum_mute = mute_btn.children[1];
  mute_btn.addEventListener("click", function(e){
    e.stopPropagation();
    if(!video.muted){
      video.muted = true;
      volum_up.classList.add("hide_img");
      volum_mute.classList.add("display");
    }else{
      video.muted=false;
      volum_up.classList.remove("hide_img");
      volum_mute.classList.remove("display");
    }
  });
  //change the text follow ==> following and the opposite
  let follow = item.children[1].children[2].children[0].children[2];
  follow.addEventListener("click", function(e){
    e.stopPropagation();
    follow.classList.toggle("following");
    if(follow.classList.contains("following")){
      follow.innerHTML= "Following";
    }else{
      follow.innerHTML= "Follow";
    }
    
  });
});

/**************************search+notif-section **************************/
//search section notif
let search = document.getElementById("search");
let search_icon = document.getElementById("search_icon");
search_icon.addEventListener("click", function(){
  search.classList.toggle("show");
});

let notification = document.getElementById("notification");
let notification_icon = document.querySelectorAll(".notification_icon");
notification_icon.forEach( (notif)=>{
  notif.addEventListener('click',function(){
    notification.classList.toggle("show");
  })
} 
)


/**************************icons+text change **************************/
//change the icon when the user click on it

//love btn
let love_icons = document.querySelectorAll(".like");
love_icons.forEach(function(icon){
  icon.addEventListener("click",function(){
      let not_loved = icon.children[0];
      let loved = icon.children[1];
      icon.classList.toggle("love");
      not_loved.classList.toggle("hide_img");
      loved.classList.toggle("display");
  })
});

//save btn
let save_icon = document.querySelectorAll(".save");
save_icon.forEach(function(save){
  save.addEventListener("click",function(){
    let not_save = save.children[1];
    let saved = save.children[0];
    not_save.classList.toggle("hide");
    saved.classList.toggle("hide");

})
})

//notification follow 
let not_follow = document.querySelectorAll("#notification .notif.follow_notif")
not_follow.forEach(item=>{
  let follow = item.children[0].children[1].children[0];
  follow.addEventListener("click", function(e){
    e.stopPropagation();
    follow.classList.toggle("following");
    if(follow.classList.contains("following")){
      follow.innerHTML= "Following";
      follow.style.backgroundColor = 'rgb(142, 142, 142)';
      follow.style.color = "black";
    }else{
      follow.innerHTML= "Follow";
      follow.style.backgroundColor = 'rgb(0, 149, 246)';
      follow.style.color = "white";
    }
    
  });
})

/**************************comments **************************/

//comments
let replay_com = document.querySelector(".comments .responses");
let show_replay = document.querySelector(".comments .see_comment");
let hide_com = document.querySelector(".comments .see_comment .hide_com");
let show_com = document.querySelector(".comments .see_comment .show_c");
if(replay_com){
  replay_com.classList.add("hide");
  hide_com.classList.add("hide");
  show_replay.addEventListener("click",function(){
    replay_com.classList.toggle("hide");
    show_com.classList.toggle("hide");
    hide_com.classList.toggle("hide");
  });
}


/*************emojie*************** */
$(document).ready(function() {
	$("#emoji").emojioneArea({
  	pickerPosition: "top",
    tonesStyle: "radio"
  });
});

$(document).ready(function() {
	$("#emoji_create").emojioneArea({
  	pickerPosition: "bottom",
    tonesStyle: "radio"
  });
});

$(document).ready(function() {
	$("#emoji_comment").emojioneArea({
  	pickerPosition: "bottom",
    tonesStyle: "radio"
  });
});

/**********Upload post*************/
const form = document.getElementById('upload-form');
const img_container = document.querySelector("#image-container");

form.addEventListener('change', handleSubmit);

let img_url;
//add the image post
function handleSubmit(event) {
    event.preventDefault();
    if(img_container.classList.contains('hide_img')){
        img_container.classList.remove('hide_img');
        const imageFile = document.getElementById('image-upload').files[0];
        const imageURL = URL.createObjectURL(imageFile);
        const image = document.createElement('img');
        image.src = imageURL;
        img_url = imageURL;
        const imageContainer = document.getElementById('image-container');
        imageContainer.appendChild(image);
        const next_btn_post = document.querySelector(".next_btn_post");
        const title_create = document.querySelector(".title_create");
        next_btn_post.innerHTML = 'Next';
        title_create.innerHTML = 'Crop';
    }
}

/////button submit
const next_btn_post = document.querySelector(".next_btn_post");
next_btn_post.addEventListener('click',handleNext);
//add a description + click btn to share post
function handleNext(){
    if(image_description.classList.contains('hide_img')){
        const next_btn_post = document.querySelector(".next_btn_post");
        const title_create = document.querySelector(".title_create");
        const image_description = document.querySelector("#image_description");
        const modal_dialog = document.querySelector("#create_modal .modal-dialog");
        modal_dialog.classList.add("modal_share");
        image_description.classList.remove('hide_img')
        const image = document.createElement('img');
        image.src = img_url;
        const img_p = document.querySelector('.img_p');
        img_p.appendChild(image);
        next_btn_post.classList.add("share_btn_post");
        next_btn_post.classList.remove("next_btn_post");
        next_btn_post.innerHTML = 'Share';
        title_create.innerHTML = 'Create new post';
        completed();
    }
}

//post published
function completed(){
  const share_btn_post = document.querySelector(".share_btn_post");
  const post_published = document.querySelector('.post_published');
  const modal_dialog = document.querySelector("#create_modal .modal-dialog");
  share_btn_post.addEventListener("click", function(){
    modal_dialog.classList.add("modal_complete");
      post_published.classList.remove("hide_img");
      share_btn_post.innerHTML = ""
  })
}



