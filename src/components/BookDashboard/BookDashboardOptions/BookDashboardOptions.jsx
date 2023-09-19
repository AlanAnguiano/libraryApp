import Button from '../../Button/Button'

const BookDashboardOptions = ({alignOptionItems = '', options}) => {
  const optionsButtons = [];

  const selectStyle = (opt) => {
    return opt.hasOwnProperty("style") ? opt.style : 'default'
  }

  options.forEach((option) => {
    let style = selectStyle(option)

    optionsButtons.push(
      <Button btnText ={ option.optionText } style={style}></Button>
    )
  })

  return(
    <div className={`bookDashboardOptions__container ${alignOptionItems}`}>
      {optionsButtons}
    </div>
  )
}
