import './scss/base.scss'
import $ from "jquery";


window.onload = function() {
    // функция открытия списка селекта
    $("#status").click(function(e) {
        let listDisplay = $('#statusList').css('display');
        if(listDisplay === 'block') {
            closeList();
        } else {
            openList();
        }
    });
    // функция выбора активного селекта
    $(".select__item").click(function(e) {
        let newText = $(event.target).text();
        $("#status").text(newText);
        closeList();
    });
// открытие выпадающего списка
    function openList() {
        $('#statusList').show();
        $('.overlay').show();
        $('.select__head').addClass('open');
    }
// скрытие выпадающего списка
    function closeList() {
        $('#statusList').hide();
        $('.overlay').hide();
        $('.select__head').removeClass('open');
    }
// метод скрытия списка по нажатию на фон
    $('.overlay').click(function(e) {
        if($('#statusList').css('display') === 'block') {
            closeList();
        }
    });
};

