var maxPrevWidth = 100;
var maxPrevHeight = 200;

/*
The following code snippet is from https://stackoverflow.com/a/14731922
 Jason J Nathan (https://stackoverflow.com/users/382536/jason-j-nathan) On Stack Overflow
*//*
function calculateAspectRatioFit(srcWidth, srcHeight, maxWidth, maxHeight) {
	
    var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
	console.log(ratio);

    return { width: srcWidth*ratio, height: srcHeight*ratio };
 }
*/
 
 /*
 The following code snippet is from https://stackoverflow.com/a/4459419
 Ivan Baev (https://stackoverflow.com/users/344437/ivan-baev) On Stack Overflow
 -------------------
 */
	function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            
            reader.onload = function (e) {
               $('#preview').attr('src', e.target.result);
			}
            
            reader.readAsDataURL(input.files[0]);
        } else{
			$('#preview').attr('src', "");
		}
    }
    /*fixed the broken code with this solution:
	https://stackoverflow.com/a/19194194
	by Dhaval Marthak (https://stackoverflow.com/users/2157321/dhaval-marthak) on Stack Overflow
	*/
    $(document).on('change','#uploadImage',function(event){
        readURL(this);
		console.log("change!");
    });
//--------------------

