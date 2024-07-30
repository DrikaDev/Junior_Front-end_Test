function TaskForm() {
  return (
    <form>
      <h2>Formulário da tarefa</h2>
      <label>
        <p>Digite o título da tarefa:</p>
        <input type="text" name="title"/>
      </label>
      <label>
        <p>Digite a descrição da tarefa:</p>
        <textarea name="description"></textarea>
      </label>
      <label>
        <p>Selecione a prioridade:</p>
        <select name="priority" id="priority">
          <option value="low">Baixa</option>
          <option value="medium">Média</option>
          <option value="high">Alta</option>
        </select>
      </label>
      <div>
        <button type="submit">Incluir tarefa</button>
      </div>
    </form>
  );
}

export default TaskForm;
