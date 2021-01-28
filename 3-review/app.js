class Student {
   constructor(name, job, info, img){
      this.name = name;
      this.job = job;
      this.info = info;
      this.img = img;
   }
}

var student = [];
var author = document.getElementById('author');
var job = document.getElementById('job');
var infor = document.getElementById('infor');
var img = document.querySelector('img');
   
student[0] = new Student("Thien Trang", "Sinh Vien", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis accusantium, aperiam similique unde beatae non fugiat rerum officia at quidem dolor provident voluptas numquam, voluptatibus velit explicabo sapiente? Consectetur, dolores.", "https://i-ione.vnecdn.net/2014/09/20/Ho-Hoai-Thien-Trang-iOne-13-2653-1411209021.jpg");
student[1] = new Student("Thien Trang", "Assistant", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis accusantium, aperiamsimilique unde beatae non fugiat rerum officia at quidem dolor provident voluptas ", "https://instagram.fsgn2-3.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/69314698_444494366171156_8493499013146799518_n.jpg?_nc_ht=instagram.fsgn2-3.fna.fbcdn.net&_nc_cat=108&_nc_ohc=r3WFVBBE0TMAX_ejENI&tp=1&oh=f6686421daf67a0408e0d2f640dd48fb&oe=602C2CB8");
student[2] = new Student("Thien Trang", "Student", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis accusantium, aperiamsimilique unde beata numquam, voluptatibusvelit explicabo sapiente? Consectetur, dolores.", "https://instagram.fsgn2-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/83117048_162140505212795_6988540829072309055_n.jpg?_nc_ht=instagram.fsgn2-2.fna.fbcdn.net&_nc_cat=111&_nc_ohc=mnJCatvez4wAX-DH1Hh&tp=1&oh=2cff19e161d6756f32c3d213668e10cf&oe=602D84B2");

// document.getElementById('prev-btn').addEventListener('click', changedInfor('prev'));
// document.getElementById('next-btn').addEventListener('click', changedInfor('next'));


var count = 0;
var check = 1;

function changedInfor(direction){
   if(direction == 'next' && count >=0 ){
      if(count == 2) {
         count = 0;
      }
      else {
         count++;
      }
   }
   else if(direction == 'prev' && count <= 2){
      if(count == 0){
         count = 2;
      }
      else count--;
   }
   author.textContent = student[count].name;
   job.textContent = student[count].job;
   infor.textContent = student[count].info;
   img.src = student[count].img;
   
}

function randomInfor(){
   var ran = Math.floor(Math.random() * 3);
   author.textContent = student[ran].name;
   job.textContent = student[ran].job;
   infor.textContent = student[ran].info;
   img.src = student[ran].img;
}