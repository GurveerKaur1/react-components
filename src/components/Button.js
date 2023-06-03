function Button(props) {
  return (
    <button className={props.isPrimary ? "explore" : "order"}>
    {props.isPrimary ? "Explore Menu" : "Order Now"}</button>
    
  )
}

export default Button