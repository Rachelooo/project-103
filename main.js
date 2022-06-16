Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    pngquality:100
    });
    
    camera=document.getElementById("camera");
    Webcam.attach('#camera');
    
    function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("image").innerHTML='<img id="photo" src="'+data_uri+'"/>';
    });
    }
    console.log("ml5.version", ml5.version);
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/3GJEBV0RF/model.json", modelloaded);
    
    function modelloaded(){
        console.log("model loaded");
    }
    
    function check(){
        img=document.getElementById("photo");
        classifier.classify(img, gotResult);
    }
    
    function gotResult(error, results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("object_name").innerHTML=results[0].label;
        document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(2);
    }
    }