$(document).ready(function() {
    $('button').click(function(e) {
        e.preventDefault();

        let todoText = $('#tarefa').val();

        if (todoText) {
            $('ul').append('<li>' + todoText + '</li>');
            $('#tarefa').val('');
        }

        $('ul li').click(function() {
            $(this).toggleClass('completed');
        });
    });
});