export function Post(props){
    console.log(props)
    return (
        <div>
            <p>{props.author}</p>
            <p>{props.content}</p>
        </div>
    )
}