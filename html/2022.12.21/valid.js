// 이름 검증 함수
function f_valid_name(){
    if (!re_name.exec($.trim($('#name').val()))) {
        $('#name_small').text('이름을 올바르게 입력해 주세요.(2글자 이상, 4글자 이하)');
        $('#name_small').removeClass('text-primary').addClass('text-danger');
        $('#name').removeClass('is-valid').addClass('is-invalid').val('').focus();
    } else {
        $('#name_small').text('2글자 이상, 4글자 이하');
        $('#name_small').removeClass('text-danger').addClass('text-primary');
        $('#name').removeClass('is-invalid').addClass('is-valid');
        return false;
    }
}

// 아이디 검증 함수
function f_valid_userid(){
    if (!re_userid.exec($.trim($('#userid').val()))) {
        $('#userid_small').text('아이디를 올바르게 입력해 주세요.(6글자 이상, 12글자 이하)');
        $('#userid_small').removeClass('text-primary').addClass('text-danger');
        $('#userid').removeClass('is-valid').addClass('is-invalid').val('').focus();
    } else {
        $('#userid_small').text('6글자 이상, 12글자 이하');
        $('#userid_small').removeClass('text-danger').addClass('text-primary');
        $('#userid').removeClass('is-invalid').addClass('is-valid');
    }
}

// 패스워드 검증 함수             
function f_valid_password(){
    if (!re_password_without_specialkey.exec($.trim($('#password').val()))) {
        $('#password_small').text('비밀번호를 올바르게 입력해 주세요.(12글자 이상, 20글자 이하)');
        $('#password_small').removeClass('text-primary').addClass('text-danger');
        $('#password').removeClass('is-valid').addClass('is-invalid').val('').focus();
    } else {
        $('#password_small').text('12글자 이상, 20글자 이하');
        $('#password_small').removeClass('text-danger').addClass('text-primary');
        $('#password').removeClass('is-invalid').addClass('is-valid');
    }
}

// 이메일 검증 함수
function f_valid_email(){
    if (!re_email.exec($.trim($('#email').val()))) {
        $('#email_small').text('이메일을 올바르게 입력해 주세요.');
        $('#email_small').removeClass('text-primary').addClass('text-danger');
        $('#email').removeClass('is-valid').addClass('is-invalid').val('').focus();
    } else {
        $('#email').removeClass('is-invalid').addClass('is-valid');
    }
}

// 전화번호 검증 함수
function f_valid_phone(){
    if (!re_tel.exec($.trim($('#tel').val()))) {
        $('#tel_small').text('전화번호를 올바르게 입력해 주세요.(-포함, 예시) 010-1234-5678)');
        $('#tel_small').removeClass('text-primary').addClass('text-danger');
        $('#tel').removeClass('is-valid').addClass('is-invalid').val('').focus();
    } else {
        $('#tel_small').text('-포함, 예시) 010-1234-5678)');
        $('#tel_small').removeClass('text-danger').addClass('text-primary');
        $('#tel').removeClass('is-invalid').addClass('is-valid');
    }
}
// 비밀번호 확인 함수
function f_check_password(){
    if ($.trim($('#password').val()) != $.trim($('#password2').val())) {
        $('#password2_small').text('비밀번호와 비밀번호 확인이 다릅니다.');
        $('#password2_small').removeClass('text-primary').addClass('text-danger');
        $('#password2').removeClass('is-valid').addClass('is-invalid').val('').focus();
    } else {
        $('#password2_small').text('비밀번호를 다시한번 입력');
        $('#password2_small').removeClass('text-danger').addClass('text-primary');
        $('#password2').removeClass('is-invalid').addClass('is-valid');
    }
}