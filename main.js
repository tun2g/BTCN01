$(".menu").hover(function(){
    $(".menu").removeClass('active-menu')
    $(this).addClass('active-menu')
    $('.f-menu').removeClass('f-menu-active')
    $('.f-menu').eq($(this).index()).addClass('f-menu-active')
})

const validation= function(){
    function reset(ids){
        Array.from(ids).forEach(id=> {
            $(id).click(function(){
                $(this).parent().parent().children().eq(1).text("")
        });
        })
    }
    function clear(ids){
        Array.from(ids).forEach(id=> {
            $(id).val("")
        });
    }
    reset(["#email","#code","#fullname","#address","#sex","#phone"])

    $("#register").click(function(e){
        e.preventDefault()
        let oke=0
        if(validation.isCode('#code')){
            $("#code").parent().parent().children().eq(1).text(validation.isCode('#code'))
        } else oke++ 
        if(validation.isEmail("#email")){
            $("#email").parent().parent().children().eq(1).text(validation.isEmail('#email'))
        } else oke++
        if(validation.isTwoWords('#fullname')){
            $("#fullname").parent().parent().children().eq(1).text(validation.isTwoWords('#fullname'))
        } else oke++
        if(validation.isTwoWords('#address')){
            $("#address").parent().parent().children().eq(1).text(validation.isTwoWords('#address'))
        } else oke++
        if(validation.isPhone('#phone')){
            $("#phone").parent().parent().children().eq(1).text(validation.isPhone('#phone'))
        } else oke++
        if(validation.isChecked()){
            $("#male").parent().parent().parent().children().eq(1).text(validation.isChecked())
        }
        else {$("#male").parent().parent().parent().children().eq(1).text("")
        oke++ }
        if(oke==6){
            alert($('#list2').children().text())
            $('.tb-code').append(`<div class="inf">${$('#code').val()}</div>`)
            $('.tb-fullname').append(`<div class="inf">${$('#fullname').val()}</div>`)
            $('.tb-sex').append(`<div class="inf">${$('input[name=sex]:checked').val()}</div>`)
            date=$('input[name=date]').val()

            $('.tb-birthday').append(`<div class="inf">${date.slice(5,7)}/${date.slice(8,10)}/${date.slice(0,4)}</div>`)
        }
    })
    $('#clear').click(function(){
        clear(["#email","#code","#fullname","#address","#sex","#phone"])
        $('input[name=sex]').prop('checked', false); 
    })
}
validation.isCode=function(id){
    let regex=new RegExp( /^(1[7-9]|2[0-2])[0-9]{6}$/)
    return regex.test($(id).val()) ? undefined :  'Phải có 8 chữ số bắt đầu từ 17-22'
}
validation.isEmail=function(id){
    let regex=new RegExp( /^[a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,}){1,3}$/)
    return regex.test($(id).val()) ? undefined :  'Email không hợp lệ'    
}
validation.isTwoWords=function(id){
    let regex=new RegExp(/[A-Za-z0-9]{1,}\s[A-Za-z0-9]{1,}$/)
    return regex.test($(id).val()) ? "" :  'Phải có ít nhất 2 từ'
}
validation.isPhone=function(id){
    let regex = new RegExp(/^[0]+[0-9]{9}/);
    return regex.test($(id).val()) ? "" :  'Số điện thoại không hợp lệ'
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
$(".side").tabs()
$(".side").sortable({axis:"y",containment:".side"})
$(".inf:odd").addClass('even')
$("#list1 .sub").draggable({helper:"clone"})
$("#list2").droppable({drop:function(e,ui){
    $('#list2').append(ui.draggable)
}})
$("#list2 .sub").draggable({helper:"clone"})
$("#list1").droppable({drop:function(e,ui){
    $('#list1').append(ui.draggable)
}})