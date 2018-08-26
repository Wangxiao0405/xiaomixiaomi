window.onload=function () {
    //头部选项卡开始
    let right_right=document.getElementsByClassName("right_right")[0];
    let cart=document.getElementsByClassName("cart")[0];
    // console.log(right_right, cart);
    right_right.onmouseenter=function () {
        cart.style.height="97px";
        cart.style.boxSizing="border-box";
        cart.style.boxShadow="0 6px 15px 2px rgba(0,0,0,0.1)";
    };
    right_right.onmouseleave=function () {
        cart.style.height="0";
        cart.style.boxSizing="border-box";
        cart.style.boxShadow="none";
    };
//    头部选项卡结束
//    aside选项卡开始
    let aside=document.getElementsByClassName("aside");
    let lis=aside[0].getElementsByClassName("bigli");
    let asideBox=document.getElementsByClassName("asideBox");
    for (let i=0;i<lis.length;i++) {
        lis[i].onmouseenter=function () {
            asideBox[i].style.display="block";
            asideBox[i].style.boxShadow="3px 0 10px 1px rgba(0,0,0,0.15)";
            lis[i].style.background="#ff6700"
        }
        lis[i].onmouseleave=function () {
            asideBox[i].style.display="none";
            asideBox[i].style.boxShadow="none";
            lis[i].style.background=""
        }
    }

    console.log(aside,lis, asideBox);

    //家电选项卡开始
    let household=document.getElementsByClassName("household")[0];
    let more=household.getElementsByClassName("more")[0];
    xxK();
    //智能选项卡
    household=document.getElementsByClassName("household")[1];
    more=household.getElementsByClassName("more")[0];
    xxK();
    //搭配选项卡
    household=document.getElementsByClassName("household")[2];
    more=household.getElementsByClassName("more")[0];
    xxK();
    //配件选项卡
    household=document.getElementsByClassName("household")[3];
    more=household.getElementsByClassName("more")[0];
    xxK();
    //周边选项卡
    household=document.getElementsByClassName("household")[4];
    more=household.getElementsByClassName("more")[0];
    xxK();
    function xxK() {
        let spans=more.getElementsByTagName("span");
        let right=household.getElementsByClassName("right");
        console.log(household,more,spans,right);

        for(let i=0;i<spans.length;i++){
            spans[i].onmouseenter=function () {
                for(let j=0;j<spans.length;j++){
                    right[j].style.zIndex="5";
                    spans[j].style.color="#424242"
                    spans[j].style.borderBottom=" 2px solid #f5f5f5"
                }
                right[i].style.zIndex="10";
                spans[i].style.color="#ff6700"
                spans[i].style.borderBottom=" 2px solid #ff6700"
            }
        }
    }
//轮播图开始
    let imgBox1=document.getElementsByClassName("imgBox1")[0];
    let imgBox1li=imgBox1.getElementsByTagName("li");
    let banner=document.getElementsByClassName("banner")[0];
    let leftBtn=banner.getElementsByClassName("leftBtn")[0];
    let rightBtn=banner.getElementsByClassName("rightBtn")[0];

    console.log(imgBox1, imgBox1li,banner,leftBtn,rightBtn);
    let circleBtn=document.getElementsByClassName("circleBtn")[0];
    let circleBtndiv=circleBtn.getElementsByTagName("div")
    // console.log(circleBtn, circleBtndiv);

    let num=0;
    let t=setInterval(move,1000);
    function move() {
        num++;
        if(num==imgBox1li.length){
            num=0;
        }
        for (let j=0;j<imgBox1li.length;j++) {
            imgBox1li[j].style.zIndex="5";
            circleBtndiv[j].className="";
        }
        imgBox1li[num].style.zIndex="10";
        circleBtndiv[num].className="hot";
    }
    function moveL() {
        num--;
        if(num<0){
            num=imgBox1li.length-1;
        }
        for (let j=0;j<imgBox1li.length;j++) {
            imgBox1li[j].style.zIndex="5";
            circleBtndiv[j].className="";
        }
        imgBox1li[num].style.zIndex="10";
        circleBtndiv[num].className="hot";
    }
    banner.onmouseenter=function () {
        clearInterval(t);
    }
    banner.onmouseleave=function () {
       t=setInterval(move,1000);
    }
    //左右btn
    leftBtn.onclick=function () {
       moveL();
    }
    rightBtn.onclick=function () {
        move();
    }
    //小圆点点击
    for(let i=0;i<circleBtndiv.length;i++){
        circleBtndiv[i].onclick=function () {
            for (let j=0;j<circleBtndiv.length;j++) {
                imgBox1li[j].style.zIndex="5";
                circleBtndiv[j].className="";
            }
            imgBox1li[i].style.zIndex="10";
            circleBtndiv[i].className="hot";
            num=i;
        }
    }

    //内容轮播图
    let libox=document.querySelectorAll(".nr1 .libox");
    let wheel=document.querySelectorAll(".nr1 .wheel");
    let leftBtnnr=document.querySelector(".nr1 .leftBtn");
    let rightBtnnr=document.querySelector(".nr1 .rightBtn");
    console.log(libox, wheel, leftBtnnr, rightBtnnr);
    nr(libox,wheel,leftBtnnr,rightBtnnr);
    let libox2=document.querySelectorAll(".nr2 .libox");
    let wheel2=document.querySelectorAll(".nr2 .wheel");
    let leftBtnnr2=document.querySelector(".nr2 .leftBtn");
    let rightBtnnr2=document.querySelector(".nr2 .rightBtn");
    console.log(libox, wheel, leftBtnnr, rightBtnnr)
    nr(libox2,wheel2,leftBtnnr2,rightBtnnr2);
    let libox3=document.querySelectorAll(".nr3 .libox");
    let wheel3=document.querySelectorAll(".nr3 .wheel");
    let leftBtnnr3=document.querySelector(".nr3 .leftBtn");
    let rightBtnnr3=document.querySelector(".nr3 .rightBtn");
    console.log(libox, wheel, leftBtnnr, rightBtnnr)
    nr(libox3,wheel3,leftBtnnr3,rightBtnnr3);
    let libox4=document.querySelectorAll(".nr4 .libox");
    let wheel4=document.querySelectorAll(".nr4 .wheel");
    let leftBtnnr4=document.querySelector(".nr4 .leftBtn");
    let rightBtnnr4=document.querySelector(".nr4 .rightBtn");
    console.log(libox4, wheel4, leftBtnnr4, rightBtnnr4)
    nr(libox4,wheel4,leftBtnnr4,rightBtnnr4);
    function nr(liboxflag,wheelflag,leftflag,rightflag) {
        let now=next=0;
        let flag=true;
        function move(){
            next++;

            if(next==liboxflag.length){
                next=0;
            }
            liboxflag[next].style.left="296px";
            animate(liboxflag[now],{left:-296});
            animate(liboxflag[next],{left:0},function () {
                flag=true;
            });
            wheelflag[now].classList.remove("hot");
            wheelflag[next].classList.add("hot");
            now=next;
        }
        function moveL() {
            next--;
            if(next<0){
                next=liboxflag.length-1;
            }
            liboxflag[next].style.left="-296px";
            animate(liboxflag[now],{left:296});
            animate(liboxflag[next],{left:0},function () {
                flag=true;
            });
            wheelflag[now].classList.remove("hot");
            wheelflag[next].classList.add("hot");
            now=next;
        }
        rightflag.onclick=function () {
            if(next==liboxflag.length-1){
                return;
            }
            if(flag==false){
                return;
            }
            move();
            flag=false;
        }
        leftflag.onclick=function () {
            if(next==0){
                return;
            }
            if(flag==false){
                return;
            }
            moveL();
            flag=false;
        }
        wheelflag.forEach(function (element,i) {
            element.onclick=function () {
                if(now==i){
                    return;
                }else if(now<i){
                    liboxflag[i].style.left="296px";
                    animate(liboxflag[now],{left:-296});
                    animate(liboxflag[i],{left:0});
                    wheelflag[now].classList.remove("hot");
                    wheelflag[i].classList.add("hot");
                }else{
                    libox[i].style.left="-296px";
                    animate(liboxflag[now],{left:296});
                    animate(liboxflag[i],{left:0});
                    wheelflag[now].classList.remove("hot");
                    wheelflag[i].classList.add("hot");
                }
                next=now=i;
            }

        })

    }
}