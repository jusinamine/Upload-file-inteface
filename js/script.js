
$(document).ready(function(){ /* Function return number of files selected or name of file */ 
    $("#file-input").on("change", function(){
        var files = $(this)[0].files;
        var isImage = 1;
        var typeImage = $("#file-input").val();
        console.log(files);
        $('#box-button h1').css({ 'color': '#747474'});
        for(i=0; i<files.length;i++){
           if(!typeImage.match(/(?:gif|jpg|png|bmp)$/)){ // type of files "if not images"   
                isImage = 0;
                $('#box-button h1').css({ 'color': '#d10d0d'});
                $("#box-button h1").text("is not image(s)");

                break;
           }
           
            
         }
        if(isImage == 1){ //if files is images show nbr of files or name of files
            if(files.length >= 2 ){
                $("#box-button h1").text(files.length+" photos ready to upload");
            }
            else{
                    var filename = $("#file-input").val().split('\\').pop();
                    $("#box-button h1").text(filename);    
            }
        }
        
        

    });
});

$(document).ready(function(){ /* for drop file into div drag-drop */
    var files = [];
    $('.drag-drop').on("dragover",function(){   /*change style when u drag in div*/
     
        $(this).addClass('drag-over');
        
        return false;
    });

    $('.drag-drop').on("dragleave",function(){ /* rmove style whn u leave drag-drop style */
        
       $(this).removeClass('drag-over');
        
        return false;
    });
     
     $('.drag-drop').on("drop",function(e){    //drop file in drag-drop zone 
       
        e.stopPropagation();
        e.preventDefault();
        
         $(this).removeClass('drag-over');
         files.push(e.originalEvent.dataTransfer.files); // to get files information
         var isImage = 1;
         $('#box-button h1').css({ 'color': '#747474'});
         for(i=0; i<files[0].length;i++){ 
            var typeImag= files[0][i].type;
            console.log(typeImag);

            if(!typeImag.match(/(?:gif|jpg|png|bmp)$/)){ //if type files dorp not image
                alert("not image");
                isImage = 0;
                $('#box-button h1').css({ 'color': '#d10d0d'});
                $("#box-button h1").text("is not image(s)");

            }
        }

        if(isImage == 1){ // if image 
            if(files[0].length >= 2 ){
                $("#box-button h1").text(files[0].length+" photos ready to upload");
            }
            else{
            
                $("#box-button h1").text(files[0][0].name);
                
            }
            
        }
        
        files= []; //pour afficher toujours le nom de fichier ou nbr des fichies apres plusieur drag&drop
    });
});

   /* 
     $(document).on("click", "#upload-button", function() {
        var file_data = $("#file-input").prop("files");   // Getting the properties of file from file field
        var form_data = new FormData();                  // Creating object of FormData class
        form_data.append("file", file_data) ;             // Appending parameter named file with properties of file_field to form_data
        form_data.append("user_id", 123);               // Adding extra parameters to form_data
        for(i=0;i<file_data.length;i++){
        //console.log(file_data[i].name);
        
    
        $.ajax({
                    
                    url: file_data[i].name,
                 //   dataType: 'script',
               //     cache: false,
                 //   contentType: false,
                   // processData: false,
                    data: form_data,                         // Setting the data attribute of ajax with file_data
                    type: 'post',
                    xhrFields: {
                        // add listener to XMLHTTPRequest object directly for progress (jquery doesn't have this yet)
                        onprogress: function(progress) {
                            console.log(progress);
                            // calculate upload progress
                            var percentage = Math.floor((progress.total / progress.totalSize) * 100);
                            // log upload progress to console
                            console.log('progress', percentage);
                            if (percentage === 100) {
                                console.log('DONE!');
                            }
                        }
                    },
                    processData: false,
                    contentType: false
                    
                
        })

        

        }
    });


*/




   