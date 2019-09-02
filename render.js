const save = require('instagram-save');

const B = document.getElementById('download')



B.addEventListener('click',()=>{
    var text_box_content= document.getElementById("input-text").value
    var insta_link = text_box_content.startsWith("https://www.instagram.com/p/")
    var insta_link2 = text_box_content.startsWith("https://instagram.com/p/")
    if(insta_link==true || insta_link2==true){
        
        save(text_box_content, 'df').then(res => {
        alert(res.file + " Download Complete")
        
  });
    }
    else{
        alert("Address not Correct")
    }
    
    
    
    //save('https://instagram.com/p/B1w1PdBgm5r/','d')
})

