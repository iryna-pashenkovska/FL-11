let email = prompt('Please enter your email:');
let minEmailLength = 6;
let minPasswordLength = 5;

if(email === '' || email === null){
    alert('Canceled.');
} else if(email.length < minEmailLength){
    alert('I dont`t know any email having name lendth less than 6 symbols')
} else if(email === 'user@gmail.com' || email === 'admin@gmail.com'){
    let password = prompt('Please enter your password:');

    if(password === '' || password === null){
        alert('Canceled.');
    } else if(email === 'user@gmail.com' && password === 'UserPass' ||
              email === 'admin@gmail.com' && password === 'AdminPass'){
                if(confirm('Do you want to chanfe your password?')){
                    let passwordConfirm = prompt('Please enter your password:');
                    if(email === 'user@gmail.com' && passwordConfirm === 'UserPass' ||
                       email === 'admin@gmail.com' && passwordConfirm === 'AdminPass'){
                        let passwordNew = prompt('Please enter new password:');
                        if(passwordNew.length < minPasswordLength){
                            alert('It`s too short password. Sorry.');
                       } else{
                        let passwordNewRepeat = prompt('Please enter new password again:');
                        if(passwordNewRepeat !== passwordNew){
                            alert('You wrote the wrong password.');
                        } else{
                            alert('You have successfully changed your password.');
                        }
                       }
                    } else{
                        alert('Wrong password');
                    }
                } else{
                    alert('You have failed the change.');
                }
            } else{
                alert('Wrong password');
            }
} else{
    alert('I dont`t know you');
}