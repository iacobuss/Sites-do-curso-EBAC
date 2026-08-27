$('form').on('submit', function(e) {
    e.preventDefault();

    const tarefa = $('#tarefa').val();

    const novoItem = $('<li></li>');
    novoItem.text(tarefa);

    $('#lista-tarefas').append(novoItem);

    $('#tarefa').val('');
});