
$(".menu").hover(function(){
    $(".menu").removeClass('active-menu')
    $(this).addClass('active-menu')
})


const validation= function(){
    function reset(ids){
        Array.from(ids).forEach(id=> {
            $(id).click(function(){
                $(this).parent().parent().children().eq(1).text("")
        });
        })
    }
    reset(["#email","#code","#fullname","#address","#phone","#birthday"])

    $("#register").click(function(e){
        e.preventDefault()

        if(validation.isCode('#code')){
            $("#code").parent().parent().children().eq(1).text(validation.isCode('#code'))
        }
        if(validation.isEmail("#email")){
            $("#email").parent().parent().children().eq(1).text(validation.isEmail('#email'))
        }
        if(validation.isBirthday('#birthday')){
            $("#birthday").parent().parent().children().eq(1).text(validation.isBirthday('#birthday'))
        }
        if(validation.isTwoWords('#fullname')){
            $("#fullname").parent().parent().children().eq(1).text(validation.isTwoWords('#fullname'))
        }
        if(validation.isTwoWords('#address')){
            $("#address").parent().parent().children().eq(1).text(validation.isTwoWords('#address'))
        }
        if(validation.isPhone('#phone')){
            $("#phone").parent().parent().children().eq(1).text(validation.isPhone('#phone'))
        }
        if(validation.isChecked()){
            $("#male").parent().parent().parent().children().eq(1).text(validation.isChecked())
        } 
    })
}
validation.isCode=function(id){
    const vl=$(id).val()
    console.log(vl)
    var regex=new RegExp( /^(1[7-9]|2[0-2])[0-9]{6}$/)
    return regex.test(vl) ? undefined :  'Phải có 8 chữ số bắt đầu từ 17-22'
}
validation.isEmail=function(id){
    const vl=$(id).val()
    var regex=new RegExp( /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,}){1,3}$/)
    return regex.test(vl) ? undefined :  'Email không hợp lệ'    
}
validation.isBirthday=function(id){
    value=$(id).val()
    const regex=new RegExp(/^([12][0-9]|0[1-9]|3[01])[/](0[1-9]|1[0-2])[/](200[0-4]|1999)$/)
    return regex.test(value) ? "" :  'Ngày sinh Không hợp lệ'
}
validation.isTwoWords=function(id){
    value=$(id).val()
    const regex=new RegExp(/[A-Za-z0-9]{1,}\s[A-Za-z0-9]{1,}$/)
    return regex.test(value) ? "" :  'Phải có ít nhất 2 từ'
}
validation.isPhone=function(id){
    value=$(id).val()
    const regex = new RegExp(/^[0]+[0-9]{9}/);
    return regex.test(value) ? "" :  'Số điện thoại không hợp lệ'
}
validation.isChecked=function(){
    const checked = $('input[name=sex]:checked').length;
    return checked!==0 ? "" :'Chưa chọn giới tính'
}
validation()

$(".sub").click(function(){
    if($(this).hasClass('sub-active'))
        $(this).removeClass('sub-active')
    else $(this).addClass('sub-active')
})

$("#list-btn1").click(()=>{
    $('#list2').append($("#list1").children('.sub-active'))
    $('#list2').find('.sub-active').removeClass('sub-active')
})
$("#list-btn2").click(()=>{
    $('#list2').append($("#list1").children())
    $('#list1').find('.sub-active').removeClass('sub-active')
    $('#list2').find('.sub-active').removeClass('sub-active')
})
$("#list-btn3").click(()=>{
    $('#list1').append($("#list2").children('.sub-active'))
    $('#list1').find('.sub-active').removeClass('sub-active')
})
$("#list-btn4").click(()=>{
    $('#list1').append($("#list2").children())
    $('#list1').find('.sub-active').removeClass('sub-active')
    $('#list2').find('.sub-active').removeClass('sub-active')
})
$(".s-n-header").click(function(){
    if($(this).hasClass('shrink')){
        $(this).removeClass('shrink')
        $(this).parent().children().eq(1).removeClass("dnone")
    }
    else {
        $(this).addClass('shrink')
        $(this).parent().children().eq(1).addClass("dnone")
    
    }
})