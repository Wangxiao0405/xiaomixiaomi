   //nav选项卡
     $(".nav").mouseenter(function () {
         $(".small").css("display","block");
     });
    $(".nav").mouseleave(function () {
         $(".small").css("display","none");
    });
   $(".nav .bigli").mouseenter(function () {
       let index = $(this).index();
       $(".small1").eq(index).css("display","block")
   });
   $(".nav .bigli").mouseleave(function () {
       $(".small1").css("display", "none");
   });
       //aside选项卡
       let bigli = $(".banner .aside .bigli");
       let asideBox = $(".banner .asideBox");
       console.log(bigli, asideBox);
       bigli.hover(function () {
           let index = $(this).index();
           asideBox.eq(index).css({"display": "block", "boxShadow": "3px 0 10px 1px rgba(0,0,0,0.15)"});
           bigli.eq(index).css("background", "#ff6700");
       }, function () {
           asideBox.css({"display": "none", "boxShadow": "none"});
           bigli.css("background", "");
       });

//轮播图
       let t = setInterval(run, 2000);
       let index = 0;
       let imgbox = $(".banner .imgBox1 li")

       function run(type = "next") {
           if (type == "next") {
               index++;
               if (index >= imgbox.length) {
                   index = 0;
               }
           } else if (type == "prev") {
               index--;
               if (index < 0) {
                   index = imgbox.length - 1;
               }
           }
           imgbox.css("z-index", "5")
               .eq(index)
               .css("z-index", "10")
           $(".circleBtn div").removeClass("hot").eq(index).addClass("hot");

       }

       $(".leftBtn").click(function () {
           run("prev")
       });
       $(".rightBtn").click(function () {
           run("next")
       });
       $(".banner").hover(function () {
           clearInterval(t);
       }, function () {
           t = setInterval(run, 2000);
       });
       $(".circleBtn div").click(function () {
           let index = $(this).index();
           imgbox.css("z-index", "5")
               .eq(index)
               .css("z-index", "10");
           $(".circleBtn div").removeClass("hot").eq(index).addClass("hot");
       });

