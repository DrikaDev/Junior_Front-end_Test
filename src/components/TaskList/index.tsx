function TaskList() {
  const list = [
    {id: 1, task: 'Ir ao mercado'},
    {id: 2, task: 'Enviar o relatório'},
    {id: 3, task: 'Agendar a reunião'}
  ];

  return (
    <div>
      <h2>Lista de tarefas</h2>
      <ol>
        {list.map(task => (
            <li key={task.id}>{task.task}</li>
        ))}
      </ol>
    </div>
  );
}

export default TaskList;
