<!DOCTYPE html>
<html>
<head>
    <title>task1</title>
    <style type="text/css">
        .wrap{
            width:100%;
        }
        .wrap div{
            width:20%;
            background-color: #fea500;
            float:left;
            margin:1.5%;
            border-radius:10%;
            padding:5%;
            height:20vw;
        }
        .but{
            width:100%;
            background-color:white;
            text-align:center;
            line-height:200px;
            margin:auto;
        }
        .button1:hover{
            background-color:orange;
        }
        .button1{
            width:70%;
            height:100px;
            border-radius:5%;
            font-size:20px;
        }
    </style>
</head>
<body>
<div class="wrap">
<div class="box"></div>
<div class="box"></div>
<div class="box"></div>
<div class="box"></div>
<div class="box"></div>
<div class="box"></div>
<div class="box"></div>
<div class="box"></div>
<div class="box"></div>
</div>
<br/>
<div class="but">
<button class="button1" onclick="start()">开始</button>
    <button class="button1" onclick="stop()">结束</button>
</div>
<script>
    var box=document.getElementsByClassName("box");
    function reset(){
        for(var i=0;i<box.length;i++){
            box[i].style.background="#fea500";
        }
    }
    function color(){
        var r =Math.floor(Math.random()*256);
        var g =Math.floor(Math.random()*256);
        var b =Math.floor(Math.random()*256);
        return "rgb("+r+','+g+','+b+")";
    }
    function change(){
        reset();
        var a=new Array();
        for(var i=0;i<3;i++){
            var num=Math.floor(Math.random()*9);
            if(a.indexOf(num)<0){
                a.push(num);
            }
            else{
                i--;
            }

        }
        box[a[0]].style.background=color();
        box[a[1]].style.background=color();
        box[a[2]].style.background=color();
    }
    var c;
    function start(){
        c = setInterval("change()",1000);
    }
    function stop(){
        clearInterval(c);
        reset();
    }
</script>
</body>

</html>
