const save = require('instagram-save');
const fs = require('fs');
const path = require('path');
const B = document.getElementById('download')
const toastr = require('toastr')
const os = require('os');

home=os.homedir();


B.addEventListener('click',()=>{
    
    const directoryPath = home+'/Desktop/insta-download';
    
    createDirectory(directoryPath).then((path) => {
        
        
    var text_box_content= document.getElementById("input-text").value
    var insta_link = text_box_content.startsWith("https://www.instagram.com/p/")
    var insta_link2 = text_box_content.startsWith("https://instagram.com/p/")
    if(insta_link==true || insta_link2==true){
        
        save(text_box_content, directoryPath).then(res => {
        toastr.success(res.file + " Download Complete");
        
  });
    }
    else{
        toastr.warning("Address not Correct");
        
    }
    
 
    
}).catch((error) => {
  console.log(`Problem creating directory: ${error.message}`)
});


    
 
    
    
    //save('https://instagram.com/p/B1w1PdBgm5r/','d')
})

function createDirectory(directoryPath) {
  const directory = path.normalize(directoryPath);

  return new Promise((resolve, reject) => {
    fs.stat(directory, (error) => {
      if (error) {
        if (error.code === 'ENOENT') {
          fs.mkdir(directory, (error) => {
            if (error) {
              reject(error);
            } else {
              resolve(directory);
            }
          });
        } else {
          reject(error);
        }
      } else {
        resolve(directory);
      }
    });
  });
}



