import './BookDashboard.css'
import BookDashboardOptions from './BookDashboardOptions'

const OPTIONS = [
  { optionText: 'Add New Book', style: 'add' }
]

const BookDashboard = () => {
  return(
    <div className='dashboard__container'>
      <BookDashboardOptions alignOptionItems="right" options={OPTIONS}/>
      {/* BookList */}
    </div>
  )
}
