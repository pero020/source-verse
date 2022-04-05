export default function Demo (props) {

  return <div>
    <form action="#" onSubmit={props.handleSubmit}>

      <label>Title</label>
      <input type="text" name="title"></input>

      <label>Description</label>
      <textarea name="description"></textarea>

      <label>Category:</label>
      <select name="category">
        <option value="general">General</option>
        <option value="business">Business</option>
        <option value="relationships">Relationships</option>
      </select>
      <input type="submit"></input>
    </form>
  </div>
}