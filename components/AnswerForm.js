export default function Demo (props) {

  return <div>
    <form action="#" onSubmit={props.handleAnswer}>

    <h4>Question Category: {props.question.category}</h4>

      <h4>{props.question.title}</h4>
      <h4>{props.question.description}</h4>
      <label>Your Answer</label>
      <textarea name="description"></textarea>

      
      <input type="submit"></input>
    </form>
  </div>
}