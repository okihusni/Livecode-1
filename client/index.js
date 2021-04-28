$(document).ready(() => {
  // isLoggedIn()

  $('#form-login').on('submit', (e) => {
    e.preventDefault();
    login();
  });
})

// const isLoggedIn = () => {
//   if(access_token) {
//     $('#login').hide();
//     $('#full-app').show();
//   }
//   else {
//     $('#login').show();
//     $('#full-app').hide();

//   }
// }

const login = () => {
  const email = $('#exampleInputEmail1').val();
  const password = $('#exampleInputPassword').val();
  
  $.ajax({
    method: 'POST',
    url: 'http://localhost:3000/users/login',
    data: {
      email,
      password
    }
  })
  .done(() => {
    
    localStorage.setItem('access_token', access_token);
    console.log('sudah login');
    $('#exampleInputEmail1').val('');
    $('#exampleInputPassword').val('');
  })
  .fail(err => {
    console.log(err);
  })
}