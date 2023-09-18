import Button from './Button'

function BookDashboardOptions({alignOptionItems = '', options}) {
  const optionsButtons = [];

  function selectStyle(opt){
    if (opt.hasOwnProperty("style")){
      return opt.style
    }
    return 'default'
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

export default BookDashboardOptions