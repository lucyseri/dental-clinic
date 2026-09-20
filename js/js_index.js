//hero banner
const heroBanner = document.querySelector('#hero-banner');
const heroBannerLi = document.querySelectorAll('#hero-banner ul li');
const heroBannerLeftArrow = document.querySelector('#hero-banner button.left-arrow');
const heroBannerRightArrow = document.querySelector('#hero-banner button.right-arrow');
//hero banner height
let heroBannerRatio;
function heroBannerRatioFn(){
  if(window.innerWidth > 1024){
    heroBannerRatio = 440/1110;
  }else if(window.innerWidth > 390 && window.innerWidth <= 1024){
    heroBannerRatio = 600/1024;
  }else if(window.innerWidth <= 390){
    heroBannerRatio = 530/390;
  }
};
function heroBannerHeightFn(num){
  let heroBannerHeight = heroBanner.offsetWidth*num;
  heroBanner.style.height = heroBannerHeight+'px';
};
heroBannerRatioFn();
heroBannerHeightFn(heroBannerRatio);
// hero banner auto gallery
function heroBannerFadeFn(num){
  heroBannerLi.forEach((el, idx)=>{
    if(idx == num){
      el.classList.add('active')
      el.removeAttribute('inert')
    }else{
      el.classList.remove('active');
      el.setAttribute('inert', '');
    }
  });
};
let a = -1;
function heroBannerAutoFn(){
  a++;
  if(a>=heroBannerLi.length){
    a=0;
  }
  heroBannerFadeFn(a);
};
let heroBannerInt = setInterval(heroBannerAutoFn, 5000);
(function(){heroBannerAutoFn()})();
//hero banner arrow btn
heroBannerLeftArrow.addEventListener('click', function(){
  a--;
  if(a<0) a=heroBannerLi.length - 1;
  heroBannerFadeFn(a);
});
heroBannerRightArrow.addEventListener('click', function(){
  a++;
  if(a>=heroBannerLi.length) a = 0;
  heroBannerFadeFn(a);
});
function heroBannerArrowFn(e){
  if(e.type == 'mouseover'){
    clearInterval(heroBannerInt);
  }else if(e.type == 'mouseout'){
    heroBannerInt = setInterval(heroBannerAutoFn, 5000);
  }
};
heroBannerLeftArrow.addEventListener('mouseover', heroBannerArrowFn);
heroBannerLeftArrow.addEventListener('mouseout', heroBannerArrowFn);
heroBannerRightArrow.addEventListener('mouseover', heroBannerArrowFn);
heroBannerRightArrow.addEventListener('mouseout', heroBannerArrowFn);
//features
const featuresUl = document.querySelector('section.features .con ul');
const featuresUlLi = document.querySelectorAll('section.features .con ul li');
function featureResetFn(){
  for(let i=0;i<featuresUlLi.length;i++){
    featuresUlLi[i].classList.remove('small');
    featuresUlLi[i].classList.remove('medium');
    featuresUlLi[i].classList.remove('large');
  };
};
function featuresResponsiveFn(){
  featureResetFn();
  if(window.innerWidth > 1024){
    featuresUlLi[0].classList.add('small');
    featuresUlLi[1].classList.add('large');
    featuresUlLi[2].classList.add('medium');
    featuresUlLi[3].classList.add('small');
  }else if(window.innerWidth > 390 && window.innerWidth <= 1024){
    featuresUlLi[0].classList.add('small');
    featuresUlLi[1].classList.add('large');
    featuresUlLi[2].classList.add('medium');
    featuresUlLi[3].classList.add('medium');
  }else if(window.innerWidth <= 390){
    featuresUlLi[0].classList.add('small');
    featuresUlLi[1].classList.add('large');
    featuresUlLi[2].classList.add('medium');
    featuresUlLi[3].classList.add('small');
  }
};
featuresUlLi[0].addEventListener('mouseover', function(){
  featureResetFn();
  this.classList.add('large');
  if(window.innerWidth>390 && window.innerWidth <= 1024){
    featuresUlLi[1].classList.add('small');
    featuresUlLi[2].classList.add('medium');
    featuresUlLi[3].classList.add('medium');
  }else{
    featuresUlLi[1].classList.add('medium');
    featuresUlLi[2].classList.add('small');
    featuresUlLi[3].classList.add('small');
  }
});
featuresUlLi[1].addEventListener('mouseover', function(){
  featureResetFn();
  this.classList.add('large');
  if(window.innerWidth>390 && window.innerWidth <= 1024){
    featuresUlLi[0].classList.add('small');
    featuresUlLi[2].classList.add('medium');
    featuresUlLi[3].classList.add('medium');
  }else{
    featuresUlLi[0].classList.add('small');
    featuresUlLi[2].classList.add('medium');
    featuresUlLi[3].classList.add('small');
  }
});
featuresUlLi[2].addEventListener('mouseover', function(){
  featureResetFn();
  this.classList.add('large');
  if(window.innerWidth>390 && window.innerWidth <= 1024){
    featuresUlLi[0].classList.add('medium');
    featuresUlLi[1].classList.add('medium');
    featuresUlLi[3].classList.add('small');
  }else{
    featuresUlLi[0].classList.add('small');
    featuresUlLi[1].classList.add('small');
    featuresUlLi[3].classList.add('medium');
  }
});
featuresUlLi[3].addEventListener('mouseover', function(){
  featureResetFn();
  this.classList.add('large');
  if(window.innerWidth>390 && window.innerWidth <= 1024){
    featuresUlLi[0].classList.add('medium');
    featuresUlLi[1].classList.add('medium');
    featuresUlLi[2].classList.add('small');
  }else{
    featuresUlLi[0].classList.add('small');
    featuresUlLi[1].classList.add('small');
    featuresUlLi[2].classList.add('medium');
  }
});
featuresResponsiveFn();
//implant description box height
function implantDescHeightFn(){
  const implantSelectedImg = document.querySelector('section.implant .selected-inner img');
  const implantSelectedDesc = document.querySelector('section.implant .selected-inner .desc-box');
  if(window.innerWidth>390){
    implantSelectedDesc.style.height = implantSelectedImg.offsetHeight + 'px';
  }else{
    implantSelectedDesc.style.height = 'auto';
  }
};
//implant select
function ImplantObj(a, b, c){
  this.imgSrc = a;
  this.title = b;
  this.desc = c;
}
const implantArray = [
  new ImplantObj('img/process0.png', '상담·검사', '현재 치아와 잇몸 상태를 확인합니다'),
  new ImplantObj('img/process1.png', '치료 계획', '구강 상태에 맞는 치료 방법을 계획합니다'),
  new ImplantObj('img/process2.png', '임플란트 식립', '치아가 없는 부위에 임플란트를 식립합니다'),
  new ImplantObj('img/process3.png', '보철물 제작·장착', '자연치아와 조화를 고려해 보철물을 장착합니다')
];
console.log(implantArray[0].title);
const implantSelectedImg = document.querySelector('section.implant .selected-inner img');
const stepNum = document.querySelector('section.implant .selected-inner .desc-box .step-num h4');
const detailTitle = document.querySelector('section.implant .selected-inner .desc-box .detail-txt h4');
const detailSub = document.querySelector('section.implant .selected-inner .desc-box .detail-txt p');
const implantThumUl = document.querySelector('.process-con .thum-con ul');
const implantThumUlLi = document.querySelectorAll('.process-con .thum-con ul li.thum a');
function implantDescFn(num){
  stepNum.innerText = '0'+(num+1);
  detailTitle.innerText = implantArray[num].title;
  detailSub.innerText = implantArray[num].desc;
  implantSelectedImg.setAttribute('src', implantArray[num].imgSrc);
  implantSelectedImg.setAttribute('alt', implantArray[num].title);
};
let b = 0;
implantThumUl.addEventListener('click', function(e){
  e.preventDefault();
  implantThumUlLi.forEach((el, idx)=>{
    if(e.target == el.firstElementChild){
      el.parentElement.classList.add('active');
      implantDescFn(idx);
      b=idx;
    }else{
      el.parentElement.classList.remove('active');
    }
  });
});
const defaultLeftArrow = document.querySelector('section.implant .selected-inner .desc-box button.left-arrow');
const defaultRightArrow = document.querySelector('section.implant .selected-inner .desc-box button.right-arrow');
const mobileLeftArrow = document.querySelector('section.implant .selected-inner .img-box button.left-arrow');
const mobileRightArrow = document.querySelector('section.implant .selected-inner .img-box button.right-arrow');
function implantPreFn(){
  b--;
  if(b<0){
    b=0;
  }else{
    stepNum.innerText = '0'+(b+1);
    implantDescFn(b);
    implantThumUlLi.forEach((el, idx)=>{
      if(idx == b){
        el.parentElement.classList.add('active');
      }else{
        el.parentElement.classList.remove('active');
      }
    });
  }
};
defaultLeftArrow.addEventListener('click', implantPreFn);
mobileLeftArrow.addEventListener('click', implantPreFn);
function implantNextFn(){
  b++;
  if(b>=implantThumUlLi.length){
    b=implantThumUlLi.length-1;
  }else{
    implantDescFn(b);
    implantThumUlLi.forEach((el, idx)=>{
      if(idx == b){
        el.parentElement.classList.add('active');
      }else{
        el.parentElement.classList.remove('active');
      }
    });
  };
};
defaultRightArrow.addEventListener('click', implantNextFn);
mobileRightArrow.addEventListener('click', implantNextFn);
//window resize
let heroBannerTimeout;
window.addEventListener('resize', function(){
  clearTimeout(heroBannerTimeout);
  heroBannerTimeout = setTimeout(function(){
    heroBannerRatioFn();
    heroBannerHeightFn(heroBannerRatio);
    featuresResponsiveFn();
    implantDescHeightFn();
  }, 300);
});
//popup
const popup = document.querySelector('#popup');
const popupCloseBtn = document.querySelector('#popup button');
popupCloseBtn.addEventListener('click', function(){
  popup.style.display = 'none';
});
//scroll
const departmentSec = document.querySelector('section.department');
const departmentSecUl = document.querySelector('section.department .con ul');
const doctorSec = document.querySelector('section.doctor');
const doctorInfoCon = document.querySelector('section.doctor .info-con');
const doctorTxtcon = document.querySelector('section.doctor .txt-con.default');
const implantSec = document.querySelector('section.implant');
const orthodonticsSec = document.querySelector('section.orthodontics');
const orthodonticsChecklistUl = document.querySelector('section.orthodontics .checklist-con .txt-box ul');
window.addEventListener('scroll', function(){
  console.log(orthodonticsSec.offsetTop);
  if(this.scrollY>departmentSec.offsetTop/2){
    departmentSecUl.classList.add('scroll');
  }else{
    departmentSecUl.classList.remove('scroll');
  }
  if(this.scrollY>doctorSec.offsetTop-500){
    doctorInfoCon.classList.add('scroll');
    doctorTxtcon.classList.add('scroll');
  }else{
    doctorInfoCon.classList.remove('scroll');
    doctorTxtcon.classList.remove('scroll');
  }
  if(this.scrollY>implantSec.offsetTop-200){
    implantThumUl.classList.add('scroll');
  }else{
    implantThumUl.classList.remove('scroll');
  }
  if(this.scrollY>orthodonticsSec.offsetTop-300){
    orthodonticsChecklistUl.classList.add('scroll');
  }else{
    orthodonticsChecklistUl.classList.remove('scroll');
  }
});