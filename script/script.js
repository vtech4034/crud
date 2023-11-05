$(document).ready(function() {
    let btn = "";

    // add new  user button  
    btn += '<button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#adduserform">ADD USER </button>';
    btn+='<div class="modal fade bg-dark" id="adduserform" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">';
    btn+='<div class="modal-dialog"><div class="modal-content bg-dark text-light"><div class="modal-header"><h1 class="modal-title fs-5" id="staticBackdropLabel">ADD NEW USER</h1><button type="button" class="btn-close text-bg-danger" data-bs-dismiss="modal" aria-label="Close"></button></div>';
    btn += '<div class="modal-body">';
    btn+='<form>';
    btn+='<div class="mb-3"><label for="exampleFormControlInput1" class="form-label">USER NAME<span style="color:red">*</span></label><input type="text" class="form-control" id="exampleFormControlInput1" placeholder="John" required></div>';
    btn+='<div class="mb-3"><label for="exampleFormControlInput1" class="form-label">Email address</label><input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></div>';
    btn+='<div class="mb-3"><label for="exampleFormControlInput1" class="form-label">USER PHONE</label><input type="number" class="form-control" id="exampleFormControlInput1" placeholder="9876543210"></div>';
    btn+='<div class="mb-3"><label for="eform-select" class="form-label">USER DEPARTMENT</label><select class="form-select form-select-lg mb-3" aria-label="Large select example"><option selected>Software Developer</option><option value="2">PHP Developer</option><option value="3">Java Developer</option></select></div>';
    btn+='<div class="mb-3"><label for="exampleFormControlInput1" class="form-label">USER IMAGE</label><input type="file" class="form-control" id="exampleFormControlInput1" placeholder="add image"></div>';
    btn+='</form>';
    btn+='</div>';
    btn += '<div class="modal-footer">';
    btn+='<button type="button" class="btn btn-danger" data-bs-dismiss="modal">CLOSE</button>';
    btn+='<button type="button" class="btn btn-primary" id="adduser">SAVE</button></div></div>';
    btn+='</div>';
    btn+='</div>';

    //search user button
    btn+='<button type="button" class="btn btn-outline-info" id="searchuser">SEARCH USER</button>';
   
   // update user button
    btn+='<button type="button" class="btn btn-outline-warning" id="updateuser">UPDATE USER</button>';
    
    //delete user button
    btn+='<button type="button" class="btn btn-outline-danger" id="deleteuser">DELTER USER</button>';

    //show user button
    btn+='<button type="button" class="btn btn-outline-secondary" id="showuser">SHOW ALL USER</button>';

    
     $(".button-class").append(btn);
});