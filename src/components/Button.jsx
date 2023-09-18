import './Button.css'

function Button({btnText, style='default'}) {
  return(
    <div className={`btn__container ${style}`}>
      <div className="btn_text">{btnText}</div>
    </div>
  )
}

export default Button