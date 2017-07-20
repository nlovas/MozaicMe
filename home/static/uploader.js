 /*
 The following code snipper is from https://stackoverflow.com/a/4459419
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
        }
    }
    /*fixed the broken code with this solution:
	https://stackoverflow.com/a/19194194
	by Dhaval Marthak (https://stackoverflow.com/users/2157321/dhaval-marthak) on Stack Overflow
	*/
    $(document).on('change','#uploadImage',function(event){
		console.log("ok");
        readURL(this);
    });
//--------------------